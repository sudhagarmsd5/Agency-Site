import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { OurteamsComponent } from './ourteams/ourteams.component';
import { OurblogsComponent } from './ourblogs/ourblogs.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent,PortfolioComponent,StatisticsComponent,TestimonialsComponent,NewsletterComponent,
  OurteamsComponent,
OurblogsComponent,
ContactUsComponent,
FooterComponent
]
})
export class HomeModule { }
