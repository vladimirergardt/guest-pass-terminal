/**
* Created by Ergardt.Vladimir on 01.03.2019
*/

<template>
    <section class="pass-is-ready">
        <pa-modal title="Ваш пропуск готов"
                  typeModal="success"
                  size="medium"
                  :visible="getPassStatusIsReady">
            <img src="@/assets/images/animation/pass_anim.gif"/>
            <p class="pass-is-ready__text">
                Возьмите пропуск. Для входа приложите его к считывающему устройству
            </p>
        </pa-modal>
    </section>
</template>

<script src="./gpt-pass-is-ready.js"></script>

<style scoped>

</style>
