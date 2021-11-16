import { Component } from '@angular/core';
// import * as Chart from 'chart.js';
// import { Chart } from 'chart.js';
import {  Chart, ChartType,} from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chart: any;
  constructor() { }

  ngOnInit(): void {


    this.chart = new Chart('canvas1', {
      type: 'doughnut',
      data: {
        labels: ['', 'Regional',],
        datasets: [
          {
            label:"1",
            data: [75, 25],
            backgroundColor: ['rgba(255, 0, 0, 0.1)','#FFFFFF',],
            hoverBackgroundColor: ['rgba(255, 0, 0, 0.1)','#FFFFFF',],
            hoverBorderColor:['rgba(255, 0, 0, 0.1)','#FFFFFF',],
            fill: true
          },
          {
            label:"2",
            data: [50, 25,25],
            backgroundColor: [' #ff9933', '#e0e0d1','#FFFFFF',],
            hoverBackgroundColor: ['#ff9933', '#e0e0d1','#FFFFFF',],
            hoverBorderColor:[' #ff9933', '#e0e0d1','#FFFFFF',],
            fill: true
          },
        ]
      },
      options: {
        legend: {
          display: false,
         
        },
        
        
        tooltips: {
          enabled: false,
        },
        
      },
      
    });
    
    
    Chart.pluginService.register({
      beforeDraw: function(chart: any) {
        var width = chart.canvas.width,
            height = chart.canvas.height,
            ctx: any = chart.ctx
    
        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        var text = '90%',
        
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

        ctx.beginPath();
        ctx.arc(150,75,50,0*Math.PI,2*Math.PI);
        ctx.fillStyle = '#8AC007';
        ctx.fill();
        ctx.lineWidth = 0;
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();
        ctx.fillStyle = 'black';
        
        ctx.fillText(text, textX, textY);
        ctx.save();
        
      }
    });


    this.chart = new Chart('canvas2', {
      type: 'doughnut',
      data: {
        labels: ['', 'Regional',],
        datasets: [
          {
            label:"1",
            data: [75, 25],
            backgroundColor: ['rgba(255, 0, 0, 0.1)','#FFFFFF',],
            hoverBackgroundColor: ['rgba(255, 0, 0, 0.1)','#FFFFFF',],
            hoverBorderColor:['rgba(255, 0, 0, 0.1)','#FFFFFF',],
            fill: true
          },
          {
            label:"2",
            data: [75, 65,10],
            backgroundColor: ['#1D3658','#399DAC','#FFFFFF',],
            hoverBackgroundColor: ['#1D3658','#399DAC', '#FFFFFF',],
            hoverBorderColor:['#1D3658','#399DAC', '#FFFFFF',],
            fill: true
          },
        ]
      },
      options: {
        legend: {
          display: false,
         
        },
        tooltips: {
          enabled: false,
        }
      }
    });


    this.chart = new Chart('canvas3', {
      type: 'doughnut',
      data: {
        labels: ['', 'Regional',],
        datasets: [
          {
            label:"1",
            data: [75, 25,],
            backgroundColor: ['rgba(255, 0, 0, 0.1)','#FFFFFF',],
            hoverBackgroundColor: ['rgba(255, 0, 0, 0.1)','#FFFFFF',],
            hoverBorderColor:['rgba(255, 0, 0, 0.1)','#FFFFFF',],
            fill: true
          },
          {
            label:"2",
            data: [75, 25,10],
            backgroundColor: ['#989ADD','#D685B6', '#FFFFFF',],
            hoverBackgroundColor: ['#989ADD','#D685B6','#FFFFFF',],
            hoverBorderColor:['#989ADD','#D685B6','#FFFFFF',],
            fill: true
          },
        ]
      },
      options: {
        legend: {
          display: false,
         
        },
        tooltips: {
          enabled: false,
        }
      }
    });



    this.chart = new Chart('canvas4', {
      type: 'doughnut',
      data: {
        labels: ['', 'Regional',],
        datasets: [
          {
            label:"1",
            data: [75, 25,],
            backgroundColor: ['rgba(255, 0, 0, 0.1)','#FFFFFF',],
            hoverBackgroundColor: ['rgba(255, 0, 0, 0.1)','#FFFFFF',],
            hoverBorderColor:['rgba(255, 0, 0, 0.1)','#FFFFFF',],
            fill: true
          },
          {
            label:"2",
            data: [60, 20,5],
            backgroundColor: ['#AAE0A3', '#62BDCB','#FFFFFF',],
            hoverBackgroundColor: ['#AAE0A3','#62BDCB','#FFFFFF',],
            hoverBorderColor:['#AAE0A3','#62BDCB','#FFFFFF',],
            fill: true
          },
        ]
      },
      options: {
        legend: {
          display: false,
         
        },
        tooltips: {
          enabled: false,
        }
      }
    });




    // this.chart = new Chart('canvas5', {
    //   type: 'doughnut',
    //   data: {
    //     labels: ['', 'Regional',],
    //     datasets: [
    //       {
    //         data: [25, 75,],
    //         backgroundColor: ['#FFFFFF', 'rgba(255, 0, 0, 0.1)',],
    //         hoverBackgroundColor: ['#FFFFFF','rgba(255, 0, 0, 0.1)',],
    //         hoverBorderColor:['#FFFFFF','rgba(255, 0, 0, 0.1)',],
    //         fill: true
    //       },
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: true,
         
    //     },
    //     tooltips: {
    //       enabled: true,
    //     }
    //   }
    // });




    // this.chart = new Chart('canvas6', {
    //   type: 'doughnut',
    //   data: {
    //     labels: ['', 'Regional',],
    //     datasets: [
    //       {
    //         data: [25, 75,],
    //         backgroundColor: ['#FFFFFF', 'rgba(255, 0, 0, 0.1)',],
    //         hoverBackgroundColor: ['#FFFFFF','rgba(255, 0, 0, 0.1)',],
    //         hoverBorderColor:['#FFFFFF','rgba(255, 0, 0, 0.1)',],
    //         fill: true
    //       },
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: true,
         
    //     },
    //     tooltips: {
    //       enabled: true,
    //     }
    //   }
    // });



    // this.chart = new Chart('canvas7', {
    //   type: 'doughnut',
    //   data: {
    //     labels: ['', 'Regional',],
    //     datasets: [
    //       {
    //         data: [25, 75,],
    //         backgroundColor: ['#FFFFFF', 'rgba(255, 0, 0, 0.1)',],
    //         hoverBackgroundColor: ['#FFFFFF','rgba(255, 0, 0, 0.1)',],
    //         hoverBorderColor:['#FFFFFF','rgba(255, 0, 0, 0.1)',],
    //         fill: true
    //       },
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: true,
         
    //     },
    //     tooltips: {
    //       enabled: true,
    //     }
    //   }
    // });

  }
 

}
