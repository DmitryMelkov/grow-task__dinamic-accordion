window.addEventListener("DOMContentLoaded", function () {
  //модальное окно
  let modal = document.getElementById("window-modal");

  let btn = document.getElementById("btn-modal");
  let closeBtn = document.getElementsByClassName("intro__modal-close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  //тыкает вокруг окна
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  //бургер меню
  let burger = document.getElementById("nav_toggle");

  burger.addEventListener("click", myBurger);

  function myBurger() {
    let element = document.getElementById("nav");
    element.classList.toggle("open");
    burger.classList.toggle("active");
  }

  //слайдер 1
  new Swiper(".slider__swiper", {
    //активный слайд по центру
    centerSlides: true,
    //Стартовый слайд
    initialSlide: 3,

    //Стрелки
    navigation: {
      nextEl: ".slider__btn-next",
      prevEl: ".slider__btn-prev",
    },
    //Навигация
    //Буллеты, текущее положение, прогрессбар
    pagination: {
      el: ".slider__pagination",
      //буллеты
      clickable: true,
      //динамические буллеты
      dynamicBullets: true,
      //Кастомные буллеты (указать буллету номер)
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },

      //Фракция
      // type: 'fraction',
    },
  });

  //слайдер 2
  new Swiper(".cards__slide-container", {
    speed: 600,
    //расстояние между слайдами
    spaceBetween: 50,
    //кол-во слайдов для показа
    slidesPerView: 3,
    // кол-во слайдов при прокрутке
    slidesPerGroup: 1,

    autoHeight: false,
    //мультирядность
    slidesPerColumn: 1,
    slidesPerColumnFill: "row",

    navigation: {
      nextEl: ".slider__btn-next",
      prevEl: ".slider__btn-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1023: {
        slidesPerView: 2,
      },
      1500: {
        slidesPerView: 3,
      },
    },
  });

  // form
  let selector = document.querySelector("input[type='tel']");

  let im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  new JustValidate(".form__form", {
    rules: {
      email: {
        required: true,
        email: true,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
      name: {
        required: true,
        minLength: 4,
        maxLength: 30,
      },
      text: {
        required: true,
        minLength: 10,
        maxLength: 500,
      },
    },
    messages: {
      email: {
        required: "Укажите ваш e-mail",
      },
      tel: {
        required: "Укажите ваш телефон",
      },
      name: {
        required: "Как вас зовут?",
      },
      text: {
        required: "Что вы хотели написать?",
      },
    },
    colorWrong: "red",
  });

  //accordion
  let accordions;
  const accordionWrapper = document.querySelector('.accordion__wrapper')

  //эмуляция работы аккордиона с сервером
  //это json  который к нам пришел с сервера
  const contentData = [
    {
      id: 1,
      title: "title1",
      content: "content1",
    },
    {
      id: 2,
      title: "title2",
      content: "content2",
    },
    {
      id: 3,
      title: "title3",
      content: "content3",
    },
    {
      id: 4,
      title: "title4",
      content: "content4",
    },
    {
      id: 5,
      title: "title5",
      content: "content5",
    },
  ];

  const createTemplate = item => {
    return `
    <div class="accordion__item">
      <div class="accordion__item-header">
        <h3 class="accordion__item-title">${item.title}</h3>
        <div class="accordion__item-btn"></div>
      </div>
      <div class="accordion__item-content">${item.content}</div>
    </div>

    `;
  };

  const fillHtmlList = () => {
    contentData.forEach(item => {
      accordionWrapper.innerHTML += createTemplate(item)
    })
    accordions = document.querySelectorAll('.accordion__item')
  }


  fillHtmlList();

  if (accordions) {
    for (item of accordions) {
      item.addEventListener("click", function () {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
        } else {
          for (el of accordions) {
            el.classList.remove("active");
          }
          this.classList.add("active");
        }
      });
    }
  }




});
