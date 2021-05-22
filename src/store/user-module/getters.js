export function getUserData(state) {
  return {
    fullName: state.fullName,
    email: state.email,
    firstName: state.firstName,
    lastName: state.lastName,
    avatarUrl: state.avatarUrl,
    accessToken: state.accessToken,
  };
}
export function isLoggedIn(state) {
  return state.isLoggedIn;
}
