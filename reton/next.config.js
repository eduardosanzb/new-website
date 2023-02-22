const path = require('path')

const imageName = process.env.NEXT_PUBLIC_WHO === 'Ave' ? 'ave' : 'banner-main1'

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        additionalData: `$image:${imageName}`
    },
}
