const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const siteUrl = process.env.SITE_URL || "http://localhost:5000"
    res.send({
        about: `Here we have a some amazing Restful APIs. Developed with ♥ by Khalid Saifullah (https://github.com/coderkhalide)`,
        apis: [
            {
                title: "Extract Title, Description, Keywords, Images and Videos from URLs 😀",
                endpoint: `${siteUrl}/api/site-data`
            }
        ],
    })
})

module.exports = router