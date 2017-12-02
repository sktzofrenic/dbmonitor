<template lang="html">
    <div class="">
        <div class="ui medium header">Monitored Databases</div>
        <button class="ui labeled icon button">
            <i class="plus icon"></i>
            Add Database
        </button>
        <div class="ui middle aligned divided list sidebar-list">
            <div class="item" v-for="(database, index) in databases">
                <div class="right floated content">
                    <button class="ui icon button">
                        <i class="ellipsis vertical icon"></i>
                    </button>
                </div>
                <i class="database large icon"></i>
                <div class="content" @click="retrieveDatabase(database.id)">
                    {{ database.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import {Api} from '@/api/api.js'
export default {
    data () {
        return {
            databases: [],
            api: new Api()
        }
    },
    methods: {
        listDatabases () {
            var vm = this
            this.api.get(vm, 'databases')
        },
        retrieveDatabase (id) {
            var vm = this
            this.api.get(vm, 'database', id)
        },
        ...mapActions([
            'setActiveDatabase'
        ])
    },
    mounted () {
        this.listDatabases()
    }
}
</script>

<style lang="css" scoped>
.sidebar-list {
    padding: 20px;
}
.item {
    cursor: pointer;
}
</style>
