/**
* Created by Ergardt.Vladimir on 01.03.2019
*/

<template>
    <section class="document-scan">
        <el-row type="flex"
                align="middle"
                justify="center"
                class="gpt-container">
            <div class="document-scan__instruction">
                <img src="@/assets/images/bg/terminal_arrow.png">
                <img class="document-scan__instruction-animation"
                     src="@/assets/images/animation/passport_anim_1.gif"/>
            </div>
        </el-row>

        <el-row type="flex" class="gpt-container document-scan__row">
            <div class="document-scan__info">
                <div class="document-scan__info-num">1</div>
                <div class="document-scan__info-text">Положите на сканер
                    <span class="document-scan__info-alert">паспорт</span>
                    без обложки или
                    <span class="document-scan__info-alert">водительское удостоверение</span>
                </div>
            </div>

            <div class="document-scan__info">
                <div class="document-scan__info-num">2</div>
                <div class="document-scan__info-text">Убедитесь, что документ расположен внутри рамки и нажмите кнопку "Сканировать"</div>
            </div>
        </el-row>

        <el-row type="flex"
                class="gpt-container document-scan__camera">
            <div style="position: relative">
                <img class="document-scan__camera-img"
                     src="@/assets/images/bg/camera.png" />
                <div v-if="scanning"
                     class="document-scan__camera-loading">
                    <i class="el-icon-loading"></i>
                    <p>Идет сканирование</p>
                </div>
            </div>
            <pa-button class="document-scan__camera-btn"
                       v-if="!scanning"
                       type="primary"
                       @click="scanningDocument"
                       size="big">Сканировать
            </pa-button>
        </el-row>

        <el-row type="flex"
                class="gpt-container document-scan__footer">
            <i class="el-icon-question document-scan__footer-question"></i>
        <div class="document-scan__footer-text">
            Если возникнут проблемы - свяжитесь с охраной через переговорное устройство, не убирая документ со сканера
        </div>
        <img src="@/assets/images/elements/domofon_3.png"/>
        </el-row>

        <!-- Modal windows -->
        <gpt-pass-is-ready></gpt-pass-is-ready>
        <gpt-pass-no-ready></gpt-pass-no-ready>
    </section>
</template>

<script src="./document-scan.js"></script>

<style scoped>

</style>
