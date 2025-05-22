import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { categories } from '../../utils/utils';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, MatIconModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  public categories = categories;
  public searchGame = [...this.categories];

  jogos = ['Todos', 'Melhores jogos ao vivo', 'Roletas', 'Baccarat', 'Blackjack', 'Dados'];
  selectedCategory = 'Todos';
  searchQuery = '';

  @ViewChildren('carousel') carousels!: QueryList<ElementRef>;

  filterGame(event: Event){
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchGame = this.categories.map(category => {
      const filteredGames = category.games.filter(game => game.name.toLowerCase().includes(query));
      return {
        ...category,
        games: filteredGames
      };
    }).filter(category => category.games.length > 0);
  }

  ngAfterViewInit() {
    this.carousels.forEach((carouselRef) => {
      const carousel = carouselRef.nativeElement;

      let isDown = false;
      let startX: number;
      let scrollLeft: number;

      carousel.addEventListener('mousedown', (e: MouseEvent) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
      });

      carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
      });

      carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
      });

      carousel.addEventListener('mousemove', (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.scrollLeft = scrollLeft - walk;
      });
    });
  }

  
}
