<template>
    <div class="main">
        <div class="sidebar">
            <SideBarComponent />
        </div>
        <div class="content-right">
            <div class="navbar">
                <NavBarComponent />
            </div>
            <div class="pages">
                <slot name="slot-pages"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'
import SideBarComponent from './components/SideBarComponent.vue'

export default {
    name: 'DashboardComponent',
    components: {
        SideBarComponent,
        NavBarComponent
    }
}
</script>

<style lang="scss" src="./styles.scss" scoped />