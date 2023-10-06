import 'normalize.css';
import './style.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperThumbnails = new Swiper('.product__slider-thumbnails', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper = new Swiper('.product__slider-main', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.product__arrow_next',
    prevEl: '.product__arrow_prev',
  },
  thumbs: {
    swiper: swiperThumbnails,
  },
  modules: [Navigation, Pagination],
});
