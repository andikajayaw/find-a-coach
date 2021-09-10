export default {
    setUser(state, payload) {
        state.toke = payload.token;
        state.userId = payload.userId;
        state.tokenExpiration = payload.tokenExpiration;
    }
}