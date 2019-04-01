/**
* Created by Ergardt.Vladimir on 28.02.2019
*/

<template>
    <section class="select-alphabet">
        <el-row type="flex"
                align="middle"
                justify="space-between"
                class="gpt-container">
            <span class="select-search__text">Алфавитный указатель</span> {{ this.value }}
            <pa-button type="page"
                       size="nav"
                       @click="$router.push({ name: 'SelectSearch' })"
            >
                <pa-icon class="select-alphabet__search-icon" name="search"></pa-icon>
                Поиск
            </pa-button>
        </el-row>

            <!-- Alphabet Keyboard -->
        <el-row type="flex"
                class="select-alphabet__keyboard gpt-container">
            <gpt-keyboard type="alphabet"
                          v-if="showKeyboard"
                          @add-value="addValue"
            ></gpt-keyboard>
            <span class="select-alphabet__to-keyboard"
                  v-if="!showKeyboard"
                  @click="showKeyboard = true">
                <pa-icon name="arrow_back"></pa-icon>
                К алфавиту</span>
        </el-row>
            <!-- Window Result -->
        <el-row type="flex" class="select-alphabet__window-result gpt-container">
            <gpt-view-window :searchValue="value"
                             type="alphabet"
                             :windowHeight="windowSize"
                             :maxLength="maxSize"
            ></gpt-view-window>
        </el-row>

    </section>
</template>

<script src="./select-alphabet.js"></script>

<style scoped>

</style>
