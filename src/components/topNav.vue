<template>
<div class="ui fixed menu">
    <a href="#" class="header item">
        <i class="bar chart icon"></i>
            {{ msg }}
    </a>
    <div class="right menu">
        <div class="ui simple dropdown item">
            <i class="alarm icon"></i>
            Alerts <i class="dropdown icon"></i>
            <div class="menu">
                <a class="item" href="#">Alert 1</a>
                <a class="item" href="#">Alert 2</a>
                <a class="item" href="#">Alert 3</a>
                <div class="divider"></div>
                <a class="item" href="#">See Older</a>
            </div>
        </div>
        <div class="ui simple dropdown item">
            <i class="setting icon"></i>
            Settings <i class="dropdown icon"></i>
            <div class="menu">
              <a class="item" href="#">Reset to Defaults</a>
                <div class="divider"></div>
                <a class="item" href="#">More Preferences</a>
            </div>
        </div>
        <div class="ui simple item">
            <i class="help circle icon"></i>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'TopNav',
    data () {
        return {
            msg: 'Database Monitor'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
