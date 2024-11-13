import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ProjectsList from '../views/ProjectsList.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectsList
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    },
    {
        path: '/old-home',
        redirect: '/'
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
