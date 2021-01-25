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
      price: 185,
      img: "./img/tomatoes.JPG",
    },
    {
      id: 2,
      title: "Морковь",
      category: "Овощи",
      price: 22,
      img: "./img/carrot.JPG",
    },
    {
      id: 3,
      title: "Капуста",
      category: "Овощи",
      price: 35,
      img: "./img/cabbage.JPG",
    },
    {
      id: 4,
      title: "Яблоки",
      category: "Фрукты",
      price: 60,
      img: "./img/apples.JPG",
    },
    {
      id: 5,
      title: "Хурма",
      category: "Фрукты",
      price: 220,
      img: "./img/persimmon.JPG",
    },
    {
      id: 6,
      title: "Мандарины",
      category: "Фрукты",
      price: 90,
      img: "./img/tangerine.JPG", 
    },
    {
      id: 7,
      title: "Изюм в шоколадной глазури",
      category: "Сладости",
      price: 200,
      img: "./img/nuts1.JPG",
    },
    {
      id: 8,
      title: "Финики",
      category: "Сладости",
      price: 180,
      img: "./img/dates.JPG",
    },
    {
      id: 9,
      title: "Изюм в белой глазури",
      category: "Сладости",
      price: 200,
      img: "./img/raisins.JPG",
    },
    {
      id: 10,
      title: "Перец",
      category: "Овощи",
      price: 150,
      img: "./img/pepper.JPG",
    },
    {
      id: 11,
      title: "Укроп",
      category: "Зелень",
      price: 15,
      img: "./img/dill.JPG",
    },
    {
      id: 12,
      title: "Петрушка",
      category: "Зелень",
      price: 15,
      img: "./img/parsley.JPG",
    },
    {
      id: 13,
      title: "Салат",
      category: "Зелень",
      price: 15,
      img: "./img/salad.JPG",
    },
    {
      id: 14,
      title: "Чеснок",
      category: "Овощи",
      price: 20,
      img: "./img/garlic.JPG",
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
        "./img/ava.jpeg",
      text:
      "Заказали доставку, все отлично, даже подарок положили👍 Вообще давно хотелось такую услугу чтобы овощи и фрукты на дом привозили, будем ещё заказывать.",
    },
    {
      id: 2,
      name: "Александр Калинов",
      img:
        "./img/ava.jpeg",
      text:
        "Магазин небольшой, ассортиментом доволен. Главное есть бесплатная доставка и низкие цены.",
    },
    {
      id: 3,
      name: "Альбина Самойлова",
      img:
        "./img/ava.jpeg",
      text:
        "Отличный магазин, приятно удивили цены и доставка, в нашем городе это редкость. Спасибо вам!!!",
    },
    {
      id: 4,
      name: "Андрей Краснов",
      img:
        "./img/ava.jpeg",
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
  
