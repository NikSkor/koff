import { addContainer } from "../addContainer";

export class NotFoundPage {
  static unstance = null;

  constructor() {
    if (!NotFoundPage.instance) {
      NotFoundPage.instance = this;

      this.element = document.createElement('section');
      this.element.classList.add('error');
      this.containerElement = addContainer(this.element, 'error__container');
      this.isMounted = false;
    }

    return NotFoundPage.instance;
  }

  mount(parent) {
    if (this.isMounted) {
      return;
    }

    const title = document.createElement('h2');
    title.classList.add('error__title');
    title.textContent = 'Страница не найдена';

    const text = document.createElement('p');
    text.classList.add('error__text');
    text.innerHTML = `Через 5 секунд Вы будете перенаправлены на <a href='/' class='error__link'>главную страницу</a>`;

    this.containerElement.append(title, text);

    parent.append(this.element);
    this.isMounted = true;
  }

  unmount() {
    this.element.remove();
    this.isMounted = false;
  }
}
