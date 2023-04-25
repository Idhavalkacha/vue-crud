<template>
    <HeaderComponent />
    <h1>Hello, Welcome to the Add Restaurant</h1>
    <form class="add-restaurant">
        <input type="text" v-model="restaurant.name" placeholder="Enter Name" name="name">
        <input type="text" v-model="restaurant.address" placeholder="Enter Address" name="address">
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact" name="contact">
        <button type="button" v-on:click="addRestaurant">Add Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios';
import HeaderComponent from './HeaderComponent.vue';
export default {
    name: 'AddRestaurant',
    components: {
        HeaderComponent
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: '',
            }
        }
    },
    methods: {
        async addRestaurant() {
            await axios.post('http://localhost:3000/restaurants', {
                'name': this.restaurant.name,
                'address': this.restaurant.address,
                'contact': this.restaurant.contact
            });
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ 'name': 'SignUp' });
        }
    }
}
</script>

<style></style>