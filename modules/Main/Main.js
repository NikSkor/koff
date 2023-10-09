import { addContainer } from '../addContainer';

export class Main {
  static unstance = null;

  constructor() {
    if (!Main.instance) {
      Main.instance = this;

      this.element = document.createElement('main');
      this.isMounted = false;
    }

    return Main.instance;
  }

  mount() {
    if (this.isMounted) {
      return;
    }

    document.body.append(this.element);
    this.isMounted = true;
  }

  unmount() {
    this.element.remove();
    this.isMounted = false;
  }
}
