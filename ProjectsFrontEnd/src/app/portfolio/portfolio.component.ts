import { Component, OnInit } from '@angular/core';
import { picturesCh } from '../pictures';
import { picturesG } from '../pictures';
import { picturesP } from '../pictures';
import { picturesW } from '../pictures';


@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  picturesCh = picturesCh;
  picturesG = picturesG;
  picturesP = picturesP;
  picturesW = picturesW;

  constructor() { }

  ngOnInit(): void {
  }

}
