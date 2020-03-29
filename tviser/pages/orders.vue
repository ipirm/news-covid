<template>
    <div class="container">
        <div class="card mt-4" v-if="loggedIn">
            <div class="card-header">
                <input type="text" placeholder="Header" v-model="title">
            </div>
            <div class="card-body">
                <p class="card-text"><input type="text" placeholder="body" v-model="subtitle"></p>
                <a href="#" class="btn btn-primary" @click.prevent="addPost">Create</a>
            </div>
        </div>
        <Spinner v-if="loading"/>
        <div class="card mt-4" v-for="item in orders" :key="item.id" v-if="!loading">
            <div class="card-header">
                {{ item.title }}
            </div>
            <div class="card-body">
                <p class="card-text">{{ item.subtitle }}</p>
                <a href="#" class="btn btn-primary" @click.prevent>Go somewhere</a>
                <a href="#" class="btn btn-primary" @click.prevent="removeItem(item.id)"
                   v-if="(loggedIn ? user.id : -1) === item.user_id">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import Spinner from "~/components/global/Spinner";

    export default {
        components: {Spinner},
        created() {
            this.getOrders();


        },
        data() {
            return {
                title: '',
                subtitle: ''
            }
        },
        computed: {
            ...mapState('orders', ['orders']),
            ...mapState('orders', ['loading']),
        },
        methods: {
            ...mapActions('orders', ['getOrders']),
            removeItem(id) {
                this.$store.dispatch('orders/deleteOrder', id);
            },
            addPost() {
                let body = {
                    title: this.title,
                    subtitle: this.subtitle,
                    user_id: this.user.id,
                }
                this.$store.dispatch('orders/addOrder', body)
            }
        }
    }
</script>

<style scoped>

</style>
