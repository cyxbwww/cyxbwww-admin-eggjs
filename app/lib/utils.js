/**
 * @Description 实用函数
 * @Author luomingfeng
 * @Date 2022/3/26 21:39
 */

module.exports = {
  /**
   * @description 判断是否空对象
   * @param {Object} target
   * @return Boolean
   */
  isEmptyObject(target) {
    return Object.keys(target).length === 0
  },
  /**
   * @description 提取参数
   * @param {Object} target
   * @return Array
   */
  extractKey(target) {
    let key = []
    let keyFilter = ['_url', '_']
    for (const i in target) {
      if (this.isInArray(keyFilter, i)) break
      key.push(i)
    }
    return key
  },
  /**
   * @description 判断是否存在数组中
   * @param {Array} target
   * @param {String} key
   * @return Boolean
   */
  isInArray(target, key) {
    return target.includes(key)
  },
}
