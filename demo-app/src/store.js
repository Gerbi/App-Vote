import { Seed } from './seed.js'
export const store = {
    state: {
        Seed
    },
    setActiveCol(colId){
        //hacer la columna activa estableciendo la propiedad a "true"
        this.state.Seed.map(
            col => (col.id === colId ? (col.active = true) : (col.active = false))
        );
        //las otras columnas seran inactivas
    },
    getActiveColumn(){
        return this.state.Seed.find(col => col.active ===true)
    },
     addTask(taskTitle){
         const tasks = this.getActiveColumn().tasks;
         tasks.push({id: tasks.length + 1, title: taskTitle, edit: false});
     }

}