# [canvas](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)

## 

``` js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
```

## strokeStyle 设置描边颜色

## fillStyle 设置填充颜色

## globalAlpha 设置透明度0-1

## beginPath() 开始绘制

## moveTo(x, y) 将笔触移动到指定的坐标x以及y上。

## lineTo(x, y) 画线

## stroke() 描边

## fill() 填充

## closPath() 闭合线

## arc(x, y, r, startAngle, endAngle, false) 绘制弧

圆心位置x, y; r半径, startAbgle开始角度; endAngle结束角度; 默认顺时针false

## lineWidth 线条宽度

## lineCap 线条末端样式（butt，round 和 square）

## lineJoin 的属性值决定了图形中两线段连接处所显示的样子（miter 尖, round 圆 和 bevel 平)  

## clearRect(x, y, width, height) 清空画布

## miterLimit 限制当两条线相交时交接处最大长度

所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。

## getLineDash([])

返回一个包含当前虚线样式，长度为非负偶数的数组。

## setLineDash(segments)

设置当前虚线样式。

## lineDashOffset = value

设置虚线样式的起始偏移量。

## createLinearGradient(x, y, x1, y1) 线性渐变

渐变起点 (x, y)
渐变终点 (x1, y2)
***渐变样式可以复制给fillStyle, strokeStyle***

### 使用方法

``` js
const linearGradient = ctx.createLinearGradient(0, 0, 0, 150);
linearGradient.addColorStop(0, 'red');
linearGradient.addColorStop(1, 'blue');
ctx.fillStyle = linearGradient;
ctx.strokeStyle = linearGradient;
```

## createRadialGradient(x, y, r, x1, y1, r1) 径向渐变

第一个圆的圆心(x, y), 第一个圆的半径r
第二个圆的圆心(x1, y1), 第二个圆的半径r1

## createPattern() 加载图片

***需要等createPattern加载完成图片才会出来

``` js
let img = new Image();
img.src = 'test.jpg';
img.onload = function() {
    let ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(10, 10, 200, 200);
}
```

## 阴影

### shadowOffsetX x偏移量

### shadowOffsetY y偏移量

### shadowBlur 模糊程度

### shadowColor 颜色

## fillText(text, x, y[, maxWidth]) 绘制文本 内容
## strokeText(text, x, y[, maxWidth]) 绘制文本 描边

## rotate(旋转角度)

## font 字体大小

## 只一点
###  canvas 字体模糊
错误示例 strokeFont("text",0,0);为描边, 将字号放大可以看出区别
绘制使用方法错误,使用fillFont("text",0,0);
