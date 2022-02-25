## transform

旋转，缩放，倾斜或平移给定元素

### matrix()

[详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function)

### matrix3d()

[详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function)

### perspective()

这个CSS函数定义了 z=0平面与用户之间的距离，以便给三维定位元素一定透视度。当每个3D元素的z>0时会显得比较大，而在z<0时会显得比较小。其影响的程度由这个属性的值来决定。

### rotate()

rotate(a)
将元素在不变形的情况下旋转到不动点周围

### rotate3d()

rotate3d(x, y, z, a)
该旋转使元素能够绕固定轴移动而不变形

### rotateX()、rotateY()、rotateZ()

### scale()

scale(sx) or scale(sx, sy)
改变元素的大小

### scale3d()

scale3d(sx, sy, sz)

### scaleX()、scaleY()、scaleZ()

### skew()

skew(ax) or skew(ax, ay)
是一种用于拉伸，或者说是平移，该函数会使得在每个方向上扭曲元素上的每个点以一定角度

### translate()

translate(tx) or translate(tx, ty)
用于移动元素在平面上的位置

### translate3d() 

translate3d(tx, ty, tz)
用于移动元素在3D空间中的位置

### translateX()、translateY()、translateZ()

### backface-visibility 

visible 背面朝向用户时可见。
hidden 背面朝向用户时不可见
指定当元素背面朝向观察者时是否可见。

### perspective

指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。 z>0 的三维元素比正常大，而 z<0 时则比正常小，大小程度由该属性的值决定

### perspective-origin 

指定了观察者的位置(从那个角度去看)

### transform-origin 

让你更改一个元素变形的原点

### transform-style 

flat 设置元素的子元素位于该元素的平面中。
preserve-3d 指示元素的子元素应位于 3D 空间中。
设置元素的子元素是位于 3D 空间中还是平面中。

### translate 
允许你单独声明平移变换，并独立于 transform 属性