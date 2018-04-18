import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';
import { Avis } from '../models';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.scss']
})
export class CollegueComponentComponent {

  @Input() collegue: Collegue;

  constructor() { }

  impactForm(avis: Avis) {

    if(avis == Avis.AIMER) {
      this.collegue.score += 1;
    } else {
      this.collegue.score -= 1;
    }
  }

}
