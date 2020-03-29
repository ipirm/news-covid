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
                        <div class="login-tabs-nav">
                            <a
                                    href="#"
                                    v-for="item in loginTabs"
                                    :key="item.id"
                                    @click.prevent="changeTabs(item)"
                                    :class="['login-tabs-item', item.to === $route.query.type ? 'active-tab' : '']"
                                    :style="$route.query.type === 'specialist' ? 'border-radius: 10px 0 0 0;' : 'border-radius: 0 10px 0 0;'"
                            >
                                {{ item.text}}
                            </a>
                        </div>
                        <div class="login-tabs-body" v-if="this.$route.query.type === 'specialist'">
                            <form @submit.prevent="registerUser" ref="registrationForm">
                                <input type="text" placeholder="Фамилия" v-model="userForm.surname" required>
                                <div class="d-flex">
                                    <input type="text" placeholder="Имя" style="margin-right: 5px"
                                           v-model="userForm.name" required>
                                    <input type="text" placeholder="Отчество" v-model="userForm.patronymic" required>
                                </div>
                                <input type="text" placeholder="Электроная почта" v-model="userForm.email" required>
                                <input type="password" placeholder="Пароль" v-model="userForm.password" required>
                                <input type="text" placeholder="Мобильный номер" v-model="userForm.number" required>
                                <div class="form-group">
                                    <input type="checkbox" id="policy" required>
                                    <label for="policy"><span>Принимаю условия политикиконфеденциальности</span></label>
                                </div>
                                <div class="login-tabs-footer">
                                    <button type="submit" class="login-tabs-btn">
                                        <span>Начать регистрацию</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="login-tabs-body" v-if="this.$route.query.type === 'company'">
                            <form @submit.prevent="registerUser" ref="registrationForm">
                                <div class="d-flex">
                                    <input type="text" placeholder="Название Компании"
                                           v-model="userForm.name" required>
                                </div>
                                <input type="text" placeholder="Электроная почта" v-model="userForm.email" required>
                                <input type="password" placeholder="Пароль" v-model="userForm.password" required>
                                <input type="text" placeholder="Мобильный номер" v-model="userForm.number" required>
                                <div class="form-group">
                                    <input type="checkbox" id="policy2" required>
                                    <label for="policy2"><span>Принимаю условия политикиконфеденциальности</span></label>
                                </div>
                                <div class="login-tabs-footer">
                                    <button type="submit" class="login-tabs-btn">
                                        <span>Начать регистрацию</span>
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
        created() {
            this.$router.push({query: {type: 'specialist'}});
        },
        data() {
            return {
                userForm: {
                    email: '',
                    password: '',
                    name: '',
                    surname: '',
                    number: '',
                    patronymic: '',
                    roles: ''
                },
                loginTabs: [
                    {
                        id: 1,
                        text: 'Частный специалист',
                        to: 'specialist'
                    },
                    {
                        id: 2,
                        text: 'Компания',
                        to: 'company'
                    }
                ]
            }
        },
        methods: {
            async registerUser() {
                this.userForm.roles = this.$route.query.type;
                await this.$axios.post('register', this.userForm);
                this.$auth.login({
                    data: {
                        email: this.userForm.email,
                        password: this.userForm.password
                    }
                }).then(() => this.$router.push(this.localePath('/')));
            },
            changeTabs(item) {
                item.to === 'specialist' ? this.$router.push({query: {type: item.to}}) : this.$router.push({query: {type: item.to}});
            },
        }
    }
</script>


