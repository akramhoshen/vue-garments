<script setup>
import { ref, onMounted,reactive } from 'vue';
import Http from '@/utils/http';
import { Cookie } from '@/utils/cookie.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = reactive({
  email:'',
  password:''
});

const login = async () => {
  try {
    let res = await Http.post('auth/login', form);
    if (res.data.access_token) {

      const existingToken = Cookie.getCookie('token');

      if (existingToken) {
        // router.push({ path: 'dashboard' })
        window.location.href = "/dashboard";
        return;
      }

      Cookie.setCookie("token", res.data.access_token, 1);
      // router.push({ path: 'dashboard' })
      window.location.href = "/dashboard";
    } else {
      console.error('Login failed: Invalid credentials or missing access_token');
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
}

</script>

<template>
    <section class="login-page">
        <div class="container h-100">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-12">
                    <div class="card text-start m-auto">
                        <form @submit.prevent="login()">
                            <div class="card-header">
                                <h4 class="card-title">Login</h4>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" name="email" id="email" v-model="form.email">
                                </div>
                                <div class="form-group">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" v-model="form.password">
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.login-page{
    height: 100vh;
    background-color: #4542ab;
}
.login-page .card{
    width: 35%;
}
.login-page .card-title {
    margin: 0px !important;
}
</style>
