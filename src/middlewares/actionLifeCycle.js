// referenced https://github.com/redux-observable/redux-observable/issues/90#issuecomment-237331721

export default store => next => {
  const pending = {};

  return action => {
    let ret;

    if (action.meta && action.meta.lifecycle) {
      ret = new Promise((resolve, reject) => {
        const { lifecycle } = action.meta;
        pending[lifecycle.resolve] = resolve;
        pending[lifecycle.reject] = reject;
      });
      next(action);
    } else {
      ret = next(action);
    }

    if (pending[action.type]) {
      const resolveOrReject = pending[action.type];
      delete pending[action.type];
      resolveOrReject(action);
    }

    return ret;
  };
};