<template>
    <nav class="navbar navbar-default">
        <div class="navbar-header">
            <router-link to="/" class="navbar-brand"> The Ultimate Startup Battle Ground</router-link> 
        </div>
        <ul class="nav navbar-nav navbar-right">
            <li>
                <button @click="handleLogout()" class="btn btn-danger log">Log out</button>
                <button @click="handleLogin()" class="btn btn-info log">Log in</button>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { isLoggedIn, login, logout } from '../../utils/auth';

    export default {
        name: 'app-nav',
        methods: {
            handleLogin() {
                login()
            },
            hangleLogout() {
                logout()
            },
            isLoggedIn() {
                return isLoggedIn();
            }
        }
    }
</script>

<style scoped>
    .navbar-right { 
        margin-right: 0px !important
    }

    .log {
        margin: 5px 10px 0 0;
    }
</style>