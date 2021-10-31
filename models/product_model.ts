const Pool = require('pg').Pool
const pool = new Pool({
  user: 'joshuajones',
  host: 'localhost',
  database: 'Test',
  password: '123',
  port: 5432,
});
// TODO port info to env var

const getProducts = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            console.log(results)
            resolve(results);
        })
    }) 
}


// const createProduct = (body) => {
//     return new Promise(function(resolve, reject) {
//         const { name, email } = body
//         pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
//             if (error) {
//                 reject(error)
//             }
//             resolve(`A new merchant has been added added: ${results.rows[0]}`)
//         })
//     })
// }

// const deleteMerchant = (request) => {
//     return new Promise(function(resolve, reject) {
//         const id = parseInt(request.params.id)
//         pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
//             if (error) {
//                 reject(error)
//             }
//             resolve(`Merchant deleted with ID: ${id}`)
//         })
//     })
// }

module.exports = {
    getProducts,
    // createMerchant,
    // deleteMerchant,
}