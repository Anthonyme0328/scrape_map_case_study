import React from 'react';
import csvdata from '../csvjson.json';
import geo from './geo-coords.json';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);


const ChartOne = () => {

  let xData = csvdata.map((bath) => (
    bath.bath
  ))

  let yData = csvdata.map((sleep) => (
    sleep.bed
  ))

  let label = csvdata.map((place) => (
    place.street
  ))

  



  const data = {
    labels: label,
    datasets: [
      {
        label: "Bathrooms ",
        data: xData,
        backgroundColor: "red",
        borderColor: "red"
      },
      {
        label: "BedRooms ",
        data: yData,
        backgroundColor: "blue",
        borderColor: "blue"
      }
    ]
  };
  
  const legend = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14
    }
  };
  
  const options = {
    title: {
      display: true,
      text: "Chart Title"
    },
  };



  return (
    <div style={{width: "98%", margin: '2em 5em 0em 1em', border: '2px solid black', boxShadow: '5px 10px grey'}}>
      <Line options={options} legend={legend} data={data} />
    </div>
  )
}

export default ChartOne