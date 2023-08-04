import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  {
    // here path is http://localhost:4200/
    path:'',redirectTo:'front/admin',pathMatch:'full'
  },
  {
    // and here we redirected to http://localhost:4200/frontpage
    path:'front/admin',component:FrontPageComponent
  },
  {
    // and here we redirected to http://localhost:4200/homepage
    path:'front/home',component:HomePageComponent
  },

{
  //and here we redirected to http://localhost:4200/addpage
   path:'front/home/add',component:AddPageComponent
},
{
  //and here we redirected to http://localhost:4200/viewpage
  path:'front/home/view/:contactId',component:ViewPageComponent
},
{
  //and here we redirected to http://localhost:4200/updatepage
  path:'front/home/update/:Id',component:UpdatePageComponent
},
{
  //and here we redirected to http://localhost:4200/pageNotfound
  path:'**',component:PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
