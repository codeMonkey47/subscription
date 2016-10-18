import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello.component';
import {FancyText} from './fancyText/fancyText.component';
import {FancyCheckbox} from "./fancyCheckbox/fancyCheckbox.component";
import {SubscriptionForm} from "./subscriptionForm/subscriptionForm.component";
import {PlayerSubscribeComponent} from "./playerSubscribe/playerSubscribe.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations:  [ HelloComponent , PlayerSubscribeComponent, SubscriptionForm ,FancyText, FancyCheckbox],
  bootstrap:     [ HelloComponent, PlayerSubscribeComponent]
})
export class AppModule { }
