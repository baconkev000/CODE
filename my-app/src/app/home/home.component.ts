import { Component, AfterViewInit } from '@angular/core';

import { pieces } from '../pieces';

@Component({
    selector:'home',
    templateUrl: 'home.component.html',
    styleUrls:['home.component.css']
})

export class HomeComponent{
    pieces = pieces;
}