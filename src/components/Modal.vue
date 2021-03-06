<template lang='html'>
    <div v-if='showModal' class='ui modal active'>
        <i class='close icon'></i>
        <div class='header'>
            {{ modalData.title }}
        </div>
        <div class='content'>
            <canvas id='myChart' width='400' height='200px'></canvas>
        </div>
        <div class='actions'>
            <div class='ui black deny button' @click='toggleModal({})'>
                Close
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Chart from 'chart.js'
import moment from 'moment'

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
        var vm = this
        var labels = []
        var data = []
        var datasets = []
        var legendDisplay = true
        if (this.modalData.title === 'Queries in Wait Alert Last 10 Minutes for DB...') {
            labels = this.activeDatabase.highWaitQueries.map(function (value) {
                return value.text.slice(0, 15) + "..."
            })
            data = this.activeDatabase.highWaitQueries.map(function (value) {
                return value.wait
            })
            legendDisplay = false
            datasets = [{
                label: 'Seconds per Query',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        } else if (this.modalData.title === '% CPU used by DB for DB...') {
            labels = this.activeDatabase.cpuGraph.map(function (value) {
                return moment(value.date).format('M/D, h:mmA')
            }).reverse()
            data = this.activeDatabase.cpuGraph.map(function (value) {
                return value.value
            }).reverse()
            legendDisplay = false
            datasets = [{
                label: '%',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        } else if (this.modalData.title === 'Disk I/O in kBs for DB...') {
            labels = this.activeDatabase.ioGraph.map(function (value) {
                return moment(value.date).format('M/D, h:mmA')
            }).reverse()
            data = this.activeDatabase.ioGraph.map(function (value) {
                return value.value
            }).reverse()
            legendDisplay = false
            datasets = [{
                label: 'kBs',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        } else if (this.modalData.title === '% Memory Usage for DB...') {
            labels = this.activeDatabase.memoryGraph.map(function (value) {
                return moment(value.date).format('M/D, h:mmA')
            }).reverse()
            data = this.activeDatabase.memoryGraph.map(function (value) {
                return value.value
            }).reverse()
            legendDisplay = false
            datasets = [{
                label: '%',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        } else if (this.modalData.title === 'Wait by Type for DB...') {
            var typeSet = new Set()
            var dateSet = new Set()
            this.activeDatabase.sqlBreakdownGraph.map(function (value) {
                typeSet.add(value.type)
            })
            this.activeDatabase.sqlBreakdownGraph.map(function (value) {
                dateSet.add(moment(value.date).format('M/D, h:mmA'))
            })
            var uniqueTypes = Array.from(typeSet)
            labels = Array.from(dateSet).reverse()

            var colorObj = {}
            uniqueTypes.map(function (color) {
                colorObj[color] = `${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}`
            })

            datasets = uniqueTypes.map(function (value) {
                return {
                    label: value,
                    data: labels.map(function (original, index) {
                        var match = vm.activeDatabase.sqlBreakdownGraph.filter(function (old) {
                            return moment(old.date).format('M/D, h:mmA') === original && old.type === value
                        })[0]
                        if (match) {
                            return match.wait
                        } else {
                            return 0
                        }
                    }),
                    backgroundColor: `rgba(${colorObj[value]}, 0.2)`,
                    borderColor: `rgba(${colorObj[value]}, 1)`,
                    borderWidth: 1
                }
            })
        }
        var ctx = document.getElementById('myChart')
        if (ctx) {
            var myChart = new Chart(ctx, {
                type: vm.modalData.chartType,
                data: {
                    labels: labels,
                    datasets: datasets
                },
                options: {
                    legend: {
                        display: legendDisplay
                    },
                    scales: {
                        yAxes: [{
                            stacked: true,
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            stacked: true,
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            })
        }
    }
}
</script>

<style lang='css' scoped>
.modal {
    margin-top: -300px;
}
</style>
