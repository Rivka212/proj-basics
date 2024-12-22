import { Component } from '@angular/core';
import { Animal } from '../../models/animal.model';


@Component({
  selector: 'animal',
  standalone: false,
  
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.scss'
})

export class AnimalComponent {

  animals: Animal[] = [
    { type: 'Malayan Tiger', count: 787 },
    { type: 'Mountain Gorilla', count: 212 },
    { type: 'Fin Whale', count: 28 },
  ]
}
