import { Component, OnInit } from '@angular/core';
import { picturesCh } from '../pictures';
import { picturesG } from '../pictures';
import { picturesP } from '../pictures';
import { picturesW } from '../pictures';
import { Router } from '@angular/router'; //link portfolio btn to Contact page

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

  constructor(private router: Router) { }//link portfolio btn to Contact page
  goToContact () { //link portfolio btn to Contact page
    this.router.navigateByUrl('/contact');
  }
  ngOnInit(): void {
  }

}
