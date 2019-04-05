import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SideAdsComponent } from './components/shared/side-ads/side-ads.component';
import { BlockAdsComponent } from './components/shared/block-ads/block-ads.component';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideAdsComponent,
    BlockAdsComponent,
    SideNavComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
