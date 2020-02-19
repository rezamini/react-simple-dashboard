import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBarSeries, setBarOption } from '../../actions';
import data from '../../data/users.json';
import Chart from "react-apexcharts";
import Card from 'react-bootstrap/Card';

function BarChart() {
  const options = useSelector(state => state.barChartReducer.options);
  const series = useSelector(state => state.barChartReducer.series);
  const dispatch = useDispatch();

  useEffect(() => {
    let axisCategories = [];
    let usersSpeed = [];

    data.forEach((elem) => {
      let points = elem.points;

      points.sort(function(a, b) {
        return a.time > b.time ? 1 : -1;
      });

      usersSpeed.push(calcSpeed(points));
      axisCategories.push(elem.id)
    });

    dispatch(setBarSeries(usersSpeed));
    dispatch(setBarOption(axisCategories));

  }, []);

  const calcSpeed = (points) => {
    let distance = 0;
    let time = 0;
    let speed = 0;
    for(let i = 0; i < points.length; i++)
      {
         let next = points[i + 1];
         if(next !== undefined){
            distance += Math.sqrt( Math.pow((points[i].x - next.x), 2) + Math.pow((points[i].y - next.y), 2) );
         }
      }
      time = points[points.length - 1].time - points[0].time;
      speed = distance / time;
      speed = speed * 60;
      return speed.toFixed(2);
  }

  return (
    <Card className="shadow">
      <Chart
          options={options}
          series={series}
          type="bar"
          />
    </Card>
  );
}

export default BarChart;
