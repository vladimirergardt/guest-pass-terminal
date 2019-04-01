/**
* Created by Ergardt.Vladimir on 28.02.2019
*/

<template>
    <section class="select-search">
        <el-row type="flex"
                align="middle"
                justify="space-between"
                class="gpt-container">

            <span class="select-search__text">Поиск</span>

            <div class="select-search__filter">

                <input placeholder="Начните вводить название"
                       readonly
                       v-model="value"
                       type="text"
                       class="select-search__filter-input"/>

                <span class="select-search__filter-icon">
                    <pa-icon slot="append" name="search"></pa-icon>
                </span>

            </div>
            <pa-button type="page"
                       size="nav"
                       @click="$router.push({ name: 'SelectAlphabet' })"
            >А-Я</pa-button>
        </el-row>

        <el-row type="flex" class="gpt-container">
            <!-- Result search-->
            <gpt-view-window :searchValue="value"
                             type="search"
                             :windowHeight="minWindow"
                             :maxLength="7"
            ></gpt-view-window>
        </el-row>

        <el-row type="flex" class="select-search__keyboard">
            <gpt-keyboard type="search"
                          @add-value="addValue"
                          @add-space="addSpace"
                          @clear-value="clearValue"
                          @delete-value="deleteValue"
            ></gpt-keyboard>
        </el-row>
    </section>
</template>

<script src="./select-search.js"></script>

<style scoped>

</style>
