import Config from '../config';

const demoCards = [
  {
    front: 'Process',
    back: '실행중인 프로그램으로 말할 수 있다. 디스크에 있던 프로그램들이 메모리상에 적재된 상태',
  },
  {
    front: 'Thread',
    back: '프로세스 내에서 실행되는 여러 흐름의 단위. 한개의 프로세스는 여러가지 쓰레드를 가질 수 있으며 쓰레드끼리는 자원 공유가 용이하다',
  }
];

export const FETCH_CARDS = 'FETCH_CARDS';
export const SAVE_ACCESS_TOKEN = 'SAVE_ACCESS_TOKEN';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';

export const fetchCards = () => {
  return {
    type: FETCH_CARDS,
    cards: demoCards,
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