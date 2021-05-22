export function setUserData(state, payload) {
  state.fullName = payload.fullName;
  state.email = payload.email;
  state.firstName = payload.firstName;
  state.lastName = payload.lastName;
  state.avatarUrl = payload.avatarUrl;
  state.accessToken = payload.accessToken;
  state.isLoggedIn = payload.isLoggedIn;
}
export function setIsLoggedIn(state, payload) {
  state.isLoggedIn = payload.isLoggedIn;
}
