import { addContainer } from "../addContainer";

export class Order {
  static instance = null;

  constructor() {
    if (!Order.instance) {
      Order.instance = this;
      this.element = document.createElement('section');
      this.element.classList.add('order');
      this.containerElement = addContainer(this.element, 'order__container');
      this.isMounted = false;
    }
    return Order.instance;
  }
  mount(parent) {
    if (this.isMounted) {
      return;
    }

    const orderBlock = document.createElement('div');
    orderBlock.classList.add('order__block');

    const orderInfo = this.getOrderInfo();
    const orderArticle = this.getOrderArticle();
    const orderSubtitle = this.getOrderSubtitle();
    const orderTable = this.getOrderTable();
    const orderBtn = this.getOrderBtn();

    orderBlock.append(
      orderInfo,
      orderArticle,
      orderSubtitle,
      orderTable,
      orderBtn
    );

    this.containerElement.append(orderBlock);

    parent.append(this.element);
    this.isMounted = true;
  }

  unmount() {
    this.element.remove();
    this.isMounted = false;
  }

  getOrderInfo() {
    const orderInfo = document.createElement('div');
    orderInfo.classList.add('order__info');

    const orderTitle = document.createElement('h3');
    orderTitle.classList.add('order__title');
    orderTitle.textContent = 'Заказ успешно размещен';

    const orderPrice = document.createElement('p');
    orderPrice.classList.add('order__price');
    orderPrice.innerHTML = `20&nbsp;000&nbsp;₽`;

    orderInfo.append(orderTitle, orderPrice);

    return orderInfo;
  }

  getOrderArticle() {
    const orderArticle = document.createElement('p');
    orderArticle.classList.add('order__article');
    orderArticle.textContent = '№43435';

    return orderArticle;
  }

  getOrderSubtitle() {
    const orderSubtitle = document.createElement('h4');
    orderSubtitle.classList.add('order__subtitle');
    orderSubtitle.textContent = 'Данные доставки';

    return orderSubtitle;
  }

  getOrderTable() {
    const orderTable = document.createElement('table');
    orderTable.classList.add('order__table','table');
    orderTable.innerHTML = `
      <tr class="table__row">
        <td class="table__field">Получатель</td>
        <td class="table__value">Иванов Петр Александрович</td>
      </tr>
      <tr class="table__row">
        <td class="table__field">Телефон</td>
        <td class="table__value">+7 (737) 346 23 00</td>
      </tr>
      <tr class="table__row">
        <td class="table__field">E-mail</td>
        <td class="table__value">Ivanov84@gmail.com</td>
      </tr>
      <tr class="table__row">
        <td class="table__field">Адрес доставки</td>
        <td class="table__value">Москва, ул. Ленина, 21, кв. 33</td>
      </tr>
      <tr class="table__row">
        <td class="table__field">Способ оплаты</td>
        <td class="table__value">Картой при получении</td>
      </tr>
      <tr class="table__row">
        <td class="table__field">Способ получения</td>
        <td class="table__value">Доставка</td>
      </tr>
    `;

    return orderTable;
  }

  getOrderBtn() {
    const orderBtn = document.createElement('a');
    orderBtn.classList.add('order__btn');
    orderBtn.href = '/';
    orderBtn.textContent = 'На главную';

    return orderBtn;
  }
}