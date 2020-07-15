// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {browsers: 'last 5 version'},
    "postcss-pxtorem": { // 此处为添加部分
      "rootValue": 60, // 对应16px 适配移动端750px宽度
      "unitPrecision": 5,
      "propList": ['*'], // 需要被转换的属性
      "selectorBlackList": [], // 不进行px转换的选择器
      "replace": true,
      "mediaQuery": false,
      "minPixelValue": 0
    },  
  }
}
