import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent';
import SignUpComponent from './components/SignUpComponent';
import LogInComponent from './components/LogInComponent';
import AddRestaurant from './components/AddRestaurant';
import UpdateRestaurant from    './components/UpdateRestaurant';

const routes = [
    {
        name: 'Home',
        component: HomeComponent,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUpComponent,
        path: '/sign-up'
    },
    {
        name: 'LogIn',
        component: LogInComponent,
        path: '/log-in'
    },
    {
        name: 'AddRestaurant',
        component: AddRestaurant,
        path:'/add-restaurant',
    },
    {
        name: 'UpdateRestaurant',
        component: UpdateRestaurant,
        path:'/update-restaurant/:id',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

