module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? process.env.VUE_APP_ROOT_DIRECTORY
      : "/",
  transpileDependencies: ["vuetify"]
};
