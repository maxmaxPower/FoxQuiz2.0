// РЕДЮСЕР ЦЕ ЧИСТА ФУНКЦІЯ ЯКА ПРИЙМАЄ В СЕБЕ СТЕЙТ І ЕКШН , ПРИ НЄОБХОДІМОСТІ МІНЯЄ ЙОГО І ВЕРТАЄ ІЗМІНЬОННИЙ СТЕЙТ АБО ЯКШО
//НІЧОГО НЕ ЗМІНИЛОСЬ ВЕРТАЄ СТАРИЙ СТЕЙТ

let initialState = {
  subscriptions: [
          {id:1, name:'VIP',period:'1 Month',price:'30$',color:'slategray',privileges: { asd:'nama'}},
          {id:2,name:'GOLD',privileges:'previously privileges + followers who visited your page',period:'1 Month',price:'50$',color:'gold'},
          {id:3,name:'DIAMOND',privileges:'previously privileges + 1 Year Apple Music',period:'1 Month',price:'80$',color:'aqua'},
          {id:4,name:'DELUX',privileges:'previously privilege + Unlimited trafic Customize your page',period:'1 Month',price:'120$',color:'indigo'}
    ],
  };
  
  const premiumStatusReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_TASK : 
      const subscriptions = state.subscriptions.filter(element => action.id !== element.id );
      return {
        ...state,
        subscriptions
      }
      default: return state;
    }
  };
  
  export const deleteTask = (id) => ({type:DELETE_TASK,id})

  const DELETE_TASK = 'DELETE-TASK'
  

  export default premiumStatusReducer;
  