/**
 * @Description 本地配置
 * @Author luomingfeng
 * @Date 2022/4/5 16:05
 */

exports.security = {
  csrf: {
    enable: false,
  },
}

exports.sequelize = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  database: 'my_blog_test',
  password: 'root',
}
