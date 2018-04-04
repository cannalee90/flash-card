import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import { 
  FETCH_USER_INFO,
  FETCH_GIST_ALL,
  fetchUserInfoSuccess,
  fetchUserInfoError,
  fetchGistSuccess,
  fetchGistError,
 } from '../actions';

const baseURL = 'https://api.github.com';
const makeHeader = () => {
  const token = localStorage.getItem('githubAuthToken');
  const headers =  {
    Authorization: `token ${token}`,
  };
  return headers;
}

function fetchGists(action$) {
  return action$
    .ofType(FETCH_GIST_ALL)
    .switchMap(({payload}) => {
      return Observable.ajax({
        url: baseURL + '/gists',
        method: 'GET',
        headers: makeHeader(),
      })
      .map(({response}) => response.filter((gist) => gist.public))
      .map((filtered) => fetchGistSuccess(filtered))
      .catch((error) => fetchGistError(error));
    })
}

function fetchUserInfo(action$) {
  return action$
    .ofType(FETCH_USER_INFO)
    .switchMap(({payload}) => {
      return Observable.ajax({
        url: 'https://api.github.com/user',
        method: 'GET',
        headers: makeHeader(),
      })
      .map((user) => fetchUserInfoSuccess(user.response))
      .catch((error) => fetchUserInfoError(error))
    });
}


export default combineEpics(fetchUserInfo, fetchGists);