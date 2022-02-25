## em

它是描述相对于应用在当前元素的字体尺寸，所以它也是相对长度单位。一般浏览器字体大小默认为16px，则2em == 32px

## ex

依赖于英文字母小 x 的高度

## ch

数字 0 的宽度

## rem

rem 是根 em（root em）的缩写，rem作用于非根元素时，相对于根元素字体大小；rem作用于根元素字体大小时，相对于其出初始字体大小。

## vw

viewpoint width，视窗宽度，1vw=视窗宽度的1%

## vh

viewpoint height，视窗高度，1vh=视窗高度的1%

## vmin

vw和vh中较小的那个

## vmax

vm和vh中较大的那个

## %

## cm

厘米

## mm

毫米

## in

英寸 (1in = 96px = 2.54cm)

## px

像素 (1px = 1/96th of 1in)

## pt

point，大约1/72英寸； (1pt = 1/72in)

## pc

pica，大约6pt，1/6英寸； (1pc = 12 pt)

*** em和rem ***

``` css
html {
    font-size: 100%;
}

.box-0 {
    height: 1em;
    /* 此时height等于16px */
}

.box-1 {
    font-size: 0.625em;
    /* 此时基准字号以变更为16*0.625=10px */
    height: 1em;
    /* 此时实际height等于10px */
}
```
