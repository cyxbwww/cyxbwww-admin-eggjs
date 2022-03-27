/**
 * @Description 用户路由
 * @Author luomingfeng
 * @Date 2022/3/26 17:11
 */

module.exports = (app) => {
  const { router, controller } = app

  // 登录
  router.post('/api/user/login', controller.user.login)
}
