/**
* Created by Ergardt.Vladimir on 01.04.2019
*/

<template>
    <section class="pass-no-ready">
        <pa-modal title="К сожалению, документ не распознался"
                  typeModal="no-success"
                  size="medium"
                  :visible="getPassStatusIsNotReady">
            <p class="pass-no-ready__text">
                Проверьте, что документ расположен фотографией вниз, как на картинке
            </p>
            <div class="pass-no-ready__imgs">
                <img src="@/assets/images/animation/passport_anim_2.gif"/>
                <img src="@/assets/images/animation/pass_scan.png"/>
            </div>
            <pa-button class="document-scan__camera-btn"
                       type="primary"
                       size="big"
                       @click="scanning"
            >
                Сканировать еще раз
            </pa-button>
        </pa-modal>
    </section>
</template>

<script src="./gpt-pass-no-ready.js"></script>

<style scoped>

</style>
