import { Component } from '@angular/core';

import { pieces } from '../pieces';

@Component({
    selector: 'art-pieces',
    templateUrl: './pieces-list.component.html',
    styleUrls: ['./pieces-list.component.css', './modal.component.css']
})
export class PieceListComponent {
    pieces = pieces;

    test(name){
        console.log(name);
    }
}