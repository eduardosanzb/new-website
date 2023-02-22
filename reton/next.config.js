const path = require('path')

const imageName = process.env.WHO === 'Ave' ? 'ave' : 'banner-main1'
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        additionalData: `$image:${imageName}`
    },
}
