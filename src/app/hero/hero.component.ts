import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

	heroId = 0;
	bornYear = '';
  constructor(
  	private route: ActivatedRoute,
	) { }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
	    this.heroId = Number(params.get('heroId'));
	    this.bornYear = params.get('year');
	  });
  }

}
