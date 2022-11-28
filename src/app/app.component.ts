import { Component, OnInit } from "@angular/core";

import "ag-grid-enterprise";
import {
  CellValueChangedEvent,
  ColDef,
  ColGroupDef,
  GridReadyEvent,
  RowGroupingDisplayType,
} from "ag-grid-community";
import { ChartjsService } from "./chartjs.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  gridApi: any;
  gridColumnApi: any;
  Data: any;
  wjCore: any;
  subscribe: any;
  constructor(private chartjsService: ChartjsService) {}
  public columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: "Brand",
      field: "brand",
      width: 150,
      // filter: 'agTextColumnFilter',
      rowGroup: true, // this to group by athlete
      hide: true, // hide this column as you will display grouped column
    },
    {
      headerName: "Product",
      field: "product",
      width: 150,
      // filter: 'agTextColumnFilter',
      rowGroup: true, // this to group by athlete
      hide: true, // hide this column as you will display grouped column
    },
    {
      headerName: "Ww / Region",
      colId: "wwRegionGroup",
      minWidth: 220,
      showRowGroup: "ww",
      cellRenderer: "agGroupCellRenderer",
      valueGetter: "data ? data.region : null",
    },
    { field: "ww", rowGroup: true, hide: true },

    // Year 2021
    {
      headerName: "2021",
      // headerGroupComponent: CustomHeaderGroup,
      children: [
        // Quater 1 Data
        {
          headerName: "q1",
          field: "2021_q1_jan",
          width: 90,
          children: [
            {
              headerName: "Jan",
              width: 90,
              children: [
                {
                  headerName: "W1",
                  field: "2021_q1_jan_w1",
                  width: 100,
                  filter: "agNumberColumnFilter",
                  enableValue: true,
                  type: "valueColumn",
                },
                {
                  headerName: "W2",
                  field: "2021_q1_jan_w2",
                  width: 100,
                  filter: "agNumberColumnFilter",
                  enableValue: true,
                  type: "valueColumn",
                  columnGroupShow: "open",
                },
                {
                  headerName: "W3",
                  field: "2021_q1_jan_w3",
                  width: 100,
                  filter: "agNumberColumnFilter",
                  enableValue: true,
                  type: "valueColumn",
                  columnGroupShow: "open",
                },
                {
                  headerName: "W4",
                  field: "2021_q1_jan_w4",
                  width: 100,
                  filter: "agNumberColumnFilter",
                  enableValue: true,
                  type: "valueColumn",
                  columnGroupShow: "open",
                },
              ],
            },
            {
              headerName: "feb",
              field: "2021_q1_feb",
              width: 90,
              children: [
                {
                  headerName: "W1",
                  field: "2021_q1_feb_w1",
                  width: 100,
                  filter: "agNumberColumnFilter",
                  enableValue: true,
                  type: "valueColumn",
                },
                {
                  headerName: "W2",
                  field: "2021_q1_feb_w2",
                  width: 100,
                  filter: "agNumberColumnFilter",
                  enableValue: true,
                  type: "valueColumn",
                  columnGroupShow: "open",
                },
                {
                  headerName: "W3",
                  field: "2021_q1_feb_w3",
                  width: 100,
                  filter: "agNumberColumnFilter",
                  enableValue: true,
                  type: "valueColumn",
                  columnGroupShow: "open",
                },
                {
                  headerName: "W4",
                  field: "2021_q1_feb_w4",
                  width: 100,
                  filter: "agNumberColumnFilter",
                  enableValue: true,
                  type: "valueColumn",
                  columnGroupShow: "open",
                },
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
  // public pivotRowTotals: 'before' | 'after' = 'before';
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    filter: true,
    sortable: true,
    resizable: true,
    editable: true,
  };
  public autoGroupColumnDef: ColDef = {
    headerName: "Brand", // naming your grouped column
    minWidth: 200,
    cellRendererParams: {
      suppressCount: true,
    },
  };
  public columnTypes: {
    [key: string]: ColDef;
  } = {
    valueColumn: {
      editable: true,
      aggFunc: "sum",
      // valueParser: 'Number(newValue)',
      cellClass: "number-cell",
      cellRenderer: "agAnimateShowChangeCellRenderer",
      filter: "agNumberColumnFilter",
      valueFormatter: formatNumber,
      valueParser: function numberParser(params) {
        return Number(params.newValue);
      },
    },
    totalColumn: {
      cellRenderer: "agAnimateShowChangeCellRenderer",
      cellClass: "number-cell",
    },
  };

  public groupDisplayType: RowGroupingDisplayType = "singleColumn";
  public rowData!: GridReadyEvent[];
  public groupDefaultExpanded = 1;

  onCellValueChanged(params: CellValueChangedEvent) {
    var changedData = [params.data];
    console.log(changedData);
    params.api.applyTransaction({ update: changedData });
  }

  piePalette = ["#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac"];
  chartPalette = ["#2b8cbe", "#0868ac"];

  ngOnInit() {}

  

  onGridReady(params: GridReadyEvent) {
    this.chartjsService.getBrandData().subscribe((data: any) => {
      dynamicHeader(data[0])
      this.rowData = data;
      console.log("dawdaw", this.rowData);
    });
  }
}

function dynamicHeader(payload: any) {
  console.log('Haeder',payload)
}

function formatNumber(params: { value: any }) {
  var number = params.value;
  // this puts commas into the number eg 1000 goes to 1,000,
  // i pulled this from stack overflow, i have no idea how it works
  return Math.floor(number)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
function subscribe(arg0: (data: any) => any) {
  throw new Error("Function not implemented.");
}
