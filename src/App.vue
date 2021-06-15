<template>

  <h1>ToDo App</h1>
  <form @submit.prevent="newItem()">
    <label class="newToDo">New ToDo </label>
    <Editor v-model="newTodo" placeholder="What's on your mind bub?" />
    <button class="addNote">Add ToDo</button>
  </form>
  <h2>ToDo List</h2>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <Editor v-model="todo.content"></Editor>
      <button class="rem-button" @click="removeItem(index)">Remove</button>
    </li>
  </ul>
  <h4 v-if="todos.length === 0">Empty list.</h4>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const newTodo = ref("");
    const defaultData = [
      {
        done: false,
        content: "Write a blog post",
      },
    ];
    const todoList = JSON.parse(localStorage.getItem("todos")) || defaultData;
    const todos = ref(todoList);
    function newItem() {
      if (newTodo.value) {
        todos.value.push({
          done: false,
          content: newTodo.value,
        });
        newTodo.value = "";
      }
      storeItem();
    }
    function crossOut(todo) {
      todo.done = !todo.done;
      storeItem();
    }
    function removeItem(index) {
      todos.value.splice(index, 1);
      storeItem();
    }
    function storeItem() {
      const storageData = JSON.stringify(todos.value);
      localStorage.setItem("todos", storageData);
    }
    return {
      todos,
      newTodo,
      newItem,
      crossOut,
      removeItem,
      storeItem,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/mytemplate.css";
$border: 2px solid
  rgba(
    $color: white,
    $alpha: 0.35,
  );
$customsize1: 6px;
$customsize2: 12px;
$customsize3: 18px;
$customsize4: 24px;
$customsize5: 48px;
$bgCol: #696969;
$textColor: white;
$Col1: #86ec56;
$otherTextCol: white;
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $bgCol;
  color: $textColor;
  #app {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    h1 {
      font-weight: bold;
      font-size: 28px;
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      label {
        font-size: 14px;
        font-weight: bold;
      }
      input {
        background-color: transparent;
        border: $border;
        color: inherit;
      }
    }
    button {
      cursor: pointer;
      background-color: $Col1;
      border: 1px solid $Col1;
      color: $otherTextCol;
      font-weight: bold;
      outline: none;
      border-radius: $customsize1;
    }
    h2 {
      font-size: 22px;
      border-bottom: $border;
      padding-bottom: $customsize1;
    }
    ul {
      padding: 10px;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: $border;
        padding: $customsize2 $customsize4;
        border-radius: $customsize1;
        margin-bottom: $customsize2;
        span {
          cursor: pointer;
        }
        .done {
          text-decoration: line-through;
        }
        button {
          font-size: $customsize2;
          padding: $customsize1;
        }
      }
    }
    h4 {
      text-align: center;
      opacity: 0.5;
      margin: 0;
    }
  }
}
</style>
