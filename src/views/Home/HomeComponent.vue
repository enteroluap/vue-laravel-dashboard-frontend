<template>
    <DashboardComponent>

        <template v-slot:slot-pages>
            <div class="template">
                <header class="title_pages">
                    <p>Início</p>
                </header>

                <div>
                    <div class="row">
                        <div class="col-12 col-md-3">
                            <CardComponent :type="'Clientes'" :percentage="'7%'" :icon="'fa fa-users'" :qtd="clients.length" />
                        </div>

                        <div class="col-12 col-md-3">
                            <CardComponent :type="'Produtos'" :percentage="'12%'" :icon="'fa fa-box'" :qtd="products.length" />
                        </div>

                        <div class="col-12 col-md-3">
                            <CardComponent :type="'Serviços'" :percentage="'13%'" :icon="'fa fa-store'" :qtd="'654'" />
                        </div>

                        <div class="col-12 col-md-3">
                            <CardComponent :type="'Relatórios'" :percentage="'14%'" :icon="'fa fa-chart-bar'" :qtd="'541'" />
                        </div>
                    </div>
                </div>

                <div class="mt-5">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <ListComponent :data="clients" description="Clientes" :columns="['Nome', 'E-mail']"/>
                    </div>
                    <div class="col-12 col-md-6">
                        <ListComponent :data="products" description="Produtos" :columns="['Produto', 'Valor']"/>
                    </div>
                </div>
                </div>

            </div>
        </template>

    </DashboardComponent>
</template>

<script>
import CardComponent from '../../components/CardComponent.vue'
import DashboardComponent from '../Dashboard/DashboardComponent.vue'
import ListComponent from '../../components/ListComponent.vue';
const axios = require('axios');

export default {
    name: 'HomeComponent',
    data() {
        return {
            clients: [],
            products: []
        }
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        async getUsers(){
        // try {
        //     let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        //     this.users = response.data;
        // } catch (error) {
        //     console.log(error);
        // }

        try {
            let response2 = await axios.get('http://localhost:8000/api');
            this.clients = response2.data.clients;
            this.products = response2.data.products;
        } catch (error) {
            console.log(error);
        }
    }
    },
    components: {
        DashboardComponent,
        CardComponent,
        ListComponent,
    }
}
</script>

<style lang="scss" src="./styles.scss" scoped />