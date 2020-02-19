import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setScatterSeries } from '../../actions';
import data from '../../data/users.json';
import Chart from "react-apexcharts";
import Card from 'react-bootstrap/Card';

function ScatterChart() {
  const options = useSelector(state => state.scatterChartReducer.options);
  const series = useSelector(state => state.scatterChartReducer.series);
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

      dispatch(setScatterSeries(dataObject));
    });
  }, []);

  return (
    <Card className="shadow">
      <Chart
          options={options}
          series={series}
          type="scatter"
          />
    </Card>
  );
}

export default ScatterChart;
