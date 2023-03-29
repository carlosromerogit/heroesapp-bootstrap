import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(heroe: Heroe): string {
    if (heroe.id?.includes('dc') || heroe.id?.includes('marvel'))
      return `../../../../assets/heroes/${heroe.id}.jpg`;
    return '../../../../assets/no-image.png';
  }
}
