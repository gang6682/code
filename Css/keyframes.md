## @keyframes
0%/from 和100%/to
### demo1
```css
@keyframes slidein {
  from {
    transform: translateX(0%); 
  }

  to {
    transform: translateX(100%);
  }
}
```
### demo2
```css
@keyframes identifier {
  0% { top: 0; left: 0; }
  30% { top: 50px; }
  68%, 72% { left: 50px; }
  100% { top: 100px; left: 100%; }
}
```
## 关键帧中出现的 !important 将会被忽略
```css
@keyframes important1 {
  from { margin-top: 50px; }
  50%  { margin-top: 150px !important; } /* 忽略 */
  to   { margin-top: 100px; }
}

@keyframes important2 {
  from { margin-top: 50px;
         margin-bottom: 100px; }
  to   { margin-top: 150px !important; /* 忽略 */
         margin-bottom: 50px; }
}
```