export default {
    user: null,
    isAuthenticated() {
      return this.user !== null;
    },
    login(user) {
      this.user = user;
    },
    logout() {
      this.user = user;
    },
  };
