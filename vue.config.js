const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // if set to false it will not run eslint when building to target
  lintOnSave: 'default',
  productionSourceMap: false,
})
