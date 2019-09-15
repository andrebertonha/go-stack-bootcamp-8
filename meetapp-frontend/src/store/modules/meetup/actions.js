export function createMeetupRequest(meetup) {
  return {
    type: '@meet/CREATE_MEETUP_REQUEST',
    payload: { meetup },
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: '@meet/CREATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function createMeetupFailure() {
  return {
    type: '@meet/CREATE_MEETUP_FAILURE',
  };
}
