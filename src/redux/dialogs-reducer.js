const SEND_MESSEGE = "SEND-MESSEGE";

let initialState = {
  friendmessages: [
    {
      id: 1,
      message: "Hellooo man",
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
    },

    {
      id: 2,
      message: "i arrived",
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
    },
    {
      id: 3,
      message: "you are weclome",
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
    },
    {
      id: 4,
      message: "you doing well",
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
    },
    {
      id: 5,
      message: "whats up?",
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
    },
  ],
  mymesseges: [
    {
      id: 1,
      message: "Hell  dsadasdadasdaa",
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
    },
    {
      id: 2,
      message: "Hell  dsadasdadasdaa",
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
    },
    {
      id: 3,
      message: "Hell  dsadasdadasdaa",
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
    },
  ],
  dialogs: [
    {
      id: 1,
      name: "James",
      avatar: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
    },
    {
      id: 2,
      name: "Ricky",
      avatar:
        "http://pm1.narvii.com/7620/1e77e3a13124a5f7b3bf5484eb5c2da285b3d02cr1-700-690v2_uhq.jpg",
    },
    {
      id: 3,
      name: "Clara",
      avatar:
        "https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg",
    },
    {
      id: 4,
      name: "Morry",
      avatar: "https://www.blast.hk/attachments/68493/",
    },
    { id: 5, name: "Boldi", avatar: "https://i.imgur.com/fl6p5wk.png" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSEGE:
      let body = action.newMessege;
      let avatar = "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg";
      return {
        ...state,
        mymesseges: [
          ...state.mymesseges,
          { id: 5, message: body, img: avatar },
        ],
      };
    default:
      return state;
  }
};

export default dialogsReducer;

export const sendMessege = (newMessege) => ({
  type: SEND_MESSEGE,
  newMessege,
});
