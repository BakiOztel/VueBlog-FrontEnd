import { createStore } from 'vuex'
import axios from 'axios';

const url = "http://localhost:5000";


export default createStore({
  state: {
    user: {
      token: null,
      id: "",
    },
    todoItem: [],
    blogItem: [],
  },
  getters: {
    getUser: state => state.user,
    getTodo: state => state.todoItem,
    getBlog: state => state.blogItem,
  },
  mutations: {
    setUser(state, payload) {
      state.user.token = payload.token;
      state.user.id = payload.id;
    },
    setTodo(state, payload) {
      state.todoItem = payload.map(x => { return { text: x.text, id: x.id } });
    },
    setBlog(state, payload) {
      state.blogItem = payload;
    },
    addBlog(state, payload) {
      state.blogItem = [...state.blogItem, payload];
    },
    logoutUser(state, _) {
      state.user = { token: null, id: "" };
    }
  },
  actions: {
    async loginUser({ commit }, payload) {
      await axios.post(`${url}/api/Auth/auth`, payload).then(response => {
        commit("setUser", response.data);
      }).catch(err => console.log(err));
    },
    async createUser({ commit }, payload) {
      await axios.post(`${url}/api/User/CreateUser`, payload).then(response => {

      }).catch(err => console.log(err));
    },
    async getTodoItems({ commit, state }) {
      console.log(state.user.token);
      await axios.get(`${url}/api/Todo`,
        { headers: { "Authorization": `Bearer ${state.user.token}` } }
      ).then(response => {
        commit("setTodo", response.data);
      }).catch(err => console.log(err));
    },
    async CreateBlog({ commit, state }, payload) {
      const payload2 = { ...payload, userId: state.user.id }
      console.log(payload2)
      await axios.post(`${url}/api/Workblog/Create`, payload2,
        { headers: { "Authorization": `Bearer ${state.user.token}` } }
      ).then(response => {
        commit("addBlog", response.data);
      }).catch(err => console.log(err));
    },
    async getBlogItems({ commit }) {
      await axios.get(`${url}/api/Workblog/Get`,
      ).then(response => {
        commit("setBlog", response.data);
      }).catch(err => console.log(err));
    }

  },
  modules: {
  }
})
