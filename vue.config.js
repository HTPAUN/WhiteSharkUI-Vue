const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir); //设置绝对路径
}
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/WhiteSharkUI-Vue/' : '/',
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
    .set('@assets', resolve('packages/assets'),'css')
    .set('@components', resolve('packages/components'))

    config.module.rule('js')
    .include.add(path.resolve(__dirname, 'packages')).end()
    .use('babel').loader('babel-loader').tap(options => options)
  },
};
