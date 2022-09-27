// РЕДЮСЕР ЦЕ ЧИСТА ФУНКЦІЯ ЯКА ПРИЙМАЄ В СЕБЕ СТЕЙТ І ЕКШН , ПРИ НЄОБХОДІМОСТІ МІНЯЄ ЙОГО І ВЕРТАЄ ІЗМІНЬОННИЙ СТЕЙТ АБО ЯКШО
//НІЧОГО НЕ ЗМІНИЛОСЬ ВЕРТАЄ СТАРИЙ СТЕЙТ

let initialState = {
  news: [
    {
      id: 1,
      avtorAvatar: 'https://slovnet.ru/wp-content/uploads/2018/12/1-66.jpg',
      photoUrl:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-poster-design-template-d020bd02f944a333be71e17e3a38db24_screen.jpg?ts=1605640286",
      avtor: "Luisa J",
      data: "22/11/2044",
      text: "Whats not in the deal is much of anything to curb access to guns for most people. It would not reinstate the assault weapons ban as most Democrats would prefer. It would not raise the age to buy certain guns from 18 to 21.",
    }, {
      id: 2,
      avtorAvatar: 'https://slovnet.ru/wp-content/uploads/2018/12/1-66.jpg',
      photoUrl:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-poster-design-template-d020bd02f944a333be71e17e3a38db24_screen.jpg?ts=1605640286",
      avtor: "Luisa J",
      data: "22/11/2044",
      text: "Whats not in the deal is much of anything to curb access to guns for most people. It would not reinstate the assault weapons ban as most Democrats would prefer. It would not raise the age to buy certain guns from 18 to 21.",
    }, {
      id: 3,
      avtorAvatar: 'https://slovnet.ru/wp-content/uploads/2018/12/1-66.jpg',
      photoUrl:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-poster-design-template-d020bd02f944a333be71e17e3a38db24_screen.jpg?ts=1605640286",
      avtor: "Luisa J",
      data: "22/11/2044",
      text: "Whats not in the deal is much of anything to curb access to guns for most people. It would not reinstate the assault weapons ban as most Democrats would prefer. It would not raise the age to buy certain guns from 18 to 21.",
    }, {
      id: 4,
      avtorAvatar: 'https://slovnet.ru/wp-content/uploads/2018/12/1-66.jpg',
      photoUrl:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-poster-design-template-d020bd02f944a333be71e17e3a38db24_screen.jpg?ts=1605640286",
      avtor: "Luisa J",
      data: "22/11/2044",
      text: "Whats not in the deal is much of anything to curb access to guns for most people. It would not reinstate the assault weapons ban as most Democrats would prefer. It would not raise the age to buy certain guns from 18 to 21.",
    },
  ],
};

const newsReducer = (state = initialState, action) => {
  return state;
};

export default newsReducer;
