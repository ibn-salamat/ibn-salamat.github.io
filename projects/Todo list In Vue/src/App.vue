<template>
  <div id="app">
    <header>
      <h1 class="ui header invert segment">Todo list in VUE</h1>
    </header>
    <add-todo :todos='filteredLists'></add-todo>
    <div id="main-content">
      <select v-model="filterList" @change="filterTodos" id="filter-select"> 
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <todo-list :todos='filteredLists' @delete-todo='deleteTodo'></todo-list>
    <h2 v-if="filteredLists.length == 0">No array</h2>
    </div>

  </div>
</template>

<style lang="scss">

</style>

<script>
import addTodo from './components/addTodo'
import todoList from './components/todoList'

export default {
  data(){
    return{
      filterList: 'all',
      filteredLists: [],
      todos:[]
    }
  },
  methods:{
    saveStorage(){
     localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    deleteTodo(id){
      this.filteredLists.forEach(todo => {
        if(todo.id === id){
          let indexOfTodo = this.filteredLists.indexOf(todo)
          this.filteredLists.splice(indexOfTodo,1)

          this.todos.splice(indexOfTodo,1)
        }
        
      })
    },
      filterTodos(){
      if(this.filterList === 'completed'){
       this.filteredLists = this.todos.filter(todo => {
          return todo.completed === true
        })
      }

      else if(this.filterList === 'not-completed'){
        this.filteredLists = this.todos.filter(todo => {
          return todo.completed === false
        })
      }

      else{
        this.filteredLists = this.todos.filter(todo => {
          return todo
        })
      }
    }
  },
  watch:{
    todos: function(){
      console.log(this.todos)
    }
  },
  created: function(){
    let savedTodos = localStorage.getItem('todos')
    this.todos = JSON.parse(savedTodos)

    this.filterTodos()
  },
  components:{
    addTodo,
    todoList
  }
}
</script>

<style lang="scss">
header{
  padding: 15px 0;

  h1{
    color:white;
    text-align: center;
    border:none !important;
    box-shadow: none !important;
    padding-bottom: 0px !important;
  }

}
div#main-content{
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  text-align:center;

  select#filter-select{
    display: block;
    margin: 0 auto;
    margin-bottom:15px;
    width: 150px;
  }
}

</style>


