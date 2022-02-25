## 缩写
1. animation-name 动画名称
有@keyframes定义
2. animation-duration 动画时长 
单位 s | ms
3. animation-timing-function 动画曲线（贝塞尔曲线）
cubic-bezier(0, 0, 0.58, 1.0) 贝塞尔曲线
steps(整数,end|start) 阶梯数 start立即执行一次,x/n秒执行默认end
ease
linear
ease-in
ease-out
ease-in-out

4. animation-delay 动画延迟
单位 s | ms
5. animation-iteration-count 动画次数
number | infinite（无限次）
6. animation-direction 动画是否反向播放
normal 默认值 单向播放
alternate 动画交替反向运行
reverse 反向运行
alternate-reverse 反向交替， 反向开始交替
7. animation-fill-mode 动画执行前和执行后动画的样式应用于其目标
both 动画将遵循向前和向后的规则，从而在两个方向上扩展了动画属性。
backwards 一旦将动画应用于目标，动画将立即应用在第一个相关关键帧中定义的值，并在此期间保留该值animation-delay
forwards 目标将保留执行期间遇到的最后一个关键帧设置的计算值
none 动画在不执行时不会对目标应用任何样式。相反，将使用应用于该元素的任何其他CSS规则显示该元素。这是默认值。
8. animation-play-state 动画是否执行或暂停
running 该动画正在播放
paused 该动画目前暂停。
