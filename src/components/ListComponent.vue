<template>
    <div class="lists">
        <div class="top">
            <p><strong>{{ description }}</strong> <span class="badge text-bg-info">{{ data.length }}</span></p>
        </div>
        <div class="content">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{{ columns[0] }}</th>
                        <th scope="col">{{ columns[1] }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in data" :key="index">
                        <th scope="row"><p class="users">{{ index + 1 }}</p></th>
                        <td><p class="users">{{ (description == 'Clientes') ? user.name : user.produto }}</p></td>
                        <td><p class="users">{{ (description == 'Clientes') ? user.email : user.valor }}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListComponent',
    props: {
        data: Array,
        description: String,
        columns: [],
    }
}
</script>

<style lang="scss" scoped>
.lists {
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #fff;

    .users{
        font-size: 15px;
    }
}
</style>