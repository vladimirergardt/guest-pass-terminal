/**
* Created by Smirnov.Denis on 03.11.2017.
*/

<template>

    <i
            :class="[
                size ? `pa-icon--${size}` : '',
                { 'is-disabled': disabled }
            ]"
            class="pa-icon  material-icons"
            @click="$emit('click')"
    >
        {{ name }}
    </i>

</template>

<script src="./pa-icon.js"></script>

