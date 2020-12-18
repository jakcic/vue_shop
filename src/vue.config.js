module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': 'src/assets',
                'common': 'src/common',
                'network': 'src/network',
                'components': 'src/components',
                'views': 'src/views'
            }
        }
    }
}