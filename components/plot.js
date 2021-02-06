import React from 'react';
import { Bubble } from 'react-chartjs-2';
import styles from '../components/layout.module.css'

var options = {
  maintainAspectRatio: true,
  scales: {
    yAxes: [{
      display: true,
      ticks: {
        display: false,
        suggestedMax: 10,
        suggestedMin: -10,
        stepSize: 1
      },
      scaleLabel: {
        display: true,
        labelString: 'Lara-Pierri'
      }
    }],
    xAxes: [{
      display: true,
      ticks: {
        display: false,
        suggestedMax: 10,
        suggestedMin: -10,
        stepSize: 1
      },
      scaleLabel: {
        display: true,
        labelString: 'Schons-Gonini'
      }
    }]
  }
};

let data = {
  datasets: []
};

let data_id = [];

export default function Plot({ dbData }) {

  for (let dados of dbData) {
    if (!data_id.includes(dados._id)) {
      data_id.push(dados._id)
      data.datasets.push(
        {
          label: dados.Name,
          backgroundColor: dados.backgroundColor,
          borderColor: dados.borderColor,
          data: [{ x: dados.SG, y: dados.LP, r: dados.Votes }]
        }
      )
    } else {
      console.log(data.datasets)
      console.log(dados.Name)
      console.log(data.datasets.includes(dados.Name))
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.plot}>
        <Bubble
          data={data}
          options={options}
          width={700}
          height={450}
        />
      </div>
    </div>
    
  );
}