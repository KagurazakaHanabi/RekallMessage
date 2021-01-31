module.exports = {
  parallel: false,
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "异次元通讯";
      return args;
    });
  }
};
