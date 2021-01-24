const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
   links.classList.toggle("show-links");
})

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
//  fixed navbar 
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link')
    }
    else {
        topLink.classList.remove('show-link')
    }
});

// ссылки
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeigth = navbar.getBoundingClientRect().height;
        const containerHeigth = linksContainer.getBoundingClientRect().height;

        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeigth;

        if(!fixedNav){
            position = position - navHeigth;
        }
        if(navHeigth > 82){
            position = position + containerHeigth
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
      
    });
});



// Продукция

const menu = [
    {
      id: 1,
      title: "Помидоры",
      category: "Овощи",
      price: 15.99,
      img: "../SITE/img/tomatoes.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Морковь",
      category: "Овощи",
      price: 13.99,
      img: "../SITE/img/carrot.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "Капуста",
      category: "Овощи",
      price: 6.99,
      img: "../SITE/img/cabbage.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Яблоки",
      category: "Фрукты",
      price: 20.99,
      img: "../SITE/img/apples.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Хурма",
      category: "Фрукты",
      price: 22.99,
      img: "../SITE/img/persimmon.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Мандарины",
      category: "Фрукты",
      price: 18.99,
      img: "../SITE/img/tangerine.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Изюм в шоколадной глазури",
      category: "Сладости",
      price: 8.99,
      img: "../SITE/img/nuts1.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "Финики",
      category: "Сладости",
      price: 12.99,
      img: "../SITE/img/dates.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "Изюм в белой глазури",
      category: "Сладости",
      price: 15.99,
      img: "../SITE/img/raisins.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 10,
      title: "Перец",
      category: "Овощи",
      price: 16.99,
      img: "../SITE/img/pepper.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 11,
      title: "Укроп",
      category: "Зелень",
      price: 15.99,
      img: "../SITE/img/dill.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 12,
      title: "Петрушка",
      category: "Зелень",
      price: 15.99,
      img: "../SITE/img/parsley.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 13,
      title: "Салат",
      category: "Зелень",
      price: 15.99,
      img: "../SITE/img/salad.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 14,
      title: "Чеснок",
      category: "Овощи",
      price: 15.99,
      img: "../SITE/img/garlic.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <div>
                <h4>${item.title}</h4>
                <h3 class="price">${item.price}р/кг</h3>
              </div>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["Все"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "Все") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
  





//   Акции




const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const weekdays = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');
  
  let futureDate = new Date(2021, 2, 8, 11, 30, 0);
  
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  
  let month = futureDate.getMonth();
  month = months[month];
  
  const date = futureDate.getDate();
  
  const weekday = weekdays[futureDate.getDay()];
  
  
  giveaway.textContent = `Ярмарка будет проводиться: ${weekday} ${date} ${month} ${year} ${hours}:${minutes}`;
  
  
  const futureTime = futureDate.getTime();
  
  function getRemainingTime(){
    const today = new Date().getTime();
    const countdown = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = countdown / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((countdown % oneDay) / oneHour);
    let minutes = Math.floor((countdown % oneHour) / oneMinute);
    let seconds = Math.floor((countdown % oneMinute) / 1000);
  
    // set values array
    const values = [days,hours,minutes,seconds];
  
    function format(item){
      if(item < 10){
        return item = `0${item}`;
      }
      return item;
    }
  
    items.forEach(function(item,index){
      item.innerHTML = format(values[index]);
    });
    if(countdown < 0){
      clearInterval(countdownInterval);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
    }
  }
  // countdown Interval
  let countdownInterval = setInterval(getRemainingTime, 1000);
  
  getRemainingTime();







 // Отзывы





const reviews = [
    {
      id: 1,
      name: "Ирина Залинова",
      img:
        "../SITE/img/ava.jpeg",
      text:
      "Заказали доставку, все отлично, даже подарок положили👍 Вообще давно хотелось такую услугу чтобы овощи и фрукты на дом привозили, будем ещё заказывать.",
    },
    {
      id: 2,
      name: "Александр Калинов",
      img:
        "../SITE/img/ava.jpeg",
      text:
        "Магазин небольшой, ассортиментом доволен. Главное есть бесплатная доставка и низкие цены.",
    },
    {
      id: 3,
      name: "Альбина Самойлова",
      img:
        "../SITE/img/ava.jpeg",
      text:
        "Отличный магазин, приятно удивили цены и доставка, в нашем городе это редкость. Спасибо вам!!!",
    },
    {
      id: 4,
      name: "Андрей Краснов",
      img:
        "../SITE/img/ava.jpeg",
      text:
        "Магазин уютный, товар хорошего качества, нам очень понравился. ",
    },
  ];
  
  // select items 
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function(){
    showPerson();
  });
  // show person based on item
  
  function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
  }
  
  //show next person
  
  nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  //show prev person
  
  prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  
