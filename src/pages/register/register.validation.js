import Joi from "joi"; 

export const schema = Joi.object({
    fullName: Joi.string().min(3).max(30).label("Full Name").required(),
    preferredName: Joi.string().min(3).max(30).label("Preferred Name").required(),
    email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).label("Email").required(),
    password: Joi.string().min(4).label("Password").required(),
    confirmPassword: Joi.string().equal(Joi.ref("password")).required()
    .label('Confirm password')
    .messages({ 'any.only': '{{#label}} does not match' })
})