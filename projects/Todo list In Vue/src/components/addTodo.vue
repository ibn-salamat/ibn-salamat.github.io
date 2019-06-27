<template>
    <div class="container">
    <div class="ui center aligned basic segment">
    <div class="ui left icon action input">

        <input type="text" id="add-input" v-model="newTask" placeholder="example: Learn Vue">
          <div class="ui primary button" @click="addTask(newTask)">
            <i class="add icon"></i>
             Add
        </div>
    </div>
    <div class="ui horizontal divider">
        LIST
    </div>
</div>


    </div>
</template>

<script>
export default {
    props: {
        todos: Array
    },
    data(){
        return{
            newTask: ''
        }
    },
    methods:{
        addTask(newTask){
            if(newTask.trim()){
                
            let myId = this.$parent.todos.length === 0 ? 1 : this.$parent.todos[this.$parent.todos.length - 1].id + 1

            const task = {
                id: myId,
                title: newTask,
                completed: false

            }

            this.$parent.todos.push(task)
            this.$parent.filterTodos()
            this.newTask = ''
            this.$parent.saveStorage()
            }
        }
    }
}
</script>

<style scoped>
input[type=text]#add-input{
    padding-left: 15px !important;
}
.ui.horizontal.divider{
    margin-top: 35px !important;
}
</style>
