import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

// containers 

import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";

// components

import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";

//service

import { PassengerDashboardService } from './passenger-dashboard.service';
import { FormsModule } from "@angular/forms";
@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerViewerComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    exports: [
        PassengerViewerComponent
    ],
    providers:[
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {}