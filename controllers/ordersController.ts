module.exports = async(req, res, client) => {
    try {
        const results = await client.query('SELECT * FROM orders');
        const orders = results.rows;
        res.send(orders)
    } catch (err) {
        throw new Error('Failed to fetch orders');
    }
};
