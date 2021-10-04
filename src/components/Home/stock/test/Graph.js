import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReactDOM from "react-dom";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import {
  elderRay,
  algo,
  ema,
  discontinuousTimeScaleProviderBuilder,
  Chart,
  ChartCanvas,
  CurrentCoordinate,
  BarSeries,
  CandlestickSeries,
  ElderRaySeries,
  LineSeries,
  MovingAverageTooltip,
  OHLCTooltip,
  SingleValueTooltip,
  lastVisibleItemBasedZoomAnchor,
  XAxis,
  YAxis,
  CrossHairCursor,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
  ZoomButtons,
  withDeviceRatio,
  withSize,
  Annotate,
  SvgPathAnnotation,
  Path,
} from "react-financial-charts";
import { initialData } from "./data";
import { when } from 'q';

const halfWidth = 10;
const bottomWidth = 3;
const height = 20;

function buyPath({ x, y }) {
    console.log(x, y)
	return `M${x} ${y} `
		+ `L${x + halfWidth} ${y + halfWidth} `
		+ `L${x + bottomWidth} ${y + halfWidth} `
		+ `L${x + bottomWidth} ${y + height} `
		+ `L${x - bottomWidth} ${y + height} `
		+ `L${x - bottomWidth} ${y + halfWidth} `
		+ `L${x - halfWidth} ${y + halfWidth} `
		+ "Z";
}

function sellPath({ x, y }) {
    console.log(x, y)
	return `M${x} ${y} `
		+ `L${x + halfWidth} ${y - halfWidth} `
		+ `L${x + bottomWidth} ${y - halfWidth} `
		+ `L${x + bottomWidth} ${y - height} `
		+ `L${x - bottomWidth} ${y - height} `
		+ `L${x - bottomWidth} ${y - halfWidth} `
		+ `L${x - halfWidth} ${y - halfWidth} `
		+ "Z";
}

const Graph = (props) => {

    const [time, setTime] = useState("day");

    const [height, setHeight] = useState(window.innerHeight * 0.45)
    const [width, setWidth] = useState(window.innerWidth * 0.45)

    const resizeHeight = (height) => {
        if(height < 450 || height > 550) {
            if(height < 450) {
                setHeight(450)
            }
            else if(height > 550) {
                setHeight(550)
            }
        }
        else {
            setHeight(window.innerHeight * 0.45)
        }
    }

    const resizeWidth = (width) => {
        if(width < 400 || width > 800) {
            if(width < 400) {
                setWidth(400)
            }
            else if(width > 800) {
                setWidth(800)
            }
        }
        else {
            setWidth(window.innerWidth * 0.45)
        }
    }

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    useEffect(() => {
        window.addEventListener('resize', (event) => {
            resizeHeight(window.innerHeight * 0.45)
            resizeWidth(window.innerWidth * 0.45)
        }, true);
    },[height, width])

    const defaultAnnotationProps = {
        onClick: console.log.bind(console),
    };

    const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
        (d) => new Date(d.date)
    );

    const margin = { left: 25, right: 50, top: 0, bottom: 40 };

    const ema12 = ema()
    .id(1)
    .options({ windowSize: 12 })
    .merge((d, c) => {
        d.ema12 = c;
    })
    .accessor((d) => d.ema12);

    const ema26 = ema()
    .id(2)
    .options({ windowSize: 26 })
    .merge((d, c) => {
        d.ema26 = c;
    })
    .accessor((d) => d.ema26);

    const buySell = algo()
        .windowSize(2)
        .accumulator(([prev, now]) => {
            const { ema12: prevShortTerm, ema26: prevLongTerm } = prev;
            const { ema12: nowShortTerm, ema26: nowLongTerm } = now;
            if (prevShortTerm < prevLongTerm && nowShortTerm > nowLongTerm) return "LONG";
            if (prevShortTerm > prevLongTerm && nowShortTerm < nowLongTerm) return "SHORT";
        })
        .merge((d, c) => { d.longShort = c; });

    const elder = elderRay();

    const calculatedData = elder(ema26(ema12(initialData)));
    // const checkData = buySell(ema26(ema12(initialData)))
    // console.log(checkData)
    const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(
        calculatedData
    );
    const pricesDisplayFormat = format(".2f");
    const max = xAccessor(data[data.length - 1]);
    const min = xAccessor(data[Math.max(0, data.length - 100)]);
    const xExtents = [min, max + 5];

    const gridHeight = height - margin.top - margin.bottom;

    const elderRayHeight = 100;
    const elderRayOrigin = (_, h) => [0, h - elderRayHeight];
    const barChartHeight = gridHeight / 4;
    const barChartOrigin = (_, h) => [0, h - barChartHeight - elderRayHeight];
    const chartHeight = gridHeight - elderRayHeight;
    const yExtents = (data) => {
        return [data.high, data.low];
    };
    const dateTimeFormat = "%d %b";
        const timeDisplayFormat = timeFormat(dateTimeFormat);

    const barChartExtents = (data) => {
        return data.volume;
    };

    const candleChartExtents = (data) => {
        return [data.high, data.low];
    };

    const yEdgeIndicator = (data) => {
        return data.close;
    };

    const volumeColor = (data) => {
        return data.close > data.open
            ? "rgba(239, 83, 80, 0.3)"
            : "rgba(38, 166, 154, 0.3)";
    };

    const volumeSeries = (data) => {
        return data.volume;
    };
    
    const openCloseColor = (data) => {
        return data.close > data.open ? "#ef5350" : "#26a69a";
    };

    const longAnnotationProps = {
        ...defaultAnnotationProps,
        y: ({ yScale, datum }) => yScale(datum.low),
        fill: "#006517",
        path: buyPath,
        tooltip: "Go long",
    };

    const shortAnnotationProps = {
        ...defaultAnnotationProps,
        y: ({ yScale, datum }) => yScale(datum.high),
        fill: "#FF0000",
        path: sellPath,
        tooltip: "Go short",
    };

    return (
        <div>
            
            <ChartCanvas
                height={height}
                ratio={3}
                width={width}
                margin={margin}
                data={data}
                displayXAccessor={displayXAccessor}
                seriesName="Data"
                xScale={xScale}
                xAccessor={xAccessor}
                xExtents={xExtents}
                zoomAnchor={lastVisibleItemBasedZoomAnchor}
            >
                <Chart
                    id={2}
                    height={barChartHeight}
                    origin={barChartOrigin}
                    yExtents={barChartExtents}
                >
                    <BarSeries fillStyle={volumeColor} yAccessor={volumeSeries} />
                </Chart>
                <Chart id={3} height={chartHeight} yExtents={candleChartExtents}>
                    <XAxis showGridLines showTickLabel={false} />
                    <YAxis showGridLines tickFormat={pricesDisplayFormat} />
                    <CandlestickSeries />
                    <LineSeries yAccessor={ema26.accessor()} strokeStyle={ema26.stroke()} />
                    <CurrentCoordinate
                        yAccessor={ema26.accessor()}
                        fillStyle={ema26.stroke()}
                    />
                    <LineSeries yAccessor={ema12.accessor()} strokeStyle={ema12.stroke()} />
                    <CurrentCoordinate
                        yAccessor={ema12.accessor()}
                        fillStyle={ema12.stroke()}
                    />
                    <MouseCoordinateY
                        rectWidth={margin.right}
                        displayFormat={pricesDisplayFormat}
                    />
                    <EdgeIndicator
                        itemType="last"
                        rectWidth={margin.right}
                        fill={openCloseColor}
                        lineStroke={openCloseColor}
                        displayFormat={pricesDisplayFormat}
                        yAccessor={yEdgeIndicator}
                    />
                    <MovingAverageTooltip
                        origin={[8, 24]}
                        options={[
                            {
                                yAccessor: ema26.accessor(),
                                type: "EMA",
                                stroke: ema26.stroke(),
                                windowSize: ema26.options().windowSize
                            },
                            {
                                yAccessor: ema12.accessor(),
                                type: "EMA",
                                stroke: ema12.stroke(),
                                windowSize: ema12.options().windowSize
                            }
                        ]}
                    />
                    <ZoomButtons />
                    <OHLCTooltip origin={[8, 16]} />
                    <Annotate with={SvgPathAnnotation} when={d => d.longShort === "LONG"}
						usingProps={longAnnotationProps} />
					<Annotate with={SvgPathAnnotation} when={d => d.longShort === "SHORT"}
						usingProps={shortAnnotationProps} />
                </Chart>
                <Chart
                    id={4}
                    height={elderRayHeight}
                    yExtents={[0, elder.accessor()]}
                    origin={elderRayOrigin}
                    padding={{ top: 8, bottom: 8 }}
                >
                    <XAxis showGridLines gridLinesStrokeStyle="#e0e3eb" />
                    <YAxis ticks={4} tickFormat={pricesDisplayFormat} />

                    <MouseCoordinateX displayFormat={timeDisplayFormat} />
                    <MouseCoordinateY
                        rectWidth={margin.right}
                        displayFormat={pricesDisplayFormat}
                    />

                    <ElderRaySeries yAccessor={elder.accessor()} />

                    <SingleValueTooltip
                        yAccessor={elder.accessor()}
                        yLabel="Elder Ray"
                        yDisplayFormat={(d) =>
                            `${pricesDisplayFormat(d.bullPower)}, ${pricesDisplayFormat(
                            d.bearPower
                            )}`
                        }
                        origin={[8, 16]}
                    />
                </Chart>
                <CrossHairCursor />
            </ChartCanvas>
        </div>
    );
};

Graph.propTypes = {
    
};

export default Graph;