/**
 * @Description 用户业务逻辑
 * @Author luomingfeng
 * @Date 2022/3/27 3:03
 */

const Service = require('egg').Service

class UserService extends Service {
  constructor(ctx) {
    super(ctx)
    this.helper = ctx.helper
  }

  async initAdmin() {
    return this.responseHandler(
      this.errorMap.SUCCESS,
      await this.app.model.UserModel.initAdmin(this.params)
    )
  }

  async login() {
    const data = await this.app.model.UserModel.getUserInfo(this.params)
    if (data) {
      const { password: validPassword } = this.params
      const { id: userId, name: userName, password } = data
      if (password === validPassword) {
        const token = this.app.jwt.sign(
          {
            userId,
          },
          this.app.config.jwt.secret
        )
        const userInfo = {
          userId,
          userName,
        }
        return this.responseHandler(this.errorMap.SUCCESS, {
          token,
          userInfo,
        })
      } else {
        return this.responseHandler(this.errorMap.PASSWORD_ERROR)
      }
    } else {
      return this.responseHandler(this.errorMap.USER_NOT_FOUND)
    }
  }

  async getUserRoutes() {
    return this.responseHandler(this.errorMap.SUCCESS, {
      home: 'dashboard_analysis',
      routes: [
        {
          name: 'dashboard',
          path: '/dashboard',
          component: 'basic',
          children: [
            {
              name: 'dashboard_analysis',
              path: '/dashboard/analysis',
              component: 'self',
              meta: {
                title: '分析页',
                requiresAuth: true,
              },
            },
            {
              name: 'dashboard_workbench',
              path: '/dashboard/workbench',
              component: 'self',
              meta: {
                title: '工作台',
                requiresAuth: true,
              },
            },
          ],
          meta: {
            title: '仪表盘',
          },
        },
        {
          name: 'management',
          path: '/management',
          component: 'basic',
          children: [
            {
              name: 'management_menu',
              path: '/management/menu',
              component: 'self',
              meta: {
                title: '菜单管理',
                requiresAuth: true,
              },
            },
            {
              name: 'management_role',
              path: '/management/role',
              component: 'self',
              meta: {
                title: '角色管理',
                requiresAuth: true,
              },
            },
            {
              name: 'management_user',
              path: '/management/user',
              component: 'self',
              meta: {
                title: '用户管理',
                requiresAuth: true,
              },
            },
          ],
          meta: {
            title: '系统管理',
          },
        },
      ],
    })
  }
}

module.exports = UserService
