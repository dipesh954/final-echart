import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';
import { BarChart, BarSeriesOption } from 'echarts/charts';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {

  options: any;
  option: any;
  constructor() { }

  ngOnInit() {
    type BarLabelOption = NonNullable<EChartsOption['label']>;
    const labelOption: BarLabelOption = {
      show: true,
      position: "insideBottom",
      distance: 15,
      align: "left",
      verticalAlign: "middle",
      rotate: 90,
      formatter: "{c}  {name|{a}}",
      fontSize: 16,
      rich: {
        name: {},
      },
    };

    this.options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Samsung', 'Sony', 'Lg']
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
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
      xAxis:  {
        type: 'category',
        axisTick: { show: false, type: 'value'},
        data: ['Q1', 'Q2', 'Q3', 'Q4']
      },
      yAxis: { gridIndex: 0 },
      grid: { top: "55%" },
      series: [
        {
          name: 'Samsung',
          type: 'bar',
          barGap: 0,
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390]
        },
        {
          name: 'Sony',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290]
        },
        {
          name: 'Lg',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190]
        },
        // {
        //   name: 'Wetland',
        //   type: 'bar',
        //   label: labelOption,
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   data: [98, 77, 101, 99, 40]
        // }

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