/**
* Created by Ergardt.Vladimir on 28.02.2019
*/

<template>
    <section class="input-sms-code" v-model="setValue">
        <el-form :model="form"
                 v-model="checkModalStatus"
                 class="input-sms-code__form">
            <el-form-item
                    prop="value"
            > <!-- :rules="rulesSmsCode" -->
                <img v-if="isVisibleSubmitError"
                     class="input-sms-code__attention"
                     src="../../assets/images/elements/attention.png"/>
                <el-input placeholder="_ _ _ _ _ _"
                          :maxlength="6"
                          class="input-sms-code__input"
                          v-model.number="form.value"
                          autocomplete="off"
                          :readonly="true"/>
            </el-form-item>
            <el-form-item>
                <pa-button :disabled="disabledBtn"
                           class="input-sms-code__btn"
                           type="primary"
                           @click="submitForm()">
                    <pa-icon name="arrow_forward"></pa-icon>
                </pa-button>
            </el-form-item>
            <div v-if="isVisibleSubmitError"
                 class="input-sms-code__error">
                Код неверный. Попробуйте еще раз или сяжитесь с вашим менеджером
            </div>
        </el-form>
    </section>
</template>

<script src="./gpt-input-sms-code.js"></script>

<style scoped>

</style>
