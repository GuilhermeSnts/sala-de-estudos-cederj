export function SET_COURSES(state, payload) {
  state.courses = payload;
}
export function SET_COURSE_SWITCH(state, { code, value }) {
  state.courses[code] = value;
}
