import {Api} from '@/api/api.js'

var api = new Api()

export function Database (options) {
    if (options === undefined) {
        options = {}
    }
    if (!(this instanceof Database)) {
        return new Database()
    }
    this.highWaitQueryThreshold = 30 // in seconds

    this.id = options['id'] || ''
    this.machineName = options['machineName'] || ''
    this.instanceName = options['instanceName'] || ''
    this.name = options['name'] || ''
    this.quickPollInterval = options['quickPollInterval'] || ''
    this.textPollInterval = options['textPollInterval'] || ''
    this.cleanStartHour = options['cleanStartHour'] || ''
    this.cleanEndHour = options['cleanEndHour'] || ''
    this.cleanIntervalDays = options['cleanIntervalDays'] || ''
    this.f = options['f'] || ''
    this.securityModel = options['securityModel'] || ''
    this.erpFlag = options['erpFlag'] || ''
    this.oracleDBName = options['oracleDBName'] || ''
    this.databaseType = options['databaseType'] || ''
    this.command = options['command'] || {}
    this.status = options['status'] || ''
    this.userName = options['userName'] || ''
    this.password = options['password'] || ''
    this.authenticationScheme = options['authenticationScheme'] || ''
    this.ip = options['ip'] || ''
    this.host = options['host'] || ''
    this.port = options['port'] || ''
    this.databaseName = options['databaseName'] || ''
    this.serviceName = options['serviceName'] || ''
    this.oracleSID = options['oracleSID'] || ''
    this.oracleConnectionString = options['oracleConnectionString'] || ''
    this.additionalProperties = options['additionalProperties'] || ''
    this.jdbcDriverProperties = options['jdbcDriverProperties'] || ''
    this.serverProperties = options['serverProperties'] || ''
    this.characterEncoding = options['characterEncoding'] || ''
    this.editionString = options['editionString'] || ''
    this.aggregateSchedule = options['aggregateSchedule'] || ''
    this.agentUuid = options['agentUuid'] || ''
    this.databaseVersionString = options['databaseVersionString'] || ''
    this.databaseVersion = options['databaseVersion'] || {}
    this.statusString = options['statusString'] || ''
    this.quickPollIntervalMillis = options['quickPollIntervalMillis'] || ''
    this.textPollIntervalMillis = options['textPollIntervalMillis'] || ''
    this.monitorSetToRun = options['monitorSetToRun'] || ''
    this.commandString = options['commandString'] || ''
    this.databaseTypeString = options['databaseTypeString'] || ''
    this.namedInstance = options['namedInstance'] || ''
    this.agent = options['agent'] || {
        'arch': '',
        'hostname': '',
        'ip': '',
        'os': '',
        'uuid': ''
    }
    this.stats = options['stats'] || {
        io: '',
        cpu: '',
        memory: ''
    }
    this.topQueries = options['topQueries'] || []
    this.highWaitQueries = options['highWaitQueries'] || []
    this.cpuGraph = options['cpuGraph'] || []
    this.ioGraph = options['ioGraph'] || []
    this.memoryGraph = options['memoryGraph'] || []
    this.sqlBreakdownGraph = options['sqlBreakdownGraph'] || []

    Object.defineProperty(this, 'setAgent', {
        value: function () {
            api.get(this, 'agent', this.agentUuid)
        }
    })

    Object.defineProperty(this, 'setCpuGraph', {
        value: function () {
            var that = this
            api.get(function (data) {
                that.cpuGraph = data
            }, 'metricCpu', that.id)
        }
    })

    Object.defineProperty(this, 'setIoGraph', {
        value: function () {
            var that = this
            api.get(function (data) {
                that.ioGraph = data
            }, 'metricIo', that.id)
        }
    })

    Object.defineProperty(this, 'setMemoryGraph', {
        value: function () {
            var that = this
            api.get(function (data) {
                that.memoryGraph = data
            }, 'metricMemory', that.id)
        }
    })

    Object.defineProperty(this, 'getStats', {
        value: function () {
            api.get(this, 'metric', this.id)
        }
    })

    Object.defineProperty(this, 'getTopQueries', {
        value: function () {
            var that = this
            api.get(function (queries) {
                that.topQueries = queries
            }, 'waitTop', this.id, {'top': 5})
        }
    })

    Object.defineProperty(this, 'getHighWaitQueries', {
        value: function () {
            var that = this
            api.get(function (queries) {
                that.highWaitQueries = queries.filter(function (value) {
                    return value.wait > that.highWaitQueryThreshold
                })
            }, 'waitTop', this.id, {'top': 20})
        }
    })
}
