<template>
    <HeaderComponent />
    <h1>Hello, Welcome to the Update Restaurant</h1>
    <form class="add-restaurant">
        <input type="text" v-model="restaurant.name" placeholder="Enter Name" name="name">
        <input type="text" v-model="restaurant.address" placeholder="Enter Address" name="address">
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact" name="contact">
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios';
import HeaderComponent from './HeaderComponent.vue';
export default {
    name: 'UpdateRestaurant',
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
        async updateRestaurant() {
            let result = await axios.put(`http://localhost:3000/restaurants/${this.$route.params.id}`, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if (result.status == 200) {
                this.$router.push({ 'name': 'Home' });
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ 'name': 'SignUp' });
        }

        let result = await axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}`);
        this.restaurant = result.data;
    }
}
</script>

<style></style>