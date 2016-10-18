import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "fancy-checkbox",
    styleUrls: ["fancyCheckbox.component.css"],
    template: "<label><input type='checkbox'/><span></span>{{label}}</label>"
})
export class FancyCheckbox {

    @Input() label: string
}