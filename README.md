# fuelui-bi

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### 自适应原理
利用 MutationObserver接口提供了监视对DOM树所做更改的能力，监听整个界面最外层盒子的变化，从而去设计整体的缩放比例，
内部的单位可直接按照ui视觉设计一致单位编写代码，保证视觉一致性，现在的缩放逻辑是根据整个窗体缩放来做的，如果要按照自己的
缩放比例请重写缩放逻辑。
```js
const {
      width,
      height,
      originalWidth,
      originalHeight
    } = this
    const viewportWidth = document.body.clientWidth
    const viewportHeight = document.body.clientHeight
    const realWidth = width || originalWidth
    const realHeight = height || originalHeight
    this.dom.style.transform = `scale(${viewportWidth / realWidth}, ${viewportHeight / realHeight})`
```
