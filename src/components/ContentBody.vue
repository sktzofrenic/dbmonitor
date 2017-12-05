<template lang="html">
    <div class="">
        <div class="ui segment content-body">
            <div class="ui grid">
                <div class="five wide column">
                    <table class="ui definition table">
                        <tbody>
                            <tr>
                                <td class="seven wide column">DB Host IP</td>
                                <td>{{ activeDatabase.ip }}</td>
                            </tr>
                            <tr>
                                <td>DB Hostname</td>
                                <td>{{ activeDatabase.name }}</td>
                            </tr>
                            <tr>
                                <td>DB Type</td>
                                <td>{{ activeDatabase.databaseTypeString }}</td>
                            </tr>
                            <tr>
                                <td>DB Version</td>
                                <td>{{ activeDatabase.databaseVersionString }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="six wide column">
                    <table class="ui definition table">
                        <tbody>
                            <tr>
                                <td class="nine wide column">Agent Hostname</td>
                                <td>
                                    <span v-if="activeDatabase.agent">{{ activeDatabase.agent.hostname }}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Agent Host OS</td>
                                <td>
                                    <span v-if="activeDatabase.agent">{{ activeDatabase.agent.os }}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Agent Host Arch</td>
                                <td>
                                    <span v-if="activeDatabase.agent">{{ activeDatabase.agent.arch }}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>DBA Plug-in Version</td>
                                <td>11.1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="five wide column">
                    <table class="ui definition table">
                        <tbody>
                            <tr>
                                <td class="ten wide column">High Wait Queries</td>
                                <td>
                                    <span class="link" @click="toggleModal({'title': 'Queries in Wait Alert Last 10 Minutes', 'chartType': 'bar'})">{{ activeDatabase.highWaitQueries.length }}</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="eight wide column">DB CPU Usage</td>
                                <td>
                                    <span v-if="activeDatabase.stats.cpu" class="link" @click="toggleModal({'title': '% CPU used by DB', 'chartType': 'line'})">{{ activeDatabase.stats.cpu }}%</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="eight wide column">DB Memory Usage</td>
                                <td>
                                    <span v-if="activeDatabase.stats.cpu" class="link" @click="toggleModal({'title': '% Memory Usage', 'chartType': 'line'})">{{ activeDatabase.stats.memory }}%</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="eight wide column">DB I/O Usage</td>
                                <td>
                                    <span v-if="activeDatabase.stats.io" class="link" @click="toggleModal({'title': 'Disk I/O in kBs', 'chartType': 'line'})">{{ activeDatabase.stats.io }} kBs</span>
                                </td>
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
            <table class="ui striped compact table">
                <thead>
                    <tr>
                        <th>Query</th>
                        <th title="Average Wait per Execution over last 2 hours">Avg Time</th>
                        <th>Total Time</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(q, index) in activeDatabase.topQueries">
                        <td @mouseleave="hidePopup(index)"
                            @mouseover="showPopup(index)"
                            class="sql link"
                            @click="displayQueryGraph(index)">
                            <div @mouseleave="hidePopup(index)" class="data-container" >
                                <div @mouseleave="hidePopup(index)" class="ui fluid popup top left transition" :class="{'visible': popupStatus[index]}">
                                    <div  class="ui four column divided center aligned grid">
                                        <p><pre class="pre">{{q.text}}</pre></p>
                                    </div>
                                </div>
                            </div>
                            <span v-if="q.text">{{ q.text.slice(0, 50) }}...</span>
                        </td>
                        <td>Avg wait time: {{ (q.wait / q.execs).toFixed(1) }} seconds</td>
                        <td>Total wait time: {{ (q.wait).toFixed(1) }} seconds</td>
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
import {Api} from '@/api/api.js'

var api = new Api()

export default {
    data () {
        return {
            popupStatus: {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false
            }
        }
    },
    methods: {
        ...mapActions([
            'toggleModal'
        ]),
        showPopup (index) {
            this.popupStatus[index] = true
        },
        hidePopup (index) {
            this.popupStatus[index] = false
        },
        displayQueryGraph (index) {
            var vm = this
            api.get(function (data) {
                vm.activeDatabase.sqlBreakdownGraph = data
                vm.toggleModal({
                    'title': 'Wait by Type',
                    'chartType': 'bar'
                })
            }, 'sqlBreakdownGraph', vm.activeDatabase.id, {'hash': vm.activeDatabase.topQueries[index].hash})
        }
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
.sql {
    cursor: pointer;
}

.data-container {
    position: relative;
}
.popup {
    position: absolute;
    top: -100px;
    left: 0px;
    height: 100px;
    width: 400px;
    overflow-y: scroll;
}
.pre {
    width: 100px;
}
</style>
