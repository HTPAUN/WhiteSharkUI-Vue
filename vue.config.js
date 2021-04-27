const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir); //设置绝对路径
}
module.exports = {
  devServer: {
    overlay: {
      warnings: false, //不显示警告
      errors: false, //不显示错误
    },
  },
  lintOnSave: false, //关闭eslint检查
  chainWebpack: (config) => {
    // 在项目根目录输入 vue inspect resolve.alias 可查看全部路径别名
    config.resolve.alias
    .set('@assets', resolve('src/assets'),'css')
    .set('@components', resolve('src/components'))
  },
};
