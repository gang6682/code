## border-radius(圆角)

``` css
/**
一个参
border-radius:0;上左,上右,下右,下左都为0
两个参
border-radius:0 10px;上左0,上右10,下右0,下左10
三个参
border-radius:0 10px 20px;上左0,上右10,下右20,下左10
四个参数
border-radius:0 10px 20px 30px;上左0,上右10,下右20,下左30
*/
border-radius:0; //相当于
border-top-left-radius: 0; //上左
border-top-right-radius: 0; //上右
border-bottom-right-radius: 0; //下右
border-bottom-left-radius: 0; //下左
/*加 /后参数的表示,/前的参数和上面相同*/
/**
/后一个参数
border-radius:10px / 20px ;上10左20,上10右20,下10右20,下10左20
/后两个参数
border-radius:10px / 20px 40px ;上10左20,上10右40,下10右20,下10左40
/后三个参数
border-radius:10px / 20px 40px 60px;上10左20,上10右40,下10右60,下10左40
/后四个参数
border-radius:10px / 20px 40px 60px 80px;上10左20,上10右40,下10右60,下10左80
*/
```
## border-image(边框图片或渐变颜色)
```css
border-image-source：none或者将其URI设为绝对的图片
border-image-slice：1-4个百分比（指定）或绝对长度，加上关键字（fill如果指定）
border-image-width：指定，但相对长度转换为绝对长度
border-image-outset：指定，但相对长度转换为绝对长度
border-image-repeat： 作为指定
```
