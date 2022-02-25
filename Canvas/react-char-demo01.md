## 使用canvas写一个柱状图

### 背景
在项目开发中, 项目中只是用一个柱状图，无需使用第三方组件库(@ant-design/charts, G2, G2Plot, echarts等)，自定义一个图表，定制化程度高，第三方组件库限制性大，自定义程度低。

### 功能说明

柱状图, 响应式，自定义tooltip样式

``` tsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './IncomeRecord.less';

const config = { // 配置相关参数
    width: 640,
    height: 330,
    strokeCole: "#E5E5E5",
    fontSize: "14px",
    fontColor: "#858585",
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    rowNum: 6, // 行数
    columnNum: 7, // 列数
    textX: ['01/03', '01/04', '01/05', '01/06', '01/07', '01/08', '01/09'], // 行文本
    offlineBillingData: [10, 20, 30, 0, 80, 60, 0],
    consultationData: [20, 20, 70, 50, 10, 0, 60],
    consultationColor: "#4F5EE5",
    offlineBillingColor: "#37962B",
    columnMaxNum: 100, // Y轴最大数
    columnSpacingWifth: 20, // 列距
    textYOffset: 24, // Y轴文字偏移量
    textXOffset: 4, // X轴文字偏移量
    chartXOffset: 24, // 柱状图X轴偏移量
    chartYOffset: 24, // 柱状图Y轴偏移量
}

const IncomeTrend: React.FC = () => {
    const refCanvas = useRef(null);
    const refCanvasWrap = useRef(null);
    const [chartWidth, setChartWidth] = useState(640);
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [currentData, setCurrentData] = useState({ x: 0, y: 0, d: "01/01", v: true })

    useEffect(() => {
        function resize(e: any) {
            const wrap: any = refCanvasWrap.current;
            setChartWidth(wrap.clientWidth - 24);
        }
        window.addEventListener('resize', resize);
        return () => { window.removeEventListener('resize', resize); }
    }, []);
    useEffect(() => {
        const canvas: any = refCanvas.current;
        canvas.width = chartWidth;
        config.width = chartWidth;
        canvas.height = config.height;
        const ctx = canvas.getContext('2d');
        const cHeight = config.height - config.paddingBottom - config.paddingTop; // 高度
        const cWidth = config.width - config.paddingLeft - config.paddingRight; //宽度
        const lineSpacing = Math.floor(cHeight / (config.rowNum - 1)); // 行距
        const columnSpacing = Math.floor(cWidth / config.columnNum); // 列距
        const columnCenter = Math.floor((columnSpacing - config.columnSpacingWifth) / 2);// 柱状居中
        canvas.addEventListener("mousemove", function (event: any) {
            showTooltip(ctx, event.offsetX, event.offsetY, 1, columnSpacing, cHeight);
        });

        const numberOfIntervals = Math.floor(config.columnMaxNum / (config.rowNum - 1)); // 行间隔数 用于渲染Y轴文字
        for (let i = 0; i < config.rowNum; i++) {
            // 绘制横线
            drawLine(ctx, config.paddingLeft, config.paddingTop + i * lineSpacing, cWidth, config.paddingTop + i * lineSpacing);
            // 绘制Y轴文字
            drawText(ctx, `${i === 0 ? "" : "$"}${i * numberOfIntervals}`, 0, cHeight - i * lineSpacing + config.textYOffset);
        }
        config.textX.forEach((item: any, index: number) => {
            // 绘制X轴文字
            const textLeft = config.paddingLeft + columnCenter + index * columnSpacing - config.textXOffset;
            drawText(ctx, item, textLeft, config.height);
        })

        config.consultationData.forEach((item: any, index: number) => {
            const h = Math.floor(item / config.columnMaxNum * cHeight);
            const x = config.paddingLeft + index * columnSpacing + columnCenter;
            const y = cHeight - h + config.paddingTop;

            drawRectangle(ctx, x, y, config.columnSpacingWifth, h, config.consultationColor)

            const ch = Math.floor(config.offlineBillingData[index] / config.columnMaxNum * cHeight);
            const cx = config.paddingLeft + columnCenter + index * columnSpacing;
            const cy = y - ch;
            const cendy = h ? ch - 1 : ch;
            drawRectangle(ctx, cx, cy, config.columnSpacingWifth, cendy, config.offlineBillingColor)

        })
    }, [chartWidth])
    const drawLine = (ctx: any, x: number, y: number, endx: number, endy: number) => {
        ctx.strokeStyle = config.strokeCole;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(endx, endy);
        ctx.stroke();
        ctx.closePath();
    }
    const drawText = (ctx: any, text: string, x: number, y: number) => {
        ctx.font = `${config.fontSize} 100 sans-serif `;
        ctx.strokeStyle = config.fontColor;
        ctx.fillText(text, x, y);
    }
    const drawRectangle = (ctx: any, x: number, y: number, w: number, h: number, fillColor: string) => {
        ctx.fillStyle = fillColor;
        ctx.fillRect(x, y, w, h);
    }

    const showTooltip = (ctx: any, mouseX: number, mouseY: number, index: number, columnSpacing: number, cHeight: number) => {
        const startY = config.paddingTop;
        const endY = cHeight;
        const xx = mouseX < chartWidth - 200 ? 34 : -160;
        const x = mouseX + xx;
        const y = mouseY > 140 ? mouseY - 50 : 100;
        console.log(mouseX, mouseY);
        let status = false;

        for (let i = 0; i < config.columnNum; i++) {
            const startX = config.paddingLeft + columnSpacing * i;
            const endX = config.paddingLeft + columnSpacing * (i + 1);
            if (startX < mouseX && endX > mouseX && startY < mouseY && endY > mouseY) {
                status = true;
                setPosition({ x, y })
                setCurrentData({ x: config.consultationData[i], y: config.offlineBillingData[i], d: config.textX[i], v: false })
            }
        }
        if (!status) {
            setCurrentData({ x: 0, y: 0, d: "01/01", v: true });
        }
    }

    return (
        <div className={styles.incomeTrendWrap} ref={refCanvasWrap}>
            <div className={styles.header}>
                <h3 className={styles.title}>Income Trend</h3>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <span className={styles.point}></span>
                        <span className={styles.name}>Consultation</span>
                        <span className={styles.proportion}>60%</span>
                    </div>
                    <div className={styles.item}>
                        <span className={`${styles.point} ${styles.offlineBillingPoint}`}></span>
                        <span className={styles.name}>Offline Billing</span>
                        <span className={styles.proportion}>40%</span>
                    </div>
                </div>
            </div>
            <canvas ref={refCanvas}></canvas>
            <div className={styles.tooltip} style={{ left: position.x, top: position.y, visibility: currentData.v ? 'hidden' : 'visible' }}>
                <p className={styles.tooltipItem}>{currentData.d}</p>
                <p className={styles.tooltipItem}>Consultation: {currentData.x}</p>
                <p className={styles.tooltipItem}>Offline Billing: {currentData.y}</p>
            </div>
        </div>
    );
};

export default IncomeTrend;

```

### IncomeRecord.less文件

``` less

.incomeTrendWrap {
  padding: 24px;
  box-sizing: border-box;
  border: 1px solid #E1E0E0;
  border-radius: 5px;
  position: relative;

  .tooltip {
    position: absolute;
    min-width: 180px;
    left: 0;
    top: 0;
    padding: 24px;
    box-sizing: border-box;
    border: 1px solid #E1E0E0;
    border-radius: 5px;
    background-color: #fff;
    color: #858585;
    z-index: 99;
    visibility: hidden;
    .tooltipItem{
        margin-bottom: 8px;
        &:last-child{
            margin-bottom: 0;
        }
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    .card {
      display: flex;
      justify-content: space-around;

      .item {
        padding: 12px 10px;
        box-sizing: border-box;
        margin-left: 16px;
        background-color: #F6F6F6;
        border-radius: 4px;
        display: flex;
        font-size: 12px;

        .point {
          display: inline;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #4F5EE5;
          margin-right: 8px;
          margin-top: 4px;

          &.offlineBillingPoint {
            background-color: #37962B;
          }
        }

        .name {
          margin-right: 8px;
          color: #1B1B1B;
        }

        .proportion {
          color: @theme-color;
        }
      }
    }
  }
}
```
