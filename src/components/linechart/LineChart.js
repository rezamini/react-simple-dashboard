import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLineSeries } from '../../actions';
import data from '../../data/users.json';
import Chart from "react-apexcharts";
import Card from 'react-bootstrap/Card';

function LineChart() {
  const options = useSelector(state => state.lineChartReducer.options);
  const series = useSelector(state => state.lineChartReducer.series);
  const dispatch = useDispatch();

  useEffect(() => {
    data.forEach((elem) => {
      let dataSeries = [];
      let dataObject = {};
      let points = elem.points;

      dataObject["name"] = elem.id;

      points.forEach((point) => {
        let tempData = [];
        tempData.push(point.x, point.y)
        dataSeries.push(tempData)
      });
      dataObject["data"] = dataSeries;

      dispatch(setLineSeries(dataObject));
    });
  }, []);

  return (
    <Card className="shadow">
      <Chart
          options={options}
          series={series}
          type="line"
          />
    </Card>
  );
}

export default LineChart;
