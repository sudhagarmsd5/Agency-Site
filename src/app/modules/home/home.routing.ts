import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { OurblogsComponent } from './ourblogs/ourblogs.component';
import { OurteamsComponent } from './ourteams/ourteams.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  {path:'',component:HomeComponent}
  // { path: '', redirectTo: 'app-store', pathMatch: 'full' },
  // { path: 'app-store', component: AppStoreComponent },
  // { path: 'login', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
