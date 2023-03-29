import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input() btnLabel: string = 'Agregar';
  @Input() onAdd: boolean = true;
  @Input() onEdit: boolean = false;
  @Output() emitHeroe: EventEmitter<Heroe> = new EventEmitter();

  constructor(private heroesService: HeroesService, private router: Router) {}

  @Input() heroe: Heroe = {
    id: '',
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    characters: '',
    publisher: Publisher.DCComics,
    image: '',
  };
  postHeroe() {
    if (!this.heroe.superhero) return;
    this.heroesService.postHeroe(this.heroe).subscribe((heroe) => {
      this.router.navigate(['/heroes/heroe', heroe.id]);
    });
  }

  deleteHeroe() {
    this.heroesService.deleteHeroe(this.heroe.id!).subscribe((_) => {
      this.router.navigate(['/heroes/list']);
    });
  }

  putHeroe() {
    this.heroesService.putHeroe(this.heroe).subscribe((heroe) => {
      this.router.navigate(['heroes/heroe', heroe.id]);
    });
  }
}
