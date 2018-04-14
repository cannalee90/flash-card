import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import { 
  FETCH_USER_INFO,
  FETCH_GIST_ALL,
  POST_NEW_GIST,
  DELETE_GIST,
  EDIT_GIST,
  fetchUserInfoSuccess,
  fetchUserInfoError,
  fetchGistSuccess,
  fetchGistError,
  postNewGistError,
  postNewGistSuccess,
  deleteGistError,
  deleteGistSuccess,
  editGistError,
  editGistSuccess,
 } from '../actions';

const baseURL = 'https://api.github.com';
const addTimeStamp = (url) => {
  const timestamp = new Date();
  return `${url}?timestamp=${timestamp.getTime()}`
}

const makeHeader = () => {
  const token = localStorage.getItem('githubAuthToken');
  const headers =  {
    Authorization: `token ${token}`,
    'Content-Type': 'application/json',
  };
  return headers;
}

function fetchGists(action$) {
  return action$
    .ofType(FETCH_GIST_ALL)
    .switchMap(({payload}) => {
      return Observable.ajax({
        url: addTimeStamp(baseURL + '/gists/ea178d763c72b03dcee8ee4fa0dc03ae'),
        method: 'GET',
        headers: makeHeader(),
      })
      .map((res) => {
        return res.response;
      })
      .map((filtered) => fetchGistSuccess(filtered))
      .catch((error) => Observable.of(fetchGistError(error)));
    })
}

// function fetchGists(action$) {
//   return action$
//     .ofType(FETCH_GIST_ALL)
//     .switchMap(({payload}) => {
//       return Observable.ajax({
//         url: baseURL + '/gists',
//         method: 'GET',
//         headers: makeHeader(),
//       })
//       .map(({response}) => {
//         return Observable.from(response);
//       })
//       .concatMap((arr) => {
//         return arr;
//       })
//       .filter((res) => {
//         return res.public;
//       })
//       .toArray()
//       .map((filtered) => {
//         console.log('filstered', filtered);
//         return fetchGistSuccess(filtered);
//       })
//       .catch((error) => Observable.of(fetchGistError(error)));
//     })
// }


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
      .catch((error) => Observable.of(fetchUserInfoError(error)));
    });
}

function postNewGist(action$) {
  return action$
    .ofType(POST_NEW_GIST)
    .switchMap(({payload}) => {
      return Observable.ajax({
        method: 'PATCH',
        url: baseURL + '/gists/ea178d763c72b03dcee8ee4fa0dc03ae',
        headers: makeHeader(),
        body: payload,
      })
      .map((res) => postNewGistSuccess())
      .catch((error) => Observable.of(postNewGistError(error)));
    })
}

function deleteGist(action$) {
  return action$
    .ofType(DELETE_GIST)
    .switchMap(({payload}) => {
      return Observable.ajax({
        method: 'PATCH',
        url: baseURL + '/gists/ea178d763c72b03dcee8ee4fa0dc03ae',
        headers: makeHeader(),
        body: payload,
      })
      .map((res) => deleteGistSuccess(res.response))
      .catch((error) => Observable.of(deleteGistError(error)));
    });
}

function editGist(action$) {
  return action$
    .ofType(EDIT_GIST)
    .switchMap(({payload}) => {
      return Observable.ajax({
        method: 'PATCH',
        url: baseURL + '/gists/ea178d763c72b03dcee8ee4fa0dc03ae',
        headers: makeHeader(),
        body: payload,
      })
      .map((res) => editGistSuccess(res.response))
      .catch((error) => Observable.of(editGistError(error)))
    });
}

export default combineEpics(fetchUserInfo, fetchGists, postNewGist, deleteGist, editGist);