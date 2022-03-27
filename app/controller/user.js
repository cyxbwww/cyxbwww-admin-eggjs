/**
 * @Description 用户
 * @Author luomingfeng
 * @Date 2022/3/26 17:11
 */

const Controller = require('egg').Controller

class UserController extends Controller {
  async login() {
    this.app.validateRule = {
      username: { type: 'string', required: true },
      password: { type: 'string', required: true },
    }
    this.ctx.body = await this.service.apiService.verifyApiParam()
  }
}

module.exports = UserController
