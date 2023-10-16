import { createStore } from "vuex";

export default createStore({
  // Acesso a todo componente da aplicação
  state: {
    user: {
      firstName: "John",
      lastName: "Snow",
      email: "johnSnow@gmail.com",
    },
    products: [
      {
        name: "Produto 1",
        price: 100,
      },
      {
        name: "Produto 2",
        price: 200,
      },
      {
        name: "Produto 3",
        price: 250,
      }
    ],
  },
  // Altera as variáveis do state
  mutations: {
    storedUser(state, newUser) {
      console.log(state.user);
      state.user = newUser;
      console.log(state.user);
    },
  },
  actions: {},
  getters: {},
});
