import React, {useState, useEffect} from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  Cell
} from "recharts";
import {rawData} from "./dummyStock";

const colors = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf"
];

const Candlestick = (props) => {
  const {
    fill,
    x,
    y,
    width,
    height,
    low,
    high,
    openClose: [open, close]
  } = props;
  const isGrowing = open < close;
  const color = isGrowing ? "red" : "blue";
  const ratio = Math.abs(height / (open - close));
  console.log(props);



  return (
    <g stroke={color} fill={color} strokeWidth="2">
      <path
        d={`
          M ${x},${y}
          L ${x},${y + height}
          L ${x + width},${y + height}
          L ${x + width},${y}
          L ${x},${y}
        `}
      />
      {/* bottom line */}
      {isGrowing ? (
        <path
          d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - low) * ratio}
          `}
        />
      ) : (
        <path
          d={`
            M ${x + width / 2}, ${y}
            v ${(close - low) * ratio}
          `}
        />
      )}
      {/* top line */}
      {isGrowing ? (
        <path
          d={`
            M ${x + width / 2}, ${y}
            v ${(close - high) * ratio}
          `}
        />
      ) : (
        <path
          d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - high) * ratio}
          `}
        />
      )}
    </g>
  );
};

const transTime = (ts) => {
   const date = new Date(ts);
   const months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
   return `${months[date.getMonth()].padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`
}

const prepareData = (data) => {
  return data.map(({ open, close, ts, ...other }) => {
    return {
      ...other,
      ts : transTime(ts),
      openClose: [open, close]
    };
  });
};

const CustomShapeBarChart = () => {
  const data = prepareData(rawData);
  data.reduce((acc, item) => console.log(item), 0);
  const minValue = data.reduce(
    (minValue, { low, openClose: [open, close] }) => {
      const currentMin = Math.min(low, open, close);
      return minValue === null || currentMin < minValue ? currentMin : minValue;
    },
    null
  );
  const maxValue = data.reduce(
    (maxValue, { high, openClose: [open, close] }) => {
      const currentMax = Math.max(high, open, close);
      return currentMax > maxValue ? currentMax : maxValue;
    },
    minValue
  );

  const handler = (e) => {
    console.log(e);
    console.log("asdasd");
    //메모의 날자를 데이터와 연결해서 차트 클릭시 메모 나오게 만들기
  };

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

  useEffect(() => {
    window.addEventListener('resize', (event) => {
        resizeHeight(window.innerHeight * 0.45)
        resizeWidth(window.innerWidth * 0.45)
    }, true);
  },[height, width])

  return (
    <BarChart
      width={width}
      height={height}
      data={data}
      margin={{ left: 10, right: 0, top: 0, bottom: 40 }}
    >
      <XAxis dataKey="ts" />
      <YAxis domain={[minValue, maxValue]} />
      <CartesianGrid strokeDasharray="3 3" />

      <Bar
        dataKey="openClose"
        fill="#8884d8"
        shape={<Candlestick />}
        onClick={handler}
        // label={{ position: 'top' }}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[index % 20]}
          />
        ))}
      </Bar>
    </BarChart>
  );
};

export default CustomShapeBarChart;
