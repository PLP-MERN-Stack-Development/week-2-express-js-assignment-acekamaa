let products = [];

module.exports = {
    getAll: () => products,
    getById: (id) => products.find((p) => p.id === id),
    create: (product) => {
        products.push(product);
        return product;
    },
    update: (id, data) => {
        const index = products.findIndex((p) => p.id === id);
        if (index !== -1) {
            products[index] = { ...products[index], ...data};
            return products[index];
        }
        return null;
    },
    search: (query) => products.filter((p) => p.name.includes(query)),
};