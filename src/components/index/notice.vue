<template>
    <section>
        <v-header></v-header>
        <div>
            <div class="mint-msgbox">
                <div class="mint-msgbox-header">
                    <div class="mint-msgbox-title">提示</div>
                </div>
                <div class="mint-msgbox-content">
                    <div class="mint-msgbox-message">操作成功!</div>
                    <div class="mint-msgbox-input" style="display: none;"><input placeholder="" type="text">
                        <div class="mint-msgbox-errormsg" style="visibility: hidden;"></div>
                    </div>
                </div>
                <div class="mint-msgbox-btns">
                    <button class="mint-msgbox-btn mint-msgbox-cancel " style="display: none;">取消</button>
                    <button class="mint-msgbox-btn mint-msgbox-confirm ">确定</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Cheader from '../home/header.vue';

export default {
    components: {
        'v-header': Cheader
    }
}
</script>

<style lang="less" scoped>

</style>


