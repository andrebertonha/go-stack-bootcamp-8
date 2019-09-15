import produce from 'immer';

const INITIAL_STATE = {
  meetup: null,
};

export default function meet(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meet/CREATE_MEETUP_REQUEST': {
        draft.meetup = action.payload.meet;
        break;
      }
      case '@meet/CREATE_MEETUP_SUCCESS': {
        draft.meetup = action.payload.meetup;
        break;
      }
      case '@meet/CREATE_MEETUP_FAILURE': {
        draft.meetup = null;
        break;
      }
      default:
    }
  });
}
