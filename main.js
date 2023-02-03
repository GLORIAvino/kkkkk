$(function () {
  const prop11 = document.getElementById('prop11');
  const prop12 = document.getElementById('prop12');
  const prop13 = document.getElementById('prop13');
  const prop14 = document.getElementById('prop14');
  const prop15 = document.getElementById('prop15');
  const prop16 = document.getElementById('prop16');

  const prop21 = document.getElementById('prop21');
  const prop22 = document.getElementById('prop22');
  const prop23 = document.getElementById('prop23');
  const prop24 = document.getElementById('prop24');
  const prop25 = document.getElementById('prop25');
  const prop26 = document.getElementById('prop26');

  const prop31 = document.getElementById('prop31');
  const prop32 = document.getElementById('prop32');
  const prop33 = document.getElementById('prop33');
  const prop34 = document.getElementById('prop34');
  const prop35 = document.getElementById('prop35');
  const prop36 = document.getElementById('prop36');

  const prop41 = document.getElementById('prop41');
  const prop42 = document.getElementById('prop42');
  const prop43 = document.getElementById('prop43');
  const prop44 = document.getElementById('prop44');
  const prop45 = document.getElementById('prop45');
  const prop46 = document.getElementById('prop46');

  const prop51 = document.getElementById('prop51');
  const prop52 = document.getElementById('prop52');
  const prop53 = document.getElementById('prop53');
  const prop54 = document.getElementById('prop54');
  const prop55 = document.getElementById('prop55');
  const prop56 = document.getElementById('prop56');

  const photo1 = document.getElementById('photo1');
  const photo2 = document.getElementById('photo2');
  const photo3 = document.getElementById('photo3');
  const photo4 = document.getElementById('photo4');
  const photo5 = document.getElementById('photo5');

  $('.rev_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  const naruto = {
    name: " Паперовий будинок",
    "native city": "Корея",
    ninjutsu: "Професор",
    taijutsu: "Детектив",
    genjutsu: "Ю Джи-тхэ",
    
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6-ignQqFH4SeoQV82RmWG3LsL3lQgVDnjFJmWUniPta-5fcuk',
  }

  const gaara = {
    name: "Справжня краса",
    "native city": "Корея",
    ninjutsu: "МунГаЄн",
    taijutsu: "Романтика",
    genjutsu: "Лим Джу‑кёнг",
    
    img: 'img/сир.jpg',
  }

  const itachi = {
    name: "Винченцо",
    "native city": "Корея",
    ninjutsu: "Винченцо",
    taijutsu: "Детектив",
    genjutsu: "Сон Чжун Ки ",
    
    img: 'img/Vincenzo_poster.jpg',
  }

  const kakashu = {
    name: "Сир в мишоловці",
    "native city": "Корея",
    ninjutsu: "КимГоИн",
    taijutsu: "Вебтун" ,
    genjutsu: "Хонг Сеол",
  
    img: 'img/краса.jpg',
  }

  const saske = {
    name: "Школа 2015",
    "native city": "Корея",
    ninjutsu: "КоИнБель",
    taijutsu: "Романтика",
    genjutsu: "Ким Со Хён",
    img: 'img/irk.jpg',
  }

  photo1.style.backgroundImage = `url(${naruto.img})`
  prop11.textContent = `Дорама: ${naruto.name}`;
  prop12.textContent = `Країна: ${naruto["native city"]}`;
  prop13.textContent = `Головний герой: ${naruto.ninjutsu}`;
  prop14.textContent = `Жанр: ${naruto.taijutsu}`;
  prop15.textContent = `Головний актор: ${naruto.genjutsu}`;
 

  photo2.style.backgroundImage = `url(${gaara.img})`
  prop21.textContent = `Дорама: ${gaara.name}`;
  prop22.textContent = `Країна: ${gaara["native city"]}`;
  prop23.textContent = `Головний герой: ${gaara.ninjutsu}`;
  prop24.textContent = `Жанр: ${gaara.taijutsu}`;
  prop25.textContent = `Головний актор: ${gaara.genjutsu}`;
 

  photo3.style.backgroundImage = `url(${itachi.img})`
  prop31.textContent = `Дорама: ${itachi.name}`;
  prop32.textContent = `Країна: ${itachi["native city"]}`;
  prop33.textContent = `Головний герой: ${itachi.ninjutsu}`;
  prop34.textContent = `Жанр: ${itachi.taijutsu}`;
  prop35.textContent = `Головний актор: ${itachi.genjutsu}`;
  

  photo4.style.backgroundImage = `url(${kakashu.img})`
  prop41.textContent = `Дорама: ${kakashu.name}`;
  prop42.textContent = `Країна: ${kakashu["native city"]}`;
  prop43.textContent = `Головний герой: ${kakashu.ninjutsu}`;
  prop44.textContent = `Жанр: ${kakashu.taijutsu}`;
  prop45.textContent = `Головний актор: ${kakashu.genjutsu}`;
  

  photo5.style.backgroundImage = `url(${saske.img})`
  prop51.textContent = `Дорама: ${saske.name}`;
  prop52.textContent = `Країна: ${saske["native city"]}`;
  prop53.textContent = `Головний герой: ${saske.ninjutsu}`;
  prop54.textContent = `ТЖанр: ${saske.taijutsu}`;
  prop55.textContent = `Головний актори: ${saske.genjutsu}`;
  

});
