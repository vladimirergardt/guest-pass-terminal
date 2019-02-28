/**
* Created by Ergardt.Vladimir on 28.02.2019
*/

<template>
    <section class="keyboard-sms-code">
        <div class="keyboard-sms-code__btn"
             :class="n !== 'c'
             ? 'keyboard-sms-code__btn-num'
             : 'keyboard-sms-code__btn-clear'"
             v-for="n in keyboard"
             @click="changeValue(n)"
             v-model="checkModalStatus">
            <pa-icon v-if="n === 'c'"
                     name="arrow_back">
            </pa-icon>
            {{ n }}
        </div>
    </section>
</template>

<script src="./gpt-keyboard-sms-code.js"></script>
