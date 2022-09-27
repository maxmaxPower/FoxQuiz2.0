import profileReducer, { addPost, deletePost } from "./profile-reducer";
let state = {
  posts: [
    { id: 1, messege: "Hi,how are you?", likesCount: 12 },
    { id: 2, messege: "Its my first post", likesCount: 11 },
    { id: 3, messege: "How are you", likesCount: 22 },
    { id: 4, messege: "Jsx cool", likesCount: 111 },
    { id: 5, messege: "REACT REACT", likesCount: 11111 },
    { id: 6, messege: "Mally", likesCount: 44 },
  ]
};

it('NEW POST SHOLD BE ADDED',() => {
  // 1. test data
  let action = addPost('GG GAME')
  // 2. action
  let newState = profileReducer(state,action)
  // 3. expectation
  expect(newState.posts.length).toBe(7);
})
it('text of messege should be correct',() => {
  // 1. test data
  let action = addPost('GG GAME')
  // 2. action
  let newState = profileReducer(state,action)
  // 3. expectation
  expect(newState.posts[6].messege).toBe('GG GAME');
})
it('after deliting length of messege shoud be decrement',() => {
  // 1. test data
  let action = deletePost(1 );
  // 2. action
  let newState = profileReducer(state,action)
  // 3. expectation
  expect(newState.posts.length).toBe(5);
})


