/**
* Created by Ergardt.Vladimir on 07.03.2019
*/

<template>
    <div>
        <div class="gpt-view-window">
            <template v-show="filteredData.length">
                <h2 v-if="type === 'search'" class="gpt-view-window__header">
                    {{ searchValue === ''
                        ? `Часто посещаемые`
                        : `Найдено ${filteredData.length}` }}
                </h2>
                <div ref="resultWindow"
                     class="gpt-view-window__results"
                     :style="{ 'max-height': windowHeight + 'px' }">
                    <div
                         ref="resultRow"
                         class="gpt-view-window__row"
                         :class="{'gpt-view-window__row-title': org.type === 'title'}"
                         v-for="(org, i) in filteredData"
                         @click="selectOrganization(org)"
                    >
                        <span v-if="type === 'alphabet'">{{ org.name }}</span>
                        <highlight v-if="type === 'search'" :message="org.name"
                                   :search="searchValue"
                                   classValue="gpt-view-window__highlight" />
                    </div>
                </div>
            </template>
            <template v-if="!filteredData.length && type === 'search'">
                <div class="gpt-search-fail" style="height: 488px">
                    <h3 class="gpt-nav__header">Такой компании нет в списке</h3>
                    <div class="gpt-search-fail--text">Уточните название у контактного лица</div>
                    <div class="gpt-search-fail--block">
                        <span>или свяжитесь с охраной через переговорное устройство</span>
                        <img src="@/assets/images/elements/domofon_3.png"/>
                    </div>
                </div>
            </template>
        </div>
        <div class="gpt-view-nav">
            <template v-if="filteredData.length > maxLength">
                <span class="gpt-view-nav-btns">
                    <button class="gpt-view-nav__btn"
                            :class= "{'is-disabled': disabledUpBtns }"
                            :disabled="disabledUpBtns"
                            @click="scrolling('up', maxLength)">
                        <img src="@/assets/images/elements/arrow_all_top.svg"/>
                    </button>
                    <button class="gpt-view-nav__btn"
                            :class= "{'is-disabled': disabledDownBtns }"
                            :disabled="disabledDownBtns"
                            @click="scrolling('down', maxLength)">
                        <img src="@/assets/images/elements/arrow_all_down.svg" />
                    </button>
                </span>
                <span class="gpt-view-nav-btns">
                    <button class="gpt-view-nav__btn"
                            :class= "{'is-disabled': disabledDownBtns }"
                            :disabled="disabledDownBtns"
                            @click="scrolling('down', 1)">
                        <img src="@/assets/images/elements/arrow_1_down.svg"/>
                    </button>
                    <button class="gpt-view-nav__btn"
                            :class= "{'is-disabled': disabledUpBtns }"
                            :disabled="disabledUpBtns"
                            @click="scrolling('up', 1)">
                        <img src="@/assets/images/elements/arrow_1_top.svg" />
                    </button>
                </span>
            </template>
        </div>
    </div>
</template>

<script src="./gpt-view-window.js"></script>

<style scoped>

</style>
