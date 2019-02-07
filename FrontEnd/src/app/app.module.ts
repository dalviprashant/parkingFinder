// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
// routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
// other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';


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
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    SpotlistComponent,
    WorkbenchComponent,
    ProfileComponent,
    BookComponent,
    AddVehicleComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
