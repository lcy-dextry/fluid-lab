const CracoLessPlugin = require('craco-less')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#005cbb' },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ],
    style: {
        postcss: {
            mode: 'extends',
            loaderOptions: {
                postcssOptions: {
                    ident: 'postcss',
                    plugins: [
                        [
                            'postcss-pxtorem',
                            {
                                rootValue: 153.6, // 根元素字体大小
                                unitPrecision: 3,
                                // propList: ['width', 'height']
                                propList: ['*']
                            },
                        ],
                    ],
                },
            },
        },
    },
    webpack: {
        alias: {
            '@': resolve('src'),
            'c': resolve('src/components')
        }
    }
}