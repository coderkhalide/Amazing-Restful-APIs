const Joi = require('joi')

function validateUrl(data){
    const schema = Joi.object({
        url: Joi.string().uri().required()
    })
    const {error} = schema.validate(data)
    return error
}

exports.validateUrl = validateUrl