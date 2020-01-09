import { Component} from '@angular/core'

import { pieces } from '../pieces'

@Component ({
    selector: 'piece-page',
    templateUrl: 'piece-page.component.html',
    styleUrls: ['piece-page.component.css']
})

export class PiecePageComponent{
    pieces = pieces;

}