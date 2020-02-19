import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPieSeries, setPieOption } from '../../actions';
import data from '../../data/users.json';
import Chart from "react-apexcharts";
import Card from 'react-bootstrap/Card';

function PieChart() {
  const options = useSelector(state => state.pieChartReducer.options);
  const series = useSelector(state => state.pieChartReducer.series);
  const dispatch = useDispatch();

  useEffect(() => {
    let dataSeries = [];
    let labels = [];

    data.forEach((elem) => {
      let totalTime = 0;
      let points = elem.points;

      points.forEach((point) => {
        totalTime += parseInt(point.time);
      });
      totalTime = totalTime / 60;
      totalTime = (totalTime / 15) * 15;

      dataSeries.push(Math.round(totalTime));
      labels.push(elem.id);

      dispatch(setPieSeries(dataSeries));
      dispatch(setPieOption(labels));
    });
  }, []);

  return (
    <Card className="shadow">
      <Chart
          options={options}
          series={series}
          type="donut"
          />
    </Card>
  );
}

export default PieChart;
