<template>
    <HeaderComponent />
    <h1>Hello {{ name }}, Welcome to the Home</h1>

    <table border="1" align="center">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td>
            <td>
                <router-link :to="'/update-restaurant/' + item.id">Edit</router-link>
                <button v-on:click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';
import HeaderComponent from './HeaderComponent.vue';
export default {
    name: 'HomeComponent',
    components: {
        HeaderComponent
    },
    data() {
        return {
            name: '',
            restaurants: [],
        }
    },
    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete(`http://localhost:3000/restaurants/${id}`);
            if (result.status == 200) {
                this.loadRestaurants();
            }
        },
        async loadRestaurants() {
            let user = localStorage.getItem('user-info');
            if (!user) {
                this.$router.push({ 'name': 'SignUp' });
            } else {
                this.name = JSON.parse(user).name;
                let result = await axios.get('http://localhost:3000/restaurants');
                this.restaurants = result.data;
            }
        }
    },
    mounted() {
        this.loadRestaurants();
    }
}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
</style>