const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const Dotenv = require('dotenv-webpack');


module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  }
}
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/crud-latest/'
//     : '/'
// }
