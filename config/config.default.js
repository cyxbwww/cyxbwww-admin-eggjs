/* eslint valid-jsdoc: "off" */

const { codeMap, errorMap } = require('../config/constant')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1648271076961_8477'

  // add your middleware config here
  config.middleware = []

  config.codeMap = codeMap

  config.errorMap = errorMap

  config.jwt = {
    expire: 7200, // token过期时间
    secret: '123456',
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig,
  }
}
