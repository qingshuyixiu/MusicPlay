module.exports = {
    plugins: {
        'autoprefixer': {
            overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
        },
        'postcss-pxtorem': {
            //设计稿 750px 设置为 75   1rem=75px.
            rootValue: 37.5, // 一个rem的值是37.5 px 设计稿图片是宽度375px
            propList: ['*']
        }
    }
}