import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', 
  component: FeatureModuleComponent,
  children: [
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full',
    },
    { 
      path: 'hero-section', 
      component: HeroSectionComponent 
    },
    { 
      path: 'category', 
      component: CategoryComponent 
    },
    { 
      path: 'selling', 
      component: SellingComponent 
    },
    { 
      path: 'next-trip', 
      component: NextTripComponent 
    },
    { 
      path: 'testimonials', 
      component: TestimonialsComponent 
    },
    { 
      path: 'testimonials-two', 
      component: TestimonialsTwoComponent 
    },
    { 
      path: 'subscribe', 
      component: SubscribeComponent 
    },

    { 
      path: 'header', 
      component: HeaderComponent 
    },
    { 
      path: 'footer', 
      component: FooterComponent 
    }
  ]
 },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModuleRoutingModule { }
