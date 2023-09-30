'use strict';

/**
 * main-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-article.main-article');
