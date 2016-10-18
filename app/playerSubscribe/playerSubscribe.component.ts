/**
 * Created by Administrator on 10/18/2016.
 */
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'player-subscribe',
    templateUrl: 'playerSubscribe.component.html'
})

export class PlayerSubscribeComponent {
    players: [string] = ["Sachin Tendulkar", "MS Dhoni", "Kevin Durant"];
}
