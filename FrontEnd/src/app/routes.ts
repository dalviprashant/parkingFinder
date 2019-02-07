import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { SpotlistComponent } from './spotlist/spotlist.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { ProfileComponent } from './profile/profile.component';
import { BookComponent } from './book/book.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    { path: 'AppComponent', component: AppComponent },
    { path: 'FirstPage', component: BookComponent },
    { path: 'WorkBench', component: WorkbenchComponent },
    { path: 'Add_Vehicle', component: AddVehicleComponent },
    { path: 'Profile', component: ProfileComponent },
];
