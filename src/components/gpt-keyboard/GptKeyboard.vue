/**
* Created by Ergardt.Vladimir on 01.03.2019
*/

<template>
    <div class="gpt-keyboard">
        <el-row type="flex" style="flex-wrap: wrap;">
            <div class="gpt-keyboard__key"
                 v-for="n in computedAlphabet"
                 @click="addValue(n)"
                 :class="{ 'gpt-keyboard__key-disabled': disabledBtn(n) }"
            >{{ n }}</div>

            <template v-if="type === 'search'">
                <div class="gpt-keyboard__key action-key" @click="simbolsUpperCase">123</div>
                <div class="gpt-keyboard__key action-key action-key--two-ceil"
                     @click="deleteValue">
                    <i style="font-size: 30px; margin-right: 5px" class="material-icons">keyboard_backspace</i> C
                </div>

                <el-row type="flex"
                        justify="center"
                        style="width: 100%">
                    <div class="gpt-keyboard__key-space"
                         @click="addSpace">ПРОБЕЛ</div>
                    <div class="gpt-keyboard__key-clear"
                         @click="clearValue">Очистить</div>
                </el-row>
            </template>
        </el-row>
    </div>
</template>

<script src="./gpt-keyboard.js"></script>

<style scoped>

</style>
