/**
 * Created by Administrator on 10/17/2016.
 */
import {Component} from '@angular/core';
import { Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "subscription-form",
    templateUrl: "subscriptionForm.component.html"
})

export class SubscriptionForm {

    @Input() interests: [string]

}

