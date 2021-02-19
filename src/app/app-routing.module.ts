import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
//import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component"
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'signup', component:SignupComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
//providers: [AuthGuard]
})
export class AppRoutingModule{

}
