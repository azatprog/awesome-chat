import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: 'app', component: AppComponent,
        // children: [
            { path: '', redirectTo: 'login', pathMatch: 'full'},
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'main', component: MainComponent },
            //     children: [
            //         { path: '', redirectTo: 'mission', pathMatch: 'full'},
            //         { path: 'mission', component: MissionComponent },
            //         { path: 'graph', component: GraphComponent },
            //         { path: 'missionProfile', component: MissionProfileComponent },
            //         { path: 'map', component: MapComponent },
            //         { path: 'vehicle', component: VehicleComponent },
            //         { path: 'vehicleProfile', component: VehicleProfileComponent },
            //         { path: 'route', component: MissionrouteComponent },
            //         { path: 'report', component: ReportComponent },
            //         { path: 'help', component: HelpComponent },
            //         { path: 'about', component: AboutComponent }                    
            //     ]
            // }            
        // ]
    // },
    { path: '**', component: LoginComponent },
];
