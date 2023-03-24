import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private HeroesService: HeroesService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.HeroesService.getHeroeById(id)))
      .subscribe(console.log);
  }
}
