<template lang="html">
    <div class="">
        <div class="ui segment">
            <h2 class="ui header">
                <i class="warning sign icon title-header"></i>
                <div class="content title-content">
                    {{ activeDatabase.name }} {{ activeDatabase.id}}
                    <div class="sub header">
                        {{ activeDatabase.ip }} ({{ activeDatabase.host }})
                        <div class="ui compact menu title-icon">
                            <div class="ui simple dropdown item">
                                Commands
                                <i class="dropdown icon"></i>
                                <div class="menu">
                                    <div class="item">Ping Server</div>
                                    <div class="item">Restart</div>
                                    <div class="item">Diagnose</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'activeDatabase'
        ])
    }
}
</script>

<style lang="css" scoped>
.title-header {
    text-align: left;
}

.title-content {
    width: 100%;
    text-align: left;
}
.title-icon {
    float:right;
    margin-top: -25px !important;
}
</style>
