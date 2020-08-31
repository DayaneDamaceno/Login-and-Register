import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        break;
      }
      case '@auth/SIGN_FAILURE': {
        break;
      }
      case '@auth/SIGN_OUT': {
        break;
      }
      default:
    }
  });
}
