const burger = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.header-menu');
const hideBackground = document.querySelector('.hidden-background');
const body = document.body;
const popup = document.createElement('div');
const popupBody = document.createElement('div');
const popupInfo = document.createElement('div');
const cards = document.querySelectorAll('.card');
const object = [
    {
        'name': 'Jennifer',
        'img': 'images/pets-jennifer.svg',
        'type': 'Dog',
        'breed': 'Labrador',
        'description': 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
        'age': '2 months',
        'inoculations': ['none'],
        'diseases': ['none'],
        'parasites': ['none'],
    },
    {
        "name": "Woody",
        "img": "images/pets-woody.svg",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "images/pets-katrine.svg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "images/pets-sophia.svg",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "images/pets-scarlet.svg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "images/pets-timmy.svg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
      },
      {
        "name": "Freddie",
        "img": "images/pets-freddie.svg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Charly",
        "img": "images/pets-charly.svg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
      },
];

/*--------BURGER-MENU------------*/
burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        burgerMenu.classList.remove('active');
        hideBackground.classList.remove('active');
        body.style.overflow = 'auto';
    } else {
        burger.classList.add('active');
        burgerMenu.classList.add('active');
        hideBackground.classList.add('active');
        body.style.overflow = 'hidden'; 
    }
})

hideBackground.addEventListener('click', () => {
    hideBackground.classList.remove('active');
    burger.classList.remove('active');
    burgerMenu.classList.remove('active');
    popup.remove();
    popupBody.remove();
    popupInfo.remove();
    body.style.overflow = 'auto'; 
})

const burgerItems = document.querySelectorAll('.menu-item').forEach(elem => {
    elem.addEventListener('click', () => {
        burger.classList.remove('active');
        burgerMenu.classList.remove('active');
        hideBackground.classList.remove('active');
        body.style.overflow = 'auto';
    })
})

/*--------SLIDER---------*/
// const BTN_PREV = document.querySelector('.btn-prev');
// const BTN_NEXT = document.querySelector('.btn-next');
// const TRACK = document.querySelector('.slider-track');
// const PREV_ELEM = document.querySelector('.prev-elements');
// const CENTER_ELEM = document.querySelector('.center-elements');
// const NEXT_ELEM = document.querySelector('.next-elements');

// const movePrev = () => {
//     TRACK.classList.add('transition-prev')
//     BTN_PREV.removeEventListener('click', movePrev);
//     BTN_NEXT.removeEventListener('click', movePrev);
// }

// const moveNext = () => {
//     TRACK.classList.add('transition-next');
//     BTN_PREV.removeEventListener('click', movePrev);
//     BTN_NEXT.removeEventListener('click', movePrev);
// }

// BTN_PREV.addEventListener('click', movePrev);
// BTN_NEXT.addEventListener('click', moveNext);

// TRACK.addEventListener('animationend', (event) => {
//     if (event.animationName === 'prevAnimation') {
//         const centerElements = CENTER_ELEM.innerHTML;
//         NEXT_ELEM.innerHTML = centerElements;

//         const prevElements = PREV_ELEM.innerHTML;
//         CENTER_ELEM.innerHTML = prevElements;

//         PREV_ELEM.innerHTML = "";

//         const newElements = createNewElements();
//         newElements.forEach((element) => {
//             (event.animationName === 'prevAnimation') ? PREV_ELEM.append(element) : NEXT_ELEM.append(element);
//         });

//         TRACK.classList.remove('transition-prev');

//         const cards = document.querySelectorAll('.card');
//         cards.forEach(elem => {
//             addPopupForCards(elem);
//         });
//     } else {
//         const centerElements = CENTER_ELEM.innerHTML;
//         PREV_ELEM.innerHTML = centerElements;

//         const nextElements = NEXT_ELEM.innerHTML;
//         CENTER_ELEM.innerHTML = nextElements;

//         NEXT_ELEM.innerHTML = "";

//         const newElements = createNewElements();
//         newElements.forEach((element) => {
//             (event.animationName === 'prevAnimation') ? PREV_ELEM.append(element) : NEXT_ELEM.append(element);
//         });

//         TRACK.classList.remove('transition-next');

//         const cards = document.querySelectorAll('.card');
//         cards.forEach(elem => {
//             addPopupForCards(elem);
//         });
//     }
//     BTN_PREV.addEventListener('click', movePrev);
//     BTN_NEXT.addEventListener('click', moveNext);
// })

/*--------GENERATE CARDS------------*/
// let mapOfAllCards = new Map();
// object.forEach((elem) => {
//     mapOfAllCards.set(elem.name, elem);
// });

// let allCards = [];
// while (allCards.length < 8) {
//     let randNum = Math.floor(Math.random() * 8);
//     if (allCards.indexOf(randNum) === -1) {
//         allCards.push(randNum);
//     }
// }
// allCards.unshift(allCards[7]);

// const enterElementsInEmptyDiv = (nameOfDiv) => {
//     const elemArray = createNewElements();
//     elemArray.forEach((elem) => {
//         nameOfDiv.append(elem);
//     });
// }

// const createNewElements = () => {
//     if (allCards.length !== 0) {
//         let indexes = [];
//         for (let i = 0; i < 3; i++) {
//             indexes.push(allCards.shift());
//         }
//         var arrOfCards = createInnerHtmlOfElements(indexes);
//     }
//     else {
//         let names = returnNamesOfCenterElements();
//         mapOfAllCards.forEach((element) => {
//             names.forEach((cardName) => {
//                 if (element.name === cardName) {
//                     mapOfAllCards.delete(element.name);
//                 }
//             });
//         });
        
//         console.log(names);
//         console.log(mapOfAllCards);
//     }
//     return arrOfCards;
// }

// const returnNamesOfCenterElements = () => {
//     let namesOfCards = [];
//     let centerCards = CENTER_ELEM.children;
//     let lengthOfCards = centerCards.length;
//     for (let i = 0; i < lengthOfCards; i++) {
//         namesOfCards.push(centerCards[i].firstElementChild.alt);
//     }
//     return namesOfCards;
// }

// const createInnerHtmlOfElements = (indexes) => {
//     let generateCards = [];
//     for (let i = 0; i < 3; i++) {
//         const element = document.createElement('div');
//         const elementInfo = document.createElement('div');
//         element.classList.add('card');
//         elementInfo.classList.add('card-info');
//         elementInfo.innerHTML = `<span>${object[indexes[i]].name}</span>
//                                 <button class="pets-buttons">Learn more</button>`;
//         element.innerHTML = `<img src="${object[indexes[i]].img}" alt="${object[indexes[i]].name}">`;
//         element.append(elementInfo);
//         generateCards.push(element);
//     }
//     return generateCards;
// }

// if (PREV_ELEM.innerHTML === '') {
//     enterElementsInEmptyDiv(PREV_ELEM);
// }
// if (CENTER_ELEM.innerHTML === '') {
//     enterElementsInEmptyDiv(CENTER_ELEM);
// }
// if (NEXT_ELEM.innerHTML === '') {
//     enterElementsInEmptyDiv(NEXT_ELEM);
// }

/*
1) Генерируем Мар из 8 элементов
2) Заполняем три блока prev, center, next
3) Достаем элементы из центрального блока и удаляем их из Map
4) В Мар остается 5 элементов
5) Берем 3 элемента из него и вставляем в следующий блок, а 3 удаленных вставляем обратно
(к 5 элементам, лежащим в мапе, нужно подобрать индексы, сравнивая их с элементами массива объектов,
    затем эти индексы положить в массив и затем закинуть их в createHtmlCard)
    Главная цель: сформировать массив индексов из оставшихся элементов в Мар
*/

// const generateRandomIndex = () => {
//     let arrOfActiveCards = [];
//     for (let i = 0; i < 3; i++) {
//         let randIndex = Math.floor(Math.random() * 5);
//         if (arrOfActiveCards.length === 3) {
//             arrOfRandomCards.splice(randIndex, 1);
//         }
//         arrOfActiveCards.unshift(arrOfRandomCards.shift());
//     }
//     return arrOfActiveCards;
// }

/*--------POPUP---------*/
// cards.forEach(elem => {
//     addPopupForCards(elem);
// });

// function addPopupForCards(elem) {
//     elem.addEventListener('click', () => {
//         const cardName = elem.querySelector('.card-info').firstElementChild.innerText;
//         const index = activeCardNameIndex(cardName);
//         console.log(index);
//         popup.classList.add('popup');
//         popupBody.classList.add('popup-body');
//         popupBody.innerHTML = `<img src="${object[index].img}" alt="pet">`            
//         popupInfo.classList.add('popup-info');
//         popupInfo.innerHTML = `<h3>${object[index].name}</h3>
//         <h4>${object[index].type} – ${object[index].breed}</h4>
//         <h5>${object[index].description}</h5>
//         <ul>
//             <li><p><b>Age:</b> ${object[index].age}</p></li>
//             <li><p><b>Inoculations:</b> ${object[index].inoculations}</p></li>
//             <li><p><b>Diseases:</b> ${object[index].diseases}</p></li>
//             <li><p><b>Parasites:</b> ${object[index].parasites}</p></li>
//         </ul>`;
//         popup.append(popupBody);
//         popupBody.append(popupInfo);
//         hideBackground.after(popup);
//         hideBackground.classList.add('active');
//         body.style.overflow = 'hidden';
//     });
// }

// function activeCardNameIndex(cardName) {
//     let i = 0;
//     for (let cards of object) {
//         if (cardName === cards.name) {
//             return i;
//         }
//         i++;
//     }
// }