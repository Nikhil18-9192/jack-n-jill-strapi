'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        async afterCreate(result, data) {
            const names = result.tags.map((t) => t.name)
            let keywords = [result.category.name, result.name, ...names]
            let payload = {
                keywords: keywords
            }
            await strapi.services.product.update({ id: result.id }, payload);
        }
    }
};
