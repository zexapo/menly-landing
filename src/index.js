import * as $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$('.missions-list__carousel').owlCarousel({
  responsive: {
    0: {
      items: 2,
      nav: true,
      loop: true,
      margin: 40,
      center: true,
      autoplay: true,
      autoplayTimeout: 2000,
    },
    450: {
      items: 2,
      nav: false,
      loop: true,
      margin: 40,
      autoWidth: true,
      autoplay: true,
      autoplayTimeout: 2000,
    },
  },
});
