import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import './cards-field.scss';

const SHOW_TIME = 15;

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => {
      this.element.append(card.element);
    });

    setTimeout(() => {
      this.cards.forEach((card) => {
        card.flipToFront();
      });
    }, SHOW_TIME * 1000);
  }
}
