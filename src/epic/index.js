import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import { FETCH_USER_INFO, fetchUserInfoSuccess } from '../actions';

const makeHeader = () => {
  return 
}

function fetchUserInfo(action$) {
  const token = localStorage.getItem('githubAuthToken');

  return action$
    .ofType(FETCH_USER_INFO)
    .switchMap(({payload}) => {
      return Observable.ajax({
        url: 'https://api.github.com/user',
        method: 'GET',
        headers: {
          Authorization: `token ${token}`,
        },
      }).map((user) => {
        return fetchUserInfoSuccess(user.response);
      })
    })

}

export default combineEpics(fetchUserInfo);