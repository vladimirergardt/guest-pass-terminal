/**
 * Created by Smirnov.Denis on 03.11.2017.
 */

export default {
    name: 'PaIcon',
    props: {
        name: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
