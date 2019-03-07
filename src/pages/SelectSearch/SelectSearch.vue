/**
* Created by Ergardt.Vladimir on 28.02.2019
*/

<template>
    <section class="select-search">
        <el-row type="flex"
                align="middle"
                justify="space-between"
                class="gpt-container"> <!-- justify="space-between" -->

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
            <gpt-view-window :searchValue="value"></gpt-view-window>
            <!--div class="" style="padding: 16px; background: white; height: auto; width: 723px; border-radius: 8px; margin: 36px 0 80px 0; border: 1px solid #d7d7d7; min-height: 488px">
                <div v-if="value === ''">
                    <h5>Часто посещаемые</h5>
                    <div v-for="org in getOftenOrganizations"> {{ org.name }}</div>
                </div>
            </div-->
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
