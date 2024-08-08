import * as Joi from 'joi';

export const validationSchema = Joi.object({
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRES_IN: Joi.string().default('3600s'),
    DATABASE_HOST: Joi.string().required(),
    DATABASE_USER: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required(),
    DATABASE_NAME: Joi.string().required(),
    // Add other environment variables here as needed
});