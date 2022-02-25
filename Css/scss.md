变量声明  $
父元素 &
只会打包成一个css文件 @import
_开头的文件为局部文件，不会单独导出（引入时可以省略_）

!default  如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值
$color: black !default; 

@charset "utf-8"  注释报错时添加

@mixin @include 配合使用（混合器）
@mixin name{} 声明混合器
@include 使用混合器 
@mixin name($style : red ){color:$style}; (可传参，可设默认值)

继承选择器 @extend
//通过选择器继承继承样式
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error; //继承了.error
  border-width: 3px;
}

#{} 插值语句（及选择器的名字可为变量）
$name: foo;
$attr: border;
p.#{$name} {                      // 选择器中使用变量 #{}
  #{$attr}-color: blue;          // 属性名中使用变量 #{}
}
