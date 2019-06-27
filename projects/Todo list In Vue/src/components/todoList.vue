<template>
    <div class="container">
        <ul>
            <li
            class="list"
             v-for="todo in todos" 
             :key='todo.id'
            >
           
            <div class="ui checkbox">
            <input type="checkbox" name="example" v-model="todo.completed" @change="filterTodos">
            <label :class="{completed: todo.completed}">{{todo.title}}</label>
            </div>
            <button class="ui red button" @click="delTodo(todo.id)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    props:{
        todos: Array
    },
    methods:{
        delTodo(id){
            this.$emit('delete-todo', id)
        },
        filterTodos(){
            setTimeout(this.$parent.filterTodos,200)
        }
    }
}
</script>

<style lang="scss" scoped>
  ul{
    list-style: none;
    padding: 0 !important;
  }
  .completed{
      text-decoration: line-through;
  }
  button.ui.red.button{
      display: block;
      margin-top: 10px !important;
  }
  .list{
      width: max-content;
      margin: 5px auto;
      margin-top: 15px;
  }
</style>


