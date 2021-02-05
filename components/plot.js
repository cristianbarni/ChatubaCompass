import React from 'react';
import { Bubble } from 'react-chartjs-2';
import styles from '../components/layout.module.css'

var options = {
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

var data = {
  datasets: []
};

export default function Plot({ dbData }) {

  {
    dbData.map((dados) => (
      data.datasets.push(
        {
          label: dados.Name,
          backgroundColor: dados.backgroundColor,
          borderColor: dados.borderColor,
          // backgroundColor: pickColor('backgroundColor'),
          // borderColor: pickColor('borderColor'),
          data: [{ x: dados.SG, y: dados.LP, r: dados.Votes }]
        }
      )
    ))
  }

  return (
    <div className={styles.plot}>
      <Bubble
        data={data}
        options={options}
      />
    </div>
  );
}