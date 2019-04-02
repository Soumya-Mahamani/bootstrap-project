import React, { Component } from 'react';
import Card from './Card';
import {Doughnut, Chart} from 'react-chartjs-2';
import './changes.css';

export default class Bootstrap extends Component {
  render() {
    const data = {
      labels: [
          "Equity 2138.28%",
          "Bonds 843.87%", 
          "Others 319.61%", 
          "Cash  -3201.76%",
      ],
      datasets: [
          {
              data: [2138.28, 843.87, 319.61,0.1],
              backgroundColor: [
                  "#0b4a74",
                  "#ccccff",
                  "#ffffff",
                  "#36A2EB"
              ],
              hoverBackgroundColor: [
                  "#0b4a74",
                  "#ccccff",
                  "#ffffff",
                  "#36A2EB"
              ]
          }]
  };
    return (
      <div className="container" style={{paddingTop: '20px', backgroundColor: '#000033', paddingBottom: '100px'}}>
        <div className="row">
          <div className="col-sm-8">
            <i className="fa fa-home" aria-hidden="true" style={{fontSize: '2.0rem', color: '#ffffff', paddingBottom: '30px'}}>
              <span className="font-weight-bold"> YOUR ACCOUNT SUMMARY </span>
            </i>
            <Card />
          </div>
          <div className="col-sm-4">
            <Doughnut data={data} />
          </div>
          </div>
      </div>
    )
  }
}


Chart.pluginService.register({
  beforeDraw: function(chart) {
    var width = chart.chart.width,
    height = chart.chart.height,
    ctx = chart.chart.ctx;
    ctx.restore();
    var fontSize = '10px';
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "top";
    ctx.fillStyle = 'white';
    var text = "Investment",
    textX = Math.round((width - ctx.measureText(text).width)/4.2 ),
    textY = height / 2.2;
    ctx.fillText(text, textX, textY);
    ctx.save();
  }
});
Chart.pluginService.register({
  beforeDraw: function(chart) {
    var width = chart.chart.width,
    height = chart.chart.height,
    ctx = chart.chart.ctx;
    ctx.restore();
    var fontSize = '10px';
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "bottom";
    ctx.fontColor =  "#fff";
    var text = "Portfolio",
    textX = Math.round((width - ctx.measureText(text).width)/4.0 ),
    textY = height / 1.6;
    ctx.fillText(text, textX, textY);
    ctx.save();
  }
});
Chart.defaults.global.legend.position = 'right'
Chart.defaults.global.legend.labels.fontColor = '#ffffff'


