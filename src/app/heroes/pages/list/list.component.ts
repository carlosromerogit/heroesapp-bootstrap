import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  heroes: Heroe[] = [];
  isLoading: boolean = false;
  constructor(private heroesService: HeroesService) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.isLoading = false;
      this.heroes = heroes;
    });
  }
}
