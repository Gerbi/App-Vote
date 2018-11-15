<template>
    <div class="card" style="border: none">
        <form @submit="submit">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email" />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  v-model="password">
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <textarea class="form-control" id="address" v-model="address">
            </textarea>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="checked">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>

            <!-- Multiple checkboxes -->

            <div class="form-group">
                <input type="checkbox"  id="exampleCheck2" value="Frontend" v-model="conferenceNames" />
                <label class="form-check-label" for="exampleCheck2">Frontend conference</label>
                <input type="checkbox"  id="exampleCheck3" value="Backend" v-model="conferenceNames"/>
                <label class="form-check-label" for="exampleCheck2">Backend conference</label>
            </div>

            <!-- Radio Button -->
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"  checked  v-model="gender" value="Male">
                <label class="form-check-label" for="exampleRadios1">
                    Male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" v-model="gender" value="Female"/>
                <label class="form-check-label" for="exampleRadios2">
                    Female
                </label>
            </div>
            <!-- Select Boxes -->
            <div class="form-group">
                <label for="inputState">Location</label>
                <select class="form-control" v-model="locations">
                    <option selected>Choose...</option>
                    <option>UK</option>
                    <option>USA</option>
                    <option>Canada</option>
                </select>
            </div>
            <div class="form-group">
                <label for="inputState">Sessions</label>
                <select class="form-control" multiple v-model="sessions">
                    <option>S1</option>
                    <option>S2</option>
                    <option>S3</option>
                </select>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <hr/>
    </div>
</template>
<script>
    export default {
        name: 'UserForm',
        data(){
            return {
                email: '',
                password: '',
                address : '',
                checked: false,
                conferenceNames: [],
                gender: '',
                locations: '',
                sessions: []
            }
        },
        methods:{
            submit(e){
                e.preventDefault()
            }
        }
    }
</script>
