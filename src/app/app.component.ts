// NOTE: Angular CLI does not support component CSS imports: angular-cli/issues/23273

import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
// Required feature modules are registered in app.module.ts
import "ag-grid-enterprise";
import {
  ColDef,
  ColGroupDef,
  GridReadyEvent,
  RowGroupingDisplayType,
} from "ag-grid-community";
import { EChartsOption } from "echarts";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  public columnDefs: (ColDef | ColGroupDef)[] = [
    { field: "brand", rowGroup: true, hide: true },
    { field: "ww", rowGroup: true, hide: true },
    { field: "region", rowGroup: true, hide: true },
    // {
    //   headerName: 'Brand',
    //   minWidth: 150,
    //   // this tells the grid what values to put into the cell
    //   showRowGroup: 'brand',
    //   // this tells the grid what to use to render the cell
    //   cellRenderer: 'agGroupCellRenderer',
    // },
    // {
    //   headerName: 'Region',
    //   minWidth: 150,
    //   showRowGroup: 'region',
    //   cellRenderer: 'agGroupCellRenderer',
    // },
    // { field: 'country', rowGroup: true, hide: true },
    // { field: 'year', rowGroup: true, hide: true },
    // Year 2021
    {
      headerName: "2021",
      // headerGroupComponent: CustomHeaderGroup,
      children: [
        // Quater 1 Data
        {
          field: "q1",
          width: 90,
          children: [
            {
              field: "jan",
              width: 90,
              children: [
                { field: "w1", width: 90, aggFunc: "sum" },
                {
                  field: "w2",
                  width: 90,
                  aggFunc: "sum",
                  columnGroupShow: "open",
                },
                {
                  field: "w3",
                  width: 90,
                  aggFunc: "sum",
                  columnGroupShow: "open",
                },
                {
                  field: "w4",
                  width: 90,
                  aggFunc: "sum",
                  columnGroupShow: "open",
                  pivot: true,
                  enablePivot: true,
                },
              ],
            },
            {
              field: "feb",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
            {
              field: "mar",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
          ],
        },

        // Quater 2 Data

        {
          field: "q2",
          width: 90,
          children: [
            {
              field: "apr",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
            },
            {
              field: "may",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
            {
              field: "jun",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
          ],
          columnGroupShow: "open",
        },

        // Quater 3 Data

        {
          field: "q3",
          width: 90,
          children: [
            {
              field: "jul",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
            },
            {
              field: "aug",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
            {
              field: "sep",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
          ],
          columnGroupShow: "open",
        },

        // Quater 4 Data

        {
          field: "q4",
          width: 90,
          children: [
            {
              field: "oct",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
            },
            {
              field: "nov",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
            {
              field: "dec",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
          ],
          columnGroupShow: "open",
        },
      ],
      pivot: true,
      enablePivot: true,
    },
    // Year 2020
    {
      headerName: "2020",
      // headerGroupComponent: CustomHeaderGroup,
      children: [
        // Quater 1 Data
        {
          field: "q1",
          width: 90,
          children: [
            {
              field: "jan",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
            },
            {
              field: "feb",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
            {
              field: "mar",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
          ],
        },

        // Quater 2 Data

        {
          field: "q2",
          width: 90,
          children: [
            {
              field: "apr",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
            },
            {
              field: "may",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
            {
              field: "jun",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
          ],
          columnGroupShow: "open",
        },

        // Quater 3 Data

        {
          field: "q3",
          width: 90,
          children: [
            {
              field: "jul",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
            },
            {
              field: "aug",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
            {
              field: "sep",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
          ],
          columnGroupShow: "open",
        },

        // Quater 4 Data

        {
          field: "q4",
          width: 90,
          children: [
            {
              field: "oct",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
            },
            {
              field: "nov",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
            {
              field: "dec",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
          ],
          columnGroupShow: "open",
        },
      ],
    },
    // Year 2019
    {
      headerName: "2019",
      // headerGroupComponent: CustomHeaderGroup,
      children: [
        // Quater 1 Data
        {
          field: "q1",
          width: 90,
          children: [
            {
              field: "jan",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
            },
            {
              field: "feb",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
            {
              field: "mar",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
          ],
        },

        // Quater 2 Data

        {
          field: "q2",
          width: 90,
          children: [
            {
              field: "apr",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
            },
            {
              field: "may",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
            {
              field: "jun",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
          ],
          columnGroupShow: "open",
        },

        // Quater 3 Data

        {
          field: "q3",
          width: 90,
          children: [
            {
              field: "jul",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
            },
            {
              field: "aug",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
            {
              field: "sep",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
          ],
          columnGroupShow: "open",
        },

        // Quater 4 Data

        {
          field: "q4",
          width: 90,
          children: [
            {
              field: "oct",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
            },
            {
              field: "nov",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
            {
              field: "dec",
              width: 90,
              children: [
                { field: "w1", width: 90 },
                { field: "w2", width: 90, columnGroupShow: "open" },
                { field: "w3", width: 90, columnGroupShow: "open" },
                { field: "w4", width: 90, columnGroupShow: "open" },
              ],
              columnGroupShow: "open",
            },
          ],
          columnGroupShow: "open",
        },
      ],
    },
  ];
  public pivotRowTotals: "before" | "after" = "before";
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    resizable: true,
  };
  public autoGroupColumnDef: ColDef = {
    minWidth: 200,
  };
  public groupDisplayType: RowGroupingDisplayType = "multipleColumns";
  public rowData!: GridReadyEvent[];

  constructor(private http: HttpClient) {}
  option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onGridReady(params: GridReadyEvent) {
    this.http
      .get<GridReadyEvent[]>("https://tvbrand.herokuapp.com/agGrid")
      .subscribe((data) => (this.rowData = data));
  }
}
