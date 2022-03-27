/**
 * @Description 用户业务逻辑
 * @Author luomingfeng
 * @Date 2022/3/27 3:03
 */

const Service = require('egg').Service

class UserService extends Service {
  constructor(ctx) {
    super(ctx)
  }

  async login() {
    // todo
    console.log('==============', this)
  }
}

module.exports = UserService
