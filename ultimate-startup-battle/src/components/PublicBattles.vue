<template>
    <div>
        <app-nav></app-nav>
        <h3 class="text-center">Daily Standup Battles</h3>
        <hr/>

        <div class="col-sm-4" v-for="(battle, index) in publicBattles" :key="index">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">{{ battle.name }}</h3>
                </div>
            </div>
            <div class="panel-body">
                <p><span class="badge alert-info"> Sponsor: </span> {{ battle.sponsor }} </p>
                <p><span class="badge alert-danger"> SeedFund: </span><strong> ${{ battle.seedFund }} </strong></p>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="jumbotron text-center">
                <h2>View Private Startup Battles</h2>
                <router-link class="btn btn-lg btn-success" to="/private-battles">Private Startup Battles</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import AppNav from './AppNav'
    // import { isLoggedIn } from '../../utils/auth'
    import { getPublicStartupBattles } from '../../utils/battles-api'

    export default {
        name: 'publicBattles',
        components: {
            AppNav
        },
        data() {
            return {
                publicBattles: ''
            };
        },
        methods: {
            isLoggedIn() {
                return isLoggedIn()
            },
            getPublicStartupBattles() {
                getPublicStartupBattles().then(battles => {
                    this.publicBattles = battles;
                });
            },
        },
        mounted() {
            this.getPublicStartupBattles();
        }
    }
</script>

<style scoped>

</style>