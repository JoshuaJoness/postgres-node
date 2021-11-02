module.exports = async(req, res, client) => {
    try {
        const productId = req.params.id;
        const results = await client.query('SELECT * FROM products WHERE id = $1', [productId]);
        const product = results.rows;
        res.send(product)
    } catch (err) {
        throw new Error('Failed to get product');
    }
};
