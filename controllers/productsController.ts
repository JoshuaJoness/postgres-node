module.exports = async(req, res, client) => {
    try {
        const results = await client.query('SELECT * FROM products');
        const products = results.rows;
        res.send(products);
    } catch (err) {
        throw new Error('Failed to fetch products');
    }
};

