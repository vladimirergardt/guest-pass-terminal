/**
* Created by Smirnov.Denis on 08.11.2017.
*
* Компонент кнопки
*/

<template>

    <button
            class="pa-button"
            :class="[
                type ? 'pa-button--' + type : '',
                size ? 'pa-button--' + size : '',
                { 'pa-button--stretch': stretch },
                { 'pa-button--line-wrap': lineWrap },
                { 'is-selected': selected },
                { 'is-disabled': disabled },
                { 'is-loading': loading },
            ]"
            :type="nativeType"
            :disabled="disabled"
            @click="handleClick"
    >
        <span class="pa-button__content">
            <span v-if="loading" class="button-loader">
                <span class="button-loader__dot"></span>
                <span class="button-loader__dot"></span>
                <span class="button-loader__dot"></span>
            </span>

            <slot></slot>
        </span>
    </button>

</template>

<script src="./pa-button.js"></script>
