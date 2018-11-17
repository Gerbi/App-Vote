<template>
    <form action="">
        <div class="form-group">
            <p>You have to correct these following error</p>
            <ul>
                <li class="text-danger">Hola</li>
            </ul>
        </div>
        <div class="form-group col-5">
            <label for="name">Name</label>
            <input class="form-control" id="name" v-model="name" type="text" name="name"/>
        </div>
        <div class="form-group col-5">
            <label for="age">Age</label>
            <input class="form-control" id="age" v-model="age" type="number" name="age" min="0"/>
        </div>
        <div class="form-group col-5">
            <label for="tickets">Tickets </label>
            <input class="form-control" id="tickets" v-model="tickets" type="number" name="tickets" min="0"/>
        </div>
        <div class="form-group col-5">
            <label for="movie">Select Movie</label>
            <select id="movie" v-model="movie" name="movie" class="form-control">
                <option>Star Wars</option>
                <option>Vanilla Sky</option>
                <option>Atomic Blonde</option>
            </select>
        </div>
        <div class="form-group col-5">
            <input class="btn btn-primary" type="submit" value="Submit"/>
        </div>
    </form>

</template>

<script>
    export default {
        name: "FormValidations",
        data(){
            return {
                errors:[],
                name: null,
                age: null,
                movie: null,
                tickets: null
            }
        },
        methods:{
            checkForm: function (e) {

                //Agregar validacion para atributos requeridos

                //si aqui no hay error entonces retornara verdadero
                
            }
        }
    }
</script>

