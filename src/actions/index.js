
export const SAVE_ACCESS_TOKEN = 'SAVE_ACCESS_TOKEN';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const FETCH_USER_INFO_ERROR = 'FETCH_USER_INFO_ERROR';
export const FETCH_ACCESS_TOKEN_ERROR = 'FETCH_ACCESS_TOKEN_ERROR';
export const FETCH_GIST_SUCCESS = 'FETCH_GIST_SUCCESS';
export const FETCH_GIST_ERROR = 'FETCH_GIST_ERROR';
export const FETCH_GIST_ALL = 'FETCH_GIST_ALL';
export const POST_NEW_GIST = 'POST_NEW_GIST';
export const POST_NEW_GIST_SUCCESS = 'POST_NEW_GIST_SUCCESS';
export const POST_NEW_GIST_ERROR = 'POST_NEW_GIST_ERROR';
export const DELETE_GIST = 'DELETE_GIST';
export const DELETE_GIST_SUCCESS = 'DELETE_GIST_SUCCESS';
export const DELETE_GIST_ERROR = 'DELETE_GIST_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const EDIT_GIST = 'EDIT_GIST';
export const EDIT_GIST_SUCCESS = 'EDIT_GIST_SUCCESS';
export const EDIT_GIST_ERROR = 'EDIT_GIST_ERROR';


const createNewGistPayload = (values) => {
  return {
    public: true,
    description: values.description,
    files: {
      [values.front + '.md']: {
        content: values.back
      }
    }
  }
}

const deleteGistPayload = (filename) => {
  return {
    files: {
      [filename + '.md']: null,
    }
  }
}

export const fetchAccessTokenError = (error) => {
  return {
    type: FETCH_ACCESS_TOKEN_ERROR,
    payload: {
      error,
    }
  }
}

export const fetchUserInfoError = (error) => {
  return {
    type: FETCH_USER_INFO_ERROR,
    payload: {
      error,
    }
  }
}

export const fetchUserInfo = () => {
  return {
    type: FETCH_USER_INFO,
  }
}

export const saveAccessToken = (token) => {
  return {
    type: SAVE_ACCESS_TOKEN,
    payload: {
      token,
    }
  }
}

export const fetchUserInfoSuccess = (user) => {
  return {
    type: FETCH_USER_INFO_SUCCESS,
    payload: user,
  }
}

export const fetchGistSuccess = (gists) => {
  return {
    type: FETCH_GIST_SUCCESS,
    payload: gists,
  };
}

export const fetchGistError = (error) => {
  return {
    type: FETCH_GIST_ERROR,
    payload: error,
  };
}

export const fetchGistAll = () => {
  return {
    type: FETCH_GIST_ALL,
  }
}

export const postNewGist = (values) => {
  return {
    type: POST_NEW_GIST,
    payload: createNewGistPayload(values),
  }
};

export const postNewGistSuccess = () => {
  return {
    type: POST_NEW_GIST_SUCCESS,
  }
}

export const postNewGistError = (error) => {
  return {
    type: POST_NEW_GIST_ERROR,
    paylaod: error,
  }
}

export const deleteGist = (filename) => {
  return {
    type: DELETE_GIST,
    payload: deleteGistPayload(filename),
  }
}

export const deleteGistSuccess = (payload) => {
  return {
    type: DELETE_GIST_SUCCESS,
    payload,
  };
}

export const deleteGistError = (error) => {
  return {
    type: DELETE_GIST_ERROR,
    payload: error,
  }
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export const editGist = (values) => {
  return {
    type: EDIT_GIST,
    payload: createNewGistPayload(values)
  }
}

export const editGistSuccess = (payload) => {
  return {
    type: EDIT_GIST_SUCCESS,
    payload,
  };
};

export const editGistError = (error) => {
  return {
    type: EDIT_GIST_ERROR,
    payload: error,
  }
}