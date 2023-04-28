/* eslint-disable no-useless-escape */
import { nextTick } from 'vue'
import * as svg from '@element-plus/icons-vue'

// 获取阿里字体图标
const getAlicdnIconfont = () => {
  return new Promise((resolve, reject) => {
    nextTick(() => {
      const styles: any = document.styleSheets
      const sheetsList = []
      const sheetsIconList = []
      for (const style of styles) {
        if (style.href && style.href.includes('at.alicdn.com')) {
          sheetsList.push(style)
        }
      }
      for (const element of sheetsList) {
        for (let j = 0; j < element.cssRules.length; j++) {
          if (
            element.cssRules[j].selectorText &&
            element.cssRules[j].selectorText.includes('.icon-')
          ) {
            sheetsIconList.push(
              `${element.cssRules[j].selectorText
                .substring(1, element.cssRules[j].selectorText.length)
                .replace(/\:\:before/gi, '')}`
            )
          }
        }
      }
      if (sheetsIconList.length > 0) resolve(sheetsIconList)
      else reject('未获取到值，请刷新重试')
    })
  })
}

// 初始化获取 css 样式，获取 element plus 自带 svg 图标，增加了 ele- 前缀，使用时：ele-Aim
const getElementPlusIconfont = () => {
  return new Promise((resolve, reject) => {
    nextTick(() => {
      const icons = svg as any
      const sheetsIconList = []
      for (const i in icons) {
        sheetsIconList.push(`ele-${icons[i].name}`)
      }
      if (sheetsIconList.length > 0) resolve(sheetsIconList)
      else reject('未获取到值，请刷新重试')
    })
  })
}

// 初始化获取 css 样式，这里使用 fontawesome 的图标
const getAwesomeIconfont = () => {
  return new Promise((resolve, reject) => {
    nextTick(() => {
      const styles: any = document.styleSheets
      const sheetsList = []
      const sheetsIconList = []
      for (const style of styles) {
        if (style.href && style.href.includes('netdna.bootstrapcdn.com')) {
          sheetsList.push(style)
        }
      }
      for (const element of sheetsList) {
        for (let j = 0; j < element.cssRules.length; j++) {
          if (
            element.cssRules[j].selectorText &&
            element.cssRules[j].selectorText.indexOf('.fa-') === 0 &&
            !element.cssRules[j].selectorText.includes(',')
          ) {
            if (/::before/.test(element.cssRules[j].selectorText)) {
              sheetsIconList.push(
                `${element.cssRules[j].selectorText
                  .substring(1, element.cssRules[j].selectorText.length)
                  .replace(/\:\:before/gi, '')}`
              )
            }
          }
        }
      }
      if (sheetsIconList.length > 0) resolve(sheetsIconList.reverse())
      else reject('未获取到值，请刷新重试')
    })
  })
}

/**
 * 获取字体图标 `document.styleSheets`
 * @method ali 获取阿里字体图标 `<i class="iconfont 图标类名"></i>`
 * @method ele 获取 element plus 自带图标 `<i class="图标类名"></i>`
 * @method ali 获取 fontawesome 的图标 `<i class="fa 图标类名"></i>`
 */
const initIconfont = {
  // iconfont
  ali: () => {
    return getAlicdnIconfont()
  },
  // element plus
  ele: () => {
    return getElementPlusIconfont()
  },
  // fontawesome
  awe: () => {
    return getAwesomeIconfont()
  },
}

// 导出方法
export default initIconfont
