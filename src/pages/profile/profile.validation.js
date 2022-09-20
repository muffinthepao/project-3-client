import Joi from "joi"; 

export const schema = Joi.object({
    fullName: Joi.string().min(3).max(30).label("Full Name"),
    preferredName: Joi.string().min(3).max(30).label("Preferred Name"),
    email: Joi.string()
      .trim()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
  })
  