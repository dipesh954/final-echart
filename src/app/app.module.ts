import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AgGridModule } from "ag-grid-angular";
import { AppComponent } from "./app.component";
import { NgxEchartsModule } from "ngx-echarts";

export function chartModule(): any {
  return import("echarts");
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    NgxEchartsModule.forRoot({
      echarts: chartModule,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
