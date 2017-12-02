import {Api} from '@/api/api.js'

var api = new Api()

export function Database (options) {
    if (options === undefined) {
        options = {}
    }
    if (!(this instanceof Database)) {
        return new Database()
    }
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
        arch: '',
        os: ''
    }
    this.stats = options['stats'] || {
        io: '',
        cpu: ''
    }
    this.topQueries = options['topQueries'] || []

    Object.defineProperty(this, 'setAgent', {
        value: function () {
            api.get(this, 'agent')
        }
    })

    Object.defineProperty(this, 'getStats', {
        value: function () {
            api.get(this, 'metric', this.id)
        }
    })

    Object.defineProperty(this, 'getTopQueries', {
        value: function () {
            api.get(this, 'wait', this.id, {'top': this.id})
        }
    })
}
