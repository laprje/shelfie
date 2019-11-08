module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get('db');
        const { name, price, image_url } = req.body;

        db.get_inventory([name, price, image_url])
            .then(inventory => res.status(200).send(inventory))
            .catch(err => {
                res.status(500).send("something went wrong.")
                console.log(err)
            })
    },

    createProduct: (req, res) => {
        const db = req.app.get('db');
        const { name, price, image_url } = req.body;

        db.create_product([name, price, image_url])
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.status(500).send('something went wrong.')
                console.log(err)
            })

    },


    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const { product_id } = req.params;
        console.log(product_id)
        db.delete_product(product_id)

            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send('something went wrong.');
                console.log(err);
            })
    },

    editProduct(req, res) {
        const db = req.app.get('db')
        const { name, price, image_url, product_id } = req.body
        
        db.edit_product({name, price, image_url, product_id: +product_id})
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            res.status(500).send('something went wrong.')
            console.log(err)
        })
    },


    oneProduct(req, res) {
        const db = req.app.get('db')
        db.one_product(+req.params.product_id)
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            res.status(500).send('something went wrong.')
            console.log(err)
        })
    }



}

