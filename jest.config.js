const { getJestProjects } = require('@nrwl/jest');

module.exports = {
    projects: [
        ...getJestProjects(),
        '<rootDir>/apps/demo',
        '<rootDir>/libs/homepage',
        '<rootDir>/libs/products',
        '<rootDir>/libs/shopping-cart',
        '<rootDir>/libs/orders',
        '<rootDir>/libs/user-profile',
        '<rootDir>/libs/resource',
        '<rootDir>/libs/testing',
    ],
};
