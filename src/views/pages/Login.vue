<script setup>
import { reactive } from 'vue';

const form = reactive({
  email:'',
  password:''
});

const login = async ()=>{
    console.log(form);
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-4 mt-5">
                <form @submit.prevent="login()">
                    <div class="form-group">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" name="email" id="email" v-model="form.email">
                    </div>
                    <div class="form-group">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="form.password">
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
