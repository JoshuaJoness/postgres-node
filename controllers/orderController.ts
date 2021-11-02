const randomName = require('node-random-name');

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

module.exports = async(req, res, client) => {
    try {
        const { id: productId, price } = req.body;

        const fullName = randomName();
        const firstName = fullName.split(' ')[0];
        const lastName = fullName.split(' ')[1];
        const addressLine1 = `${Math.round(Math.random() * (999 - 1 + 1))} ${randomName()} Street`;
        const addressLine2 = `Apt. ${Math.round(Math.random() * (999 - 1 + 1))}`;
        const currentDate = Date.now();

        const results = await client.query(
            'INSERT INTO orders (product_id, price_paid, quantity, first_name, last_name, address_line_1, address_line_2, order_date, expected_doa) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
            [productId, price, 1, firstName, lastName, addressLine1, addressLine2, addDays(currentDate, 0), addDays(currentDate, 3)]
        );
        // TODO decrement quantity from products table
        res.sendStatus(200);
    } catch (err) {
        throw new Error('Failed to creater order');
    }
};
