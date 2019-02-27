/**
* Created by Ergardt.Vladimir on 27.02.2019
*/

<template>
    <section class="gpt-home" @click="$router.push({ name: 'SelectSearch'})">
        <div class="gpt-home__banner">
            <el-row type="flex" align="middle" class="gpt-container" style="justify-content: flex-end">
                <div class="gpt-home__content">
                    <h2 class="gpt-home__content-header">Нажмите, что бы получить пропуск</h2>
                    <img class="gpt-home__content-tap" src="../../assets/images/animation/tap_anim.gif"/>
                    <pa-button @click.stop="checkCode()"
                            style="font-size: 18px" type="primary" size="big">У меня есть код
                        <img style="margin-left: 15px; width: 23px" src="../../assets/images/elements/code.png" />
                    </pa-button>
                </div>
            </el-row>
        </div>
        <el-row type="flex" align="middle" class="container">
            <div class="gpt-home__promotion-line gpt-container">
                <div class="gpt-home__promotion-line_context"
                     v-for="n in 7" :key="n">
                    {{ promotionContext }}</div>
            </div>
        </el-row>
        <el-row type="flex" align="middle">
            <div class="gpt-home__promotion-banner"></div>
        </el-row>
    </section>
</template>

<script src="./home.js"></script>

<style lang="scss"></style>
