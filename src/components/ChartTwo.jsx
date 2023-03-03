import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import csv from '../csvjson.json'

ChartJS.register(ArcElement, Tooltip, Legend);





const ChartTwo = () => {

 let  cityCode = [...new Set (csv.map((code) => (
  code.n_citi
)))]

let  cityName = [...new Set (csv.map((name) => (
  name.citi
)))]



 const data = {
  labels: cityName,
  datasets: [
    {
      label: 'City Names with City Codes',
      data: cityCode,
      backgroundColor: [
        'red',
        'blue',
        'green',
        'orange',
        'yellow',
        'pink',
        'aqua',
        'coral',
        'cyan',
        'crimson',
        'lightblue',
        'lightgreen',
        'lightpink'
      ],
      borderWidth: 1,
    },
  ],
};


const options = {
  plugins: {
  title: {
    display: true,
    text: 'Cities and City Codes'
  },  
  legend: {
     display: false 
  }
}
}
  return (
    <div style={{width: '90%', maxHeight: '35em', marginTop: '5em', marginLeft: '20em'}} >
      <Pie options={options} data={data} />
    </div>
  )
}

export default ChartTwo