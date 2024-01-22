import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CategoryComponent } from './category/category.component';
import { SellingComponent } from './selling/selling.component';
import { NextTripComponent } from './next-trip/next-trip.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialsTwoComponent } from './testimonials-two/testimonials-two.component';
import { SubscribeComponent } from './subscribe/subscribe.component';





@NgModule({
  declarations: [
    FeatureModuleComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    CategoryComponent,
    SellingComponent,
    NextTripComponent,
    TestimonialsComponent,
    TestimonialsTwoComponent,
    SubscribeComponent ,
     ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule,

  ]
})
export class FeatureModuleModule { }
