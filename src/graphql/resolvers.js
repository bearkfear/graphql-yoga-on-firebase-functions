const db = require("firebase-admin").firestore();

module.exports = {

  Query: {
    async todos() {
      try {

        const res = await db.collection("todos").limit(20).get();
        const todos = [];
        res.forEach(doc => {
          todos.push({
            id: doc.id,
            body: doc.data().body,
          })
        })

        return todos;
      } catch (e) {
        throw e;
      }
    },
    async todo(_, { id }) {
      try {
        const res = await db.collection("todos").doc(String(id)).get();
        const todos = {
          id: res.id,
          body: res.data().body
        }
        return todos;
      } catch (e) {
        throw e;
      }
    }
  },

  Mutation: {
    async createTodo(_, { body }) {
      try {
        if (body === "") {
          throw new Error("Precisa ter algum corpo");
        }

        const res = await db.collection("todos").add({
          body,
        })

        const id = res.id;

        return {
          id,
          body,
        }

      } catch (e) {
        throw new Error("Alguma coisa errada!")
      }
    }
  }
} 