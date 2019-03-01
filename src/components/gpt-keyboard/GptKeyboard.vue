/**
* Created by Ergardt.Vladimir on 01.03.2019
*/

<template>
    <div class="gpt-keyboard">
        <el-row type="flex" style="flex-wrap: wrap;">
            <div class="gpt-keyboard__key" v-for="n in computedAlphabet">{{ n }}</div>
            <div class="gpt-keyboard__key">123</div>
            <div class="gpt-keyboard__key">c</div>
        </el-row>
    </div>
</template>

<script src="./gpt-keyboard.js"></script>

<style scoped>

</style>
