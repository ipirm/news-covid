<template>
    <div class="overlay-login">
        <div class="container">
            <div class="row">
                <div class="right-col">
                    <div class="right-col-text">
                        <span>Найди работникав любой сферевсего за пару кликов!</span>
                    </div>
                </div>
                <div class="left-col">
                    <div class="login-tabs">
                        <div class="login-tabs-body">
                            <form @submit.prevent="addUser" ref="registrationForm" name="LoginForm" novalidate>
                                <input name="email" type="text" placeholder="Электроная почта" v-model="userForm.email" required>
                                <input name="password" type="password" placeholder="Пароль" v-model="userForm.password" required>
                                <div class="form-group">
                                    <input name="check_policy" type="checkbox" id="policy2" required>
                                    <label for="policy2"><span>Принимаю условия политикиконфеденциальности</span></label>
                                </div>
                                <div class="login-tabs-footer">
                                    <button type="submit" class="login-tabs-btn">
                                        <span>Войти</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        middleware: 'check',
        data() {
            return {
                userForm: {
                    email: '',
                    password: ''
                },
            }
        },
        methods: {
            async addUser() {
                await this.$auth.login({
                    data: this.userForm
                });
                this.$router.push(this.localePath('/'));
            },
        }
    }
</script>

<style lang="scss" scoped>
    .login-tabs-body{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
