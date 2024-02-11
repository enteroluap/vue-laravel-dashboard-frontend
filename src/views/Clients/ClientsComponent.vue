<template>
    <DashboardComponent>

        <template v-slot:slot-pages>
            <div class="template">
                <header class="title_pages">
                    <p>Clientes</p>
                </header>

            </div>
        </template>

    </DashboardComponent>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent.vue'

export default {
    name: 'ClientsComponent',
    components: {
        DashboardComponent,
    }

}
</script>

<style lang="scss" src="./styles.scss" scoped />