<template lang="html">
    <div v-if="showModal" class="ui modal active">
        <i class="close icon"></i>
        <div class="header">
            {{ modalData.title }}
        </div>
        <div class="content">
            <canvas id="myChart" width="400" height="200px"></canvas>
        </div>
        <div class="actions">
            <div class="ui black deny button" @click="toggleModal({})">
                Close
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Chart from 'chart.js'

export default {
    computed: {
        ...mapGetters([
            'showModal',
            'modalData',
            'activeDatabase'
        ])
    },
    methods: {
        ...mapActions([
            'toggleModal'
        ])
    },
    updated: function () {
        var labels = []
        var data = []
        var label = ''
        if (this.modalData.title === 'Queries in wait alert last 10 minutes') {
            labels = this.activeDatabase.highWaitQueries.map(function (value) {
                return value.text
            })
            data = this.activeDatabase.highWaitQueries.map(function (value) {
                return value.wait
            })
            label = 'Seconds per Query'
        } else if (this.modalData.title === '% CPU used by DB') {
            labels = this.activeDatabase.cpuGraph.map(function (value) {
                return value.date
            })
            data = this.activeDatabase.cpuGraph.map(function (value) {
                return value.value
            })
            label = '%'
        } else if (this.modalData.title === 'Disk I/O in kBs') {
            labels = this.activeDatabase.ioGraph.map(function (value) {
                return value.date
            })
            data = this.activeDatabase.ioGraph.map(function (value) {
                return value.value
            })
            label = 'kBs'
        } else if (this.modalData.title === '% Memory Usage') {
            labels = this.activeDatabase.memoryGraph.map(function (value) {
                return value.date
            })
            data = this.activeDatabase.memoryGraph.map(function (value) {
                return value.value
            })
            label = '%'
        }
        var vm = this
        var ctx = document.getElementById('myChart')
        var myChart = new Chart(ctx, {
            type: vm.modalData.chartType,
            data: {
                labels: labels.map(function (value) {
                    return value.slice(0, 20) + '...'
                }),
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                tooltips: {
                    enabled: true,
                    mode: 'single',
                    callbacks: {
                        label: function (tooltipItems, data) {
                            return labels[tooltipItems['index']].slice(0, 80) + '...'
                        }
                    }
                }
            }
        })
        console.log(myChart)
    }
}
</script>

<style lang="css" scoped>
.modal {
    margin-top: -300px;
}
</style>
