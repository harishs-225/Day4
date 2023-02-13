import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingledistrictComponent } from './singledistrict/singledistrict.component';

const routes: Routes = [{
  path:'',component:HomeComponent
},
{
  path:'contact',component:ContactComponent
},
{
  path:'signup',component:SignupComponent
},
{
  path:'district',component:DistrictComponent
},
{
   path:'single',component:SingledistrictComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
