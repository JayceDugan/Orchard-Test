export default {
  STORE: (state, payload) => state.data = payload,
  SET_LOADING: (state, payload) => state.loading = payload,
  SET_FAILED_LOADING: (state, payload) => state.failedLoading = payload
}
