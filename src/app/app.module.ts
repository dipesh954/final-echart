import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AgGridModule } from "ag-grid-angular";
import { AppComponent } from "./app.component";
import { NgxEchartsModule } from "ngx-echarts";
import { DatasetComponent } from "./dataset/dataset.component";
import { ChartjsService } from "./chartjs.service";
import { BrandComponent } from "./brand/brand.component";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers/";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

export function chartModule(): any {
  return import("echarts");
}

@NgModule({
  declarations: [AppComponent, DatasetComponent, BrandComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    NgxEchartsModule.forRoot({
      echarts: chartModule,
    }),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [ChartjsService],

  bootstrap: [AppComponent],
})
export class AppModule {}
