/**
* Created by Ergardt.Vladimir on 07.03.2019
*/

<template>
    <div class="gpt-view-window"
        >
        <template v-if="searchValue === ''">
            <h2 class="gpt-view-window__header">Часто посещаемые</h2>
            <div class="gpt-view-window__row"
                 v-for="org in getOftenOrganizations"
            >
                {{ org.name }}</div>
        </template>
    </div>
</template>

<script src="./gpt-view-window.js"></script>

<style scoped>

</style>
