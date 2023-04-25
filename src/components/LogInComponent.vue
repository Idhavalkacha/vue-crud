<template>
    <h1>Login Page</h1>
    <div class="login">
        <input type="email" v-model="email" placeholder="Enter a Email">
        <input type="password" v-model="password" placeholder="Enter a Password">
        <button v-on:click="logIn">Log In</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LogInComponent',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async logIn() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({ 'name': 'Home' });
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ 'name': 'Home' });
        }
    }
}

</script>

<style></style>