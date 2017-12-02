<template lang="html">
    <div class="">
        <div class="ui segment content-body">
            <div class="ui grid">
                <div class="six wide column">
                    <table class="ui definition table">
                        <tbody>
                            <tr>
                                <td class="eight wide column">Name</td>
                                <td>{{ activeDatabase.name }}</td>
                            </tr>
                            <tr>
                                <td>MySQL Version</td>
                                <td>{{ activeDatabase.databaseVersionString }}</td>
                            </tr>
                            <tr>
                                <td>High Wait Queries</td>
                                <td>
                                    <span class="link" @click="toggleModal()">
                                        4 Total
                                    </span>
                            </td>
                            </tr>
                            <tr>
                                <td>Agent Version</td>
                                <td> <i>undefined</i> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="five wide column">
                    <table class="ui definition table">
                        <tbody>
                            <tr>
                                <td class="eight wide column">CPU</td>
                                <td>
                                    <span v-if="activeDatabase.stats.cpu" class="link" @click="toggleModal()">{{ activeDatabase.stats.cpu }}%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>OS</td>
                                <td>
                                    <span v-if="activeDatabase.agent">{{ activeDatabase.agent.os }}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Disk I/O</td>
                                <td>
                                    <span v-if="activeDatabase.stats.io">{{ activeDatabase.stats.io}} kBs</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Arch</td>
                                <td>{{ activeDatabase.agent.arch }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="five wide column">
                    <table class="ui definition table">
                        <tbody>
                            <tr>
                                <td class="eight wide column">Hostname</td>
                                <td>{{ activeDatabase.host }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h3 class="ui dividing header">
                Top SQL Queries
                <div class="sub header">
                    <div class="ui search">
                        <div class="ui icon input search-box">
                            <input class="prompt search-box-2" type="text" placeholder="Search...">
                            <i class="search icon"></i>
                        </div>
                        <div class="results"></div>
                    </div>
                </div>
            </h3>
            <table class="ui striped table">
                <thead>
                    <tr>
                        <th>Query</th>
                        <th>Avg Time</th>
                        <th>Total Time</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(q, index) in activeDatabase.topQueries">
                        <td>{{ q.text.slice(0, 50) }}...</td>
                        <td class="link" @click="toggleModal()">Avg wait time: {{ q.wait }} seconds</td>
                        <td>Total wait time: {{ (q.wait * q.execs / 60).toFixed(1)}} min</td>
                        <td>
                            <button class="ui icon button">
                                <i class="ellipsis vertical icon"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    methods: {
        ...mapActions([
            'toggleModal'
        ])
    },
    computed: {
        ...mapGetters([
            'activeDatabase'
        ])
    }
}
</script>

<style lang="css" scoped>
.link {
    cursor: pointer;
    color: blue;
}
.content-body {
    margin-top: 10px !important;
}
.header {
    text-align: left;
}
.search-box {
    float: right !important;
    padding: 5px !important;
    margin-top: 15px !important;
    margin-bottom: 8px !important;
    padding-left: 15px !important;
}
.search-box-2 {
    padding: 5px !important;
    padding-left: 15px !important;
}
</style>
