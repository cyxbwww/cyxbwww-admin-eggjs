/**
 * @Description 关系映射
 * @Author luomingfeng
 * @Date 2022/3/26 21:15
 */

module.exports = {
  codeMap: {
    0: 'SUCCESS',
    1000: '参数规则不能为空',
    1001: '缺少参数',
    1002: '参数错误',
    2000: 'token已失效，请重新登录',
    2001: '用户不存在',
    2002: '密码错误',
  },
  errorMap: {
    SUCCESS: 0,
    PARAM_RULE_NO_ALLOW_EMPTY: 1000,
    PARMA_MISSING: 1001,
    PARMA_ERROR: 1002,
    TOKEN_ERROR: 2000,
    USER_NOT_FOUND: 2001,
    PASSWORD_ERROR: 2002,
  },
}
