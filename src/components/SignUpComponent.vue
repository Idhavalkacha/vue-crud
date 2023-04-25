<template>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter a Name">
        <input type="email" v-model="email" placeholder="Enter a Email">
        <input type="password" v-model="password" placeholder="Enter a Password">
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/log-in">Log In</router-link>
        </p>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUpComponent',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password,
            });
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
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