const express = require('express')
const siteData = require('../routes/siteData')
const rootPath = require('../routes/rootPath')

module.exports = function(app){
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use('/', rootPath)
    app.use('/api/site-data', siteData)
}