const  { products } = require('../db.json');

module.exports = {
    getProducts: (req, res) => {
        res.json({products})
    },

    addProduct: (req, res) => {
        const { name } = req.body;
        products.push({
            name,
            id: products.length
        });
        res.json({
            'succes': true,
            msg: 'successfully added'
        });
    },

    updateProduct: (req, res) => {
        const { id } = req.params;
        const { name } = req.body;
        products.forEach((product, i) => {
            if (product.id === Number(id)){
                product.name = name;
            }
        }); 
        res.json({
            'success': true,
            'msg': 'updated'
        })
    },

    deleteProduct: (req, res) => {
        const { id } = req.params;
        products.forEach((product, i ) => {
            if (product.id === Number(id)) {
                products.splice(i, 1);
            }
        });
        res.json({
            'success': true,
            'msg': 'deleted'
        })
    }

};