/**
 * @Description 用户模型
 * @Author luomingfeng
 * @Date 2022/4/9 14:19
 */

module.exports = (app) => {
  const table = 'user'
  const { DATE, STRING, INTEGER } = app.Sequelize
  const UserModel = app.model.define(
    table,
    {
      name: STRING(255),
      email: STRING(50),
      phone: INTEGER,
      password: STRING(128),
      headimg: STRING(1024),
      remark: STRING(100),
      status: INTEGER,
      token: STRING(128),
      created_at: {
        type: DATE,
        get() {
          if (this.getDataValue('created_at'))
            return this.helper.formatTime(this.getDataValue('created_at'))
        },
      },
      updated_at: {
        type: DATE,
        get() {
          if (this.getDataValue('updated_at'))
            return this.helper.formatTime(this.getDataValue('updated_at'))
        },
      },
      deleted_at: DATE,
    },
    {
      freezeTableName: true,
      tableName: table,
      timestamps: false,
    }
  )

  /**
   * @Description 定义关联关系
   * @Author luomingfeng
   * @Date 2022/4/9 14:36
   */
  UserModel.associate = () => {}

  /**
   * @Description 初始化管理员
   * @Author luomingfeng
   * @Date 2022/4/9 14:37
   */
  UserModel.initAdmin = async (params) => {
    const { username, email, password } = params
    return UserModel.create({
      name: username,
      email: email,
      password: password,
    })
  }

  return UserModel
}
