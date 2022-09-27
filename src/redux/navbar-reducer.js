let initialState = {
  
        navObjects: [
          { id: 1, link: "/profile", name: "Profile" },
          { id: 2, link: "/dialogs", name: "Messeges" },
          { id: 3, link: "/users", name: "Users" },
          { id: 4, link: "/news", name: "News" },
          { id: 5, link: "/premiumStatus", name: "Premium Status" },
          { id: 6, link: "/music", name: "Music" },
          { id: 7, link: "/settings", name: "Settings" },
          { id: 8, link: "/friends", name: "Friends" },
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
            id: 5,
            nick: "Samon",
            avatar:
              "https://i.pinimg.com/originals/14/df/bf/14dfbf0e75988b5daa3aaccddba0eb6d.jpg",
          },
          {
            id: 6,
            nick: "Foler",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJaQjuUgIG_3mVr0hZktNXTlV4fb7rXubqAENYjKuOvR7RQVaXMOCOLzWAeAB-UcozmM&usqp=CAU",
          },
        ],
      };
const navbarreducer = (state = initialState,action) => {

    return(state);
};
export default navbarreducer;