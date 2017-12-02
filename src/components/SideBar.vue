<template lang="html">
    <div class="">
        <div class="ui medium header">Monitored Databases</div>
        <button class="ui labeled icon button">
            <i class="plus icon"></i>
            Add Database
        </button>
        <div class="ui middle aligned divided list sidebar-list">
            <div class="item">
                <div class="right floated content">
                    <button class="ui icon button">
                        <i class="ellipsis vertical icon"></i>
                    </button>
                </div>
                <i class="database large icon"></i>
                <div class="content">
                    DEV-AUS-PGRA-01
                </div>
            </div>
            <div class="item">
                <div class="right floated content">
                    <button class="ui icon button">
                        <i class="ellipsis vertical icon"></i>
                    </button>
                </div>
                <i class="database large icon"></i>
                <div class="content">
                    DEV-AUS-TONY-30
                </div>
            </div>
            <div class="item">
                <div class="right floated content">
                    <button class="ui icon button">
                        <i class="ellipsis vertical icon"></i>
                    </button>
                </div>
                <i class="database large icon"></i>
                <div class="content">
                    dev-brn-sql-01
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TopNav',
  data() {
    return {
      msg: 'DB Monitor'
    }
  }
}
</script>

<style lang="css" scoped>
.sidebar-list {
    padding: 20px;
}
</style>
