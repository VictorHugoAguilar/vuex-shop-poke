import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
//Opc 1 import
//import ShoppingCart from '@/services/ShoppingCart.js'
//Opc 2 import
import * as shoppingCart from "@/store/modules/shoppingCart.js";
//Tips
import createPersistedState from "vuex-persistedstate";
const persistent = createPersistedState({
  //paths: ['shoppingCart'] //todo el carrito persist
  //paths: ['shoppingCart.cartStatus'] //solo cartStatus persist
  paths: ["shoppingCart.cartItems"], //solo cartItems persist
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shoppingCart,
  },
  plugins: [persistent],
  state: {
    productList: [
      {
        id: 1,
        name: "Charizard",
        type: "Fire",
        color: "red",
        ability: {
          name: "Llama firme",
          description:
            "Los ataques de este Pokemon hacen 30 puntos de dano mas al Pokémon activo de tu rival.",
        },
        img: "./images/charizard.png",
        prices: {
          mxn: 500.0,
          usd: 25.0,
        },
        rate: 4,
      },
      {
        id: 2,
        name: "Squirtle",
        type: "Water",
        color: "blue",
        ability: {
          name: "Escudo Caparazon",
          description:
            "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokemon por ataques.",
        },
        img: "./images/squirtle.png",
        prices: {
          mxn: 450.0,
          usd: 22.5,
        },
        rate: 3,
      },
      {
        id: 3,
        name: "Pikachu",
        type: "Electric",
        color: "yellow",
        ability: {
          name: "Escudo Caparazon",
          description:
            "Este ataque hace 50 ptos de daño por cada carta de Energía que hayas descartado.",
        },
        img: "./images/pikachu.png",
        prices: {
          mxn: 950.0,
          usd: 45.0,
        },
        rate: 4.5,
      },
      {
        id: 4,
        name: "Mewtwo",
        type: "Psychic",
        color: "purple",
        ability: {
          name: "Proyectil Estallido",
          description:
            "Este ataque hace 30 ptos de daño por cada carta de Energía unida a este Pokemon.",
        },
        img: "./images/mewtwo.png",
        prices: {
          mxn: 5000.0,
          usd: 250.0,
        },
        rate: 5,
      },
      {
        id: 5,
        name: "Bulbasaur",
        type: "Grass",
        color: "green",
        ability: {
          name: "Hiedra adormidera",
          description: "El pokémon defensor pasa a estar dormido.",
        },
        img: "./images/bulbasaur.png",
        prices: {
          mxn: 300.0,
          usd: 15.0,
        },
        rate: 1,
      },
      {
        id: 6,
        name: "Jigglypuff",
        type: "Fairy",
        color: "pink",
        ability: {
          name: "Melodía curativa",
          description: "Cura 10 puntos de daño a cada uno de tus Pokémon.",
        },
        img: "./images/jigglypuff.png",
        prices: {
          mxn: 390.0,
          usd: 14.0,
        },
        rate: 3,
      },
    ],
    isLoading: false,
    // productList: [],
    alert: null,
  },
  mutations: {
    SET_ALERT(state, alert) {
      state.alert = alert;
    },
    UNSET_ALERT(state) {
      state.alert = null;
    },
    SET_ITEMS(state, items) {
      state.productList = items;
    },
  },
  actions: {
    addAlert({ commit }, alert) {
      commit("SET_ALERT", alert);
    },
    removeAlert({ commit }) {
      commit("UNSET_ALERT");
    },
    async getProductList({ commit }) {
      // const res = await axios.get("http://localhost:3000/items");
      // if (res.status == 200) commit("SET_ITEMS", res.data);
    },
  },
  getters: {
    bestItems: (state) => {
      return state.productList.filter((item) => item.rate == 5);
    },
    getItemsByRate: (state) => (rate) => {
      return state.productList.filter((item) => item.rate == rate);
    },
  },
});
