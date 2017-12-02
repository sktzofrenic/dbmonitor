<template lang="html">
    <div class="ui modal" :class="{'active': showModal}">
        <i class="close icon"></i>
        <div class="header">
            % CPU used by DB
        </div>
        <div class="content">
            <canvas id="myChart" width="400" height="200px"></canvas>
        </div>
        <div class="actions">
            <div class="ui black deny button" @click="toggleModal()">
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
            'showModal'
        ])
    },
    methods: {
        ...mapActions([
            'toggleModal'
        ])
    },
    mounted: function() {
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }
}
</script>

<style lang="css" scoped>
.modal {
    margin-top: -300px;
}
</style>
