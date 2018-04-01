import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import { FETCH_USER_INFO, fetchUserInfoSuccess, fetchUserInfoError } from '../actions';

const makeHeader = () => {
  const token = localStorage.getItem('githubAuthToken');
  const headers =  {
    Authorization: `token ${token}`,
  };
  return headers;
}

function fetchUserInfo(action$) {
  return action$
    .ofType(FETCH_USER_INFO)
    .switchMap(({payload}) => {
      return Observable.ajax({
        url: 'https://api.github.com/user',
        method: 'GET',
        headers: makeHeader(),
      }).map((user) => {
        return fetchUserInfoSuccess(user.response);
      }).catch((error) => {
        return fetchUserInfoError(error);
      })
    });

}

export default combineEpics(fetchUserInfo);