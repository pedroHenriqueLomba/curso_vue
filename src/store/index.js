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
    cart: []
  },
  // Altera as variáveis do state
  mutations: {
    addProduct(state, product) {
      state.cart.push(product);
    }
  },
  // Funciona como as propriedades computadas
  getters: {
      calculaTotalProdutos(state) {
        let total = 0;
        state.cart.forEach(product => {
          total += product.price;
        });
        return total;
      }
  },
  // Funciona como a mutation, no entanto pode funcionar de maneira assíncrona
  actions: {
    storeProduct(/* context, product */) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          console.log('aqui');
        }, 1000);
      });
    }
  }
});
