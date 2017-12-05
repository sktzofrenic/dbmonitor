<template lang="html">
    <div class="">
        <div class="ui medium header">Monitored Databases</div>
        <button class="ui labeled icon button" @click="toggleAddModal()">
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
        <div v-if="showAddModal" class="ui modal active">
            <i class="close icon"></i>
            <div class="header">
                Add new Database
            </div>
            <div class="content">
                <form class="ui form"  v-on:submit.prevent>
                    <h4 class="ui dividing header">Credentials</h4>
                    <div class="field">
                        <label>Database Type</label>
                        <div class="sixteen field">
                            <select class="ui fluid dropdown" v-model="newDatabase.dbType">
                                <option value="MySQL">MySQL</option>
                                <option value="PostgreSQL">PostgreSQL</option>
                                <option value="Oracle">Oracle</option>
                                <option value="Microsoft SQL Server">Microsoft SQL Server</option>
                            </select>
                        </div>
                    </div>
                    <div class="field">
                        <label>Provider IP or Hostname</label>
                        <div class="sixteen field">
                            <input type="text" v-model="newDatabase.providerHostname">
                        </div>
                    </div>
                    <div class="field">
                        <label>Username</label>
                        <div class="sixteen field">
                            <input type="text" v-model="newDatabase.username">
                        </div>
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <div class="sixteen field">
                            <input type="password" v-model="newDatabase.password">
                        </div>
                    </div>
                </form>
            </div>
            <div class="actions">
                <div class="ui black deny button" @click="toggleAddModal()">
                    Close
                </div>
                <div class="ui green approve button" @click="addDatabase()">
                    Add New
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
            api: new Api(),
            showAddModal: false,
            newDatabase: {
                dbType: '',
                providerHostname: '',
                username: '',
                password: ''
            }
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
        ]),
        toggleAddModal () {
            this.showAddModal = !this.showAddModal
        },
        addDatabase () {
            this.showAddModal = !this.showAddModal
            this.databases.push({id: 99, name: this.newDatabase.providerHostname})
            this.newDatabase = {
                dbType: '',
                providerHostname: '',
                username: '',
                password: ''
            }
        }
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
.modal {
    margin-top: -300px;
}
</style>
