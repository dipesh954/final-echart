import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {

  options: any;
  option: any;
  constructor() { }

  ngOnInit(): void {
    this.options = {
      legend: {},
      tooltip: {
        trigger: "axis",
        showContent: false,
      },
      dataset: {
        source: [
          ["brand", "q1", "q2", "q3"],
          ["Samsung", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          ["Sony", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          ["Lg", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          // ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
        ],
      },
      xAxis: { type: "category" },
      yAxis: { gridIndex: 0 },
      grid: { top: "55%" },
      series: [
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },

        {
          type: "pie",
          id: "pie",
          radius: "30%",
          center: ["15%", "25%"],
          emphasis: {
            focus: "self",
          },
          label: {
            formatter: "{b}: {@q1} ({d}%)",
          },
          encode: {
            itemName: "brand",
            value: "q1",
            tooltip: "q1",
          },
        },
        {
          type: "pie",
          radius: "30%",
          center: ["50%", "25%"],
          emphasis: {
            focus: "self",
          },
          label: {
            formatter: "{b}: {@q2} ({d}%)",
          },
          encode: {
            itemName: "brand",
            value: "q2",
            tooltip: "q2",
          },
        },
        {
          type: "pie",
          radius: "30%",
          center: ["85%", "25%"],
          emphasis: {
            focus: "self",
          },
          label: {
            formatter: "{b}: {@q3} ({d}%)",
          },
          encode: {
            itemName: "brand",
            value: "q3",
            tooltip: "q3",
          },
        },
      ],
      title: [
        {
          // text: 'Pie',
          left: 'center'
        },
        {
          subtext: 'Q1',
          left: '14.67%',
          top: '43%',
          textAlign: 'center',
          subtextStyle: {
            color: "#475569",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontSize: 18,
            marginTop: 18,
          }
        },
        {
          subtext: 'Q2',
          left: '49%',
          top: '43%',
          textAlign: 'center',
          subtextStyle: {
            color: "#475569",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontSize: 18,
            marginTop: 18,
          }
        },
        {
          subtext: 'Q3',
          left: '85%',
          top: '43%',
          textAlign: 'center',
          subtextStyle: {
            color: "#475569",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontSize: 18,
            marginTop: 18,
          }
        }
      ],
    }
  }
}