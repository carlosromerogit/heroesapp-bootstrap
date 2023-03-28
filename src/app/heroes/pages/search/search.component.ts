import { query } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, Subject, tap, switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  results: Heroe[] = [];
  query: string = '';
  debouncer: Subject<string> = new Subject();

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(500),
        switchMap((query) => this.heroesService.getHeroesByQuery(query))
      )
      .subscribe((heroes) => (this.results = heroes.slice(0, 5)));
  }

  sendQuery() {
    this.query = this.input.nativeElement.value;
    this.debouncer.next(this.input.nativeElement.value);
  }
}
