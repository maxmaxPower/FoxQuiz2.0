//BLL BUSINES LOGIC LAYER  НАЗВА//
import messegesReducer from "./messeges-reducer";
import profileReducer from "./profile-reducer";
import sidebarreducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, messege: "Hi,how are you?", likesCount: 12 },
        { id: 2, messege: "Its my first post", likesCount: 11 },
        { id: 3, messege: "How are you", likesCount: 22 },
        { id: 4, messege: "Jsx cool", likesCount: 111 },
        { id: 5, messege: "REACT REACT", likesCount: 11111 },
        { id: 6, messege: "Mally", likesCount: 44 },
      ],
      newPostText: "It kamasutra",
      sayPostAdded: " ",
    },
    navbar: {
      navObjects: [
        { id: 1, link: "/profile", name: "Profile" },
        { id: 2, link: "/dialogs", name: "Messeges" },
        { id: 3, link: "/news", name: "News" },
        { id: 4, link: "/music", name: "Music" },
        { id: 5, link: "/settings", name: "Settings" },
        { id: 6, link: "/friends", name: "Friends" },
        { id: 7, link: "/users", name: "Users" },
        
      ],
      bestFriends: [
        {
          id: 1,
          nick: "Jackob",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLtAVqGLVXGMf_4Zk76RsrAWK3iMh7xbmxw&usqp=CAU",
        },
        {
          id: 2,
          nick: "Relly",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXiLIwZ4MJ4wim5PJAEv-8pjZR6omqL6qFw&usqp=CAU",
        },
        {
          id: 3,
          nick: "Masaon",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_G3dnP1UUHCINfAEEv0m_LEqnZ9HEWcEFDQ&usqp=CAU",
        },
        {
          id: 4,
          nick: "Madison",
          avatar:
            "https://cs13.pikabu.ru/post_img/big/2020/04/17/11/1587146536174888206.jpg",
        },
        {
          id: 4,
          nick: "Samon",
          avatar:
            "https://i.pinimg.com/originals/14/df/bf/14dfbf0e75988b5daa3aaccddba0eb6d.jpg",
        },
        {
          id: 4,
          nick: "Foler",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJaQjuUgIG_3mVr0hZktNXTlV4fb7rXubqAENYjKuOvR7RQVaXMOCOLzWAeAB-UcozmM&usqp=CAU",
        },
      ],
    },
    messegesPage: {
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
          id: 1,
          message: "Hell  dsadasdadasdaa",
          img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        },
        {
          id: 1,
          message: "Hell  dsadasdadasdaa",
          img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        },
      ],
      mymessegestext: "",
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
    },
    sidebar: {},
  },
  _callSubscriber() {},
  getState() {
    return this._state; 
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messegesPage = messegesReducer(this._state.messegesPage,action);
    this._state.sidebar = sidebarreducer(this._state.sidebar,action);
    this._callSubscriber(this._state);
    
  },
};

export default store;
