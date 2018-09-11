# testin ESLint 规则

[![npm package](https://img.shields.io/npm/v/eslint-config-testin.svg)](https://www.npmjs.com/package/eslint-config-testin) [![npm downloads](http://img.shields.io/npm/dm/eslint-config-testin.svg)](https://www.npmjs.org/package/eslint-config-testin)

## 使用方法

### 标准规则

安装：

```bash
npm install --save-dev eslint babel-eslint eslint-config-testin
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'testin'
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
    },
    rules: {
        // 这里填入你的项目需要的个性化配置
    }
};
```
