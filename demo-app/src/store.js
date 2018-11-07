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
    }

}