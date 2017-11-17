import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

// Import the ButtonsModule...
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridComponent } from './grid/grid.component';

/* Loading CLDR data, see
 * http://www.telerik.com/kendo-angular-ui/components/internationalization/
 *
 * // Load all required data for the de locale
 * import '@progress/kendo-angular-intl/locales/de/all';
 */
import { AlertModule } from 'ngx-bootstrap';
import { GraphComponent } from './graph/graph.component';

export declare let require: any;

export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);

  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GraphComponent
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    // ... and register it
    ChartModule,
    ButtonsModule,
    GridModule,
    AlertModule.forRoot(),
  ],
  bootstrap : [AppComponent]
})
export class AppModule { }
