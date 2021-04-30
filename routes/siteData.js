const express = require('express')
const router = express.Router()
const {validateUrl} = require('../models/siteData')
const Meta = require('html-metadata-parser');

router.get('/', (req, res) => {
    res.send({
        message: `Throught this api you could Extract Title, Description, Keywords, Images and Videos from URLs 😀`,
        enpoint: `Post Request to this URL, with 'url' parameter (don't forget to include http or https)`,
    })
})
router.post('/', async (req, res) => {

    const error = validateUrl(req.body)
    if(error) return res.status(400).send({message: error.message})

    try{
        const metaData = await Meta.parser(req.body.url)
        res.send(metaData)
    }catch(err){
        res.status(500).send({message: "something went wrong 😐 check your url and try again!"})
    }

})

module.exports = router