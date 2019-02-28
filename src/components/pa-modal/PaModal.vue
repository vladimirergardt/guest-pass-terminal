/**
* Created by Smirnov.Denis on 07.11.2017.
*
* Компонент модального окна
*/

<template>

    <div>
        <transition name="fade-slide-modal">
            <div v-show="visible" class="pa-modal__wrapper" @click.self="close">
                <article class="pa-modal"
                         :class="[
                         size ? 'pa-modal--' + size : '',
                     ]"
                >
                    <header class="pa-modal__header">
                        <slot name="title">
                            {{ title }}
                        </slot>

                        <i @click="close"  class="el-icon-close pa-modal__btn-close"></i>
                    </header>

                    <div class="pa-modal__content-inner">
                        <slot/>
                    </div>

                    <footer v-if="$slots.footer" class="pa-modal__footer">
                        <slot name="footer"></slot>
                    </footer>
                </article>
            </div>
        </transition>

        <transition name="fade-overlay">
            <div v-show="visible"
                 class="pa-overlay"
            ></div>
        </transition>
    </div>

</template>

<script src="./pa-modal.js"></script>
