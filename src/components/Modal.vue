<template lang="html">
    <div class="ui modal" :class="{'active': showModal}">
        <i class="close icon"></i>
        <div class="header">
            Modal Title
        </div>
        <div class="content">
            Modal Content
        </div>
        <div class="actions">
            <div class="ui black deny button" @click="toggleModal()">
                Close
            </div>
            <!-- <div class="ui positive right labeled icon button">
                Yep, that's me
                <i class="checkmark icon"></i>
            </div> -->
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

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
    }
}
</script>

<style lang="css" scoped>
.modal {
    margin-top: -300px;
}
</style>
