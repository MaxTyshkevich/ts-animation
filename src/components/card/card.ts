import { BaseComponent } from '../base-component';
import './card.scss';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  // принимать путь картинки для фронт
  constructor(readonly image: string) {
    super('div', ['card-container']);

    this.element.innerHTML = `
      <div class="card">
        <div class="card__font" style="background-image: url('./images/${image}')"></div>
        <div class="card__back"></div>
      </div>`;
  }

  flipToFront() {
    console.log(`front`);
    return this.flip(true);
  }

  flipToBack() {
    console.log(`back`);
    return this.flip();
  }

  private flip(isBack = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isBack); // true = add /false = remove
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}
