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
            'modalData'
        ])
    },
    methods: {
        ...mapActions([
            'toggleModal'
        ])
    },
    updated: function () {
        var vm = this
        var ctx = document.getElementById('myChart')
        var myChart = new Chart(ctx, {
            type: vm.modalData.chartType,
            data: {
                labels: ['Select user_id, report_id...', 'Select wait_time, op_time...', 'Select total_query, date...', 'Select users, reports...'],
                datasets: [{
                    label: 'Total Queries',
                    data: [44332, 50500, 50505, 60303],
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
                    }],
                }
            }
        })
    }
}
</script>

<style lang="css" scoped>
.modal {
    margin-top: -300px;
}
</style>
