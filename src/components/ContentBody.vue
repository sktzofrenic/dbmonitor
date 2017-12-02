<template lang="html">
    <div class="">
        <div class="ui segment content-body">
            <div class="ui grid">
                <div class="six wide column">
                    <table class="ui definition table">
                        <tbody>
                            <tr>
                                <td class="eight wide column">Name</td>
                                <td>DEV-AUS-PGRA-01</td>
                            </tr>
                            <tr>
                                <td>MySQL Version</td>
                                <td>7.2</td>
                            </tr>
                            <tr>
                                <td>High Wait Queries</td>
                                <td>4 Total</td>
                            </tr>
                            <tr>
                                <td>Agent Version</td>
                                <td>1.1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="five wide column">
                    <table class="ui definition table">
                        <tbody>
                            <tr>
                                <td class="eight wide column">CPU</td>
                                <td> <span class="link" @click="toggleModal()">27%</span> </td>
                            </tr>
                            <tr>
                                <td>OS</td>
                                <td>Linux</td>
                            </tr>
                            <tr>
                                <td>Disk I/O</td>
                                <td>213 kBs</td>
                            </tr>
                            <tr>
                                <td>Arch</td>
                                <td>x86_64</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="five wide column">
                    <table class="ui definition table">
                        <tbody>
                            <tr>
                                <td class="eight wide column">Hostname</td>
                                <td>dog.com</td>
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
                    <tr>
                        <td>Select user_id, territory, comp_range, total_sales, avg_margin from sales where...</td>
                        <td>Avg wait time: 4 seconds</td>
                        <td>Total wait time: 40 minutes</td>
                        <td>
                            <button class="ui icon button">
                                <i class="ellipsis vertical icon"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Select report_name, report_type, export_support, total_sales, avg_margin from sales where...</td>
                        <td>Avg wait time: 3 seconds</td>
                        <td>Total wait time: 33 minutes</td>
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
import {mapActions} from 'vuex'

export default {
    methods: {
        ...mapActions([
            'toggleModal'
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
