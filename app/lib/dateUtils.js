/**
 * @Description 日期函数
 * @Author luomingfeng
 * @Date 2022/3/26 21:39
 */

module.exports = {
  /**
   * @description 格式化时间
   * @param {String} time
   * @return String
   */
  formatTime(time) {
    const timer = new Date(time)
    const year = timer.getFullYear()
    const mouth = timer.getMonth() + 1 > 10 ? timer.getMonth() + 1 : '0' + (timer.getMonth() + 1)
    const date = timer.getDate() > 10 ? timer.getDate() : '0' + timer.getDate()
    const hours = timer.getHours() > 10 ? timer.getHours() : '0' + timer.getHours()
    const min = timer.getMinutes() > 10 ? timer.getMinutes() : '0' + timer.getMinutes()
    const secon = timer.getSeconds() > 10 ? timer.getSeconds() : '0' + timer.getSeconds()
    return year + '-' + mouth + '-' + date + ' ' + hours + ':' + min + ':' + secon
  },
}
