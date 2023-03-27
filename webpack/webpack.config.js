const { merge } = require('webpack-merge')
const commonCohfig = require('./webpack.common.js')

module.exports = (envVars) => {
    const { env } = envVars
    const envConfig = require(`./webpack.${env}.js`)
    const config = merge(commonCohfig, envConfig)
    return config
}