/**
* Created by Ergardt.Vladimir on 01.03.2019
*/

<template>
    <section class="gpt-nav">
        <el-row type="flex"
                align="middle"
                class="gpt-container"
                style="justify-content: space-between;">
            <pa-button class="gpt-nav__btns"
                       type="page"
                       size="big"
                       @click="$router.push({ name: getPreviousPage })">
                <pa-icon name="arrow_back"></pa-icon>
                Назад
            </pa-button>
            <pa-button class="gpt-nav__btns"
                       type="page"
                       size="big"
                       @click="$router.push({ name: 'Home'})">
                Выйти
            </pa-button>
        </el-row>

        <el-row type="flex"
                align="middle"
                class="gpt-container">
            <div class="gpt-nav__tabs">
                <span class="gpt-nav__tabs"
                      :class="{ 'gpt-nav__tabs--active'
                      : active(['SelectSearch', 'SelectAlphabet']) }"
                > 1. Выбор компании
                </span>
                <span class="gpt-nav__tabs"
                      :class="{ 'gpt-nav__tabs--active'
                      : active('DocumentScan') }"
                > 2. Сканирование документа </span>
            </div>
        </el-row>

        <el-row class="gpt-container" type="flex" align="middle">
            <h3 class="gpt-nav__header">
                Выберите компанию для посещения
            </h3>
        </el-row>



        <!-- test -->
        <!-- el-row type="flex" class="gpt-container">
            <pa-button class="gpt-nav__btns"
                       type="primary"
                       size="small"
                       @click="$router.push({ name: 'DocumentScan' })"> to DocumentScan</pa-button>
            <pa-button class="gpt-nav__btns"
                       type="primary"
                       size="small"
                       @click="$router.push({ name: 'SelectAlphabet' })"> to SelectAlphabet</pa-button>
            <pa-button class="gpt-nav__btns"
                       type="primary"
                       size="small"
                       @click="$router.push({ name: 'SelectSearch' })"> to SelectSearch</pa-button>
        </el-row -->

    </section>
</template>

<script src="./gpt-nav.js"></script>

<style scoped>

</style>
