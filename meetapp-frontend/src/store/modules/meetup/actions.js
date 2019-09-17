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

export function getMeetupRequest(id) {
  return {
    type: '@meet/DETAIL_MEETUP_REQUEST',
    payload: { id },
  };
}

export function getMeetupSuccess(data) {
  return {
    type: '@meet/DETAIL_MEETUP_SUCCESS',
    payload: { data },
  };
}

export function getMeetupFailure() {
  return {
    type: '@meet/DETAIL_MEETUP_FAILURE',
  };
}

export function editMeetupRequest(data) {
  return {
    type: '@meet/EDIT_MEETUP_REQUEST',
    payload: { data },
  };
}

export function editMeetupFailure() {
  return {
    type: '@meet/EDIT_MEETUP_FAILURE',
  };
}

export function editMeetupSuccess(data) {
  return {
    type: '@meetup/EDIT_MEETUP_SUCCESS',
    payload: { data },
  };
}
