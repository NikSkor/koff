import 'normalize.css';
import './style.scss';
import Navigo from 'navigo';
import { Header } from './modules/Header/Header';
import { Main } from './modules/Main/Main';
import { Footer } from './modules/Footer/Footer';
import { Order } from './modules/Order/Order';

const productSlider = () => {
  Promise.all([
    import('swiper/modules'),
    import('swiper'),
    import('swiper/css'),
  ]).then(([{ Navigation, Thumbs }, Swiper]) => {
    const swiperThumbnails = new Swiper.default('.product__slider-thumbnails', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper.default('.product__slider-main', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.product__arrow_next',
        prevEl: '.product__arrow_prev',
      },
      modules: [Navigation, Thumbs],
      thumbs: {
        swiper: swiperThumbnails,
      },
    });
  });
};



const init = () => {
  new Header().mount();
  new Main().mount();
  new Footer().mount();



  productSlider();

  const router = new Navigo('/', {linksSelector: 'a[href^="/"]'});

  router
    .on('/', () => {})
    .on('/category', () => {
      console.log('category');
    })
    .on('/favourite', () => {})
    .on('/search', () => {})
    .on('/product/:id', (obj) => {})
    .on('/cart', () => {})
    .on('/order', () => {
      new Order().mount(new Main().element);
    })
    .notFound(() => {
      document.body.innerHTML = '<h2>Страница не найдена</h2>'
    });

  router.resolve();

}

init();
