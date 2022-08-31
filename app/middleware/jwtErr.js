module.exports = (options) => {
  return async function jwtErr(ctx, next) {
    const token = ctx.request.header.authorization
    try {
      // 解码token
      ctx.app.jwt.verify(token, options.secret)
      await next()
    } catch (error) {
      ctx.status = 401
      ctx.body = {
        code: 2000,
        message: 'token已过期，请重新登录',
        data: '',
      }
    }
  }
}
