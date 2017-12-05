import axios from 'axios'
import {Database} from '@/models/database.js'

export function Api (options) {
    if (options === undefined) {
        options = {}
    }
    if (!(this instanceof Api)) {
        return new Api()
    }

    this.test = 'test'
    this.baseUrl = options['baseUrl'] || 'https://aws-euwest1-01.nonprod.hera.zeus.swmsp.net/dpa/api/v1'

    Object.defineProperty(this, 'get', {
        value: function (vm, name, id, options) {
            var that = this

            if (name === 'databases') {
                axios.get(`${that.baseUrl}/db/`, {
                }).then(function (response) {
                    vm.databases = response.data
                })
            }
            if (name === 'database' && id) {
                axios.get(`${that.baseUrl}/db/${id}`, {
                }).then(function (response) {
                    var database = new Database(response.data)
                    database.setAgent()
                    database.getStats()
                    database.getTopQueries()
                    database.getHighWaitQueries()
                    database.setCpuGraph()
                    database.setIoGraph()
                    database.setMemoryGraph()
                    vm.setActiveDatabase(database)
                })
            }
            if (name === 'agents') {
                axios.get(`${that.baseUrl}/agent/`, {
                }).then(function (response) {
                    var agent = response.data.filter(function (agent) {
                        return vm.agentUuid === agent.uuid
                    })[0]
                    if (agent) {
                        vm.agent = agent
                    }
                })
            }
            if (name === 'agent' && id) {
                axios.get(`${that.baseUrl}/agent/${id}`, {
                }).then(function (response) {
                    if (response.data) {
                        vm.agent = response.data
                    }
                })
            }
            if (name === 'metric' && id) {
                axios.get(`${that.baseUrl}/db/${id}/metric`, {
                }).then(function (response) {
                    if (response.data) {
                        vm.stats = response.data
                    }
                })
            }
            if (name === 'metricCpu' && id) {
                axios.get(`${that.baseUrl}/db/${id}/metric/cpu`, {
                }).then(function (response) {
                    vm(response.data)
                })
            }
            if (name === 'metricIo' && id) {
                axios.get(`${that.baseUrl}/db/${id}/metric/io`, {
                }).then(function (response) {
                    vm(response.data)
                })
            }
            if (name === 'metricMemory' && id) {
                axios.get(`${that.baseUrl}/db/${id}/metric/memory`, {
                }).then(function (response) {
                    vm(response.data)
                })
            }
            if (name === 'metrics' && id) {
                axios.get(`${that.baseUrl}/db/${id}/metrics`, {
                }).then(function (response) {
                    return response.data
                })
            }
            if (name === 'wait' && id) {
                axios.get(`${that.baseUrl}/db/${id}/wait`, {
                }).then(function (response) {
                    return response.data
                })
            }
            if (name === 'waitTop' && id && options) {
                axios.get(`${that.baseUrl}/db/${id}/wait/${options['top']}`, {
                }).then(function (response) {
                    vm(response.data)
                })
            }
        }
    })
}
