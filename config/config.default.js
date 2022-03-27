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
  const config = (exports = {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1648271076961_8477',
    // add your middleware config here
    middleware: [],
    security: {
      csrf: false,
    },
    codeMap: codeMap,
    errorMap: errorMap,
    validate: {
      convert: true,
    },
  })

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig,
  }
}
