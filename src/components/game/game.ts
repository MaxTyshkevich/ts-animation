import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { delay } from '../shared/delay';

const FLIP_DELAY = 2000;

export class Game extends BaseComponent {
  private readonly cardField: CardsField;
  private activeCard?: Card;
  private isAnimation = false;

  constructor() {
    super();

    this.cardField = new CardsField();
    this.element.append(this.cardField.element);
  }
  newGame(images: string[]) {
    // если игра была уже создана
    this.cardField.clear();

    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => {
        console.log(`click`);
        this.cardHandler(card);
      });
    });

    this.cardField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image != card.image) {
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }
    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
