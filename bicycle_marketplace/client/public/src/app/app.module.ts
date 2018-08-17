import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { ListingsComponent } from './listings/listings.component';
import { LotdComponent } from './lotd/lotd.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { UpdateListingComponent } from './update-listing/update-listing.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { ListingService } from './listing.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    HomeComponent,
    ListingComponent,
    ListingsComponent,
    LotdComponent,
    NewListingComponent,
    UpdateListingComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
