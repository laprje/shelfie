module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get('db');
        const { product_name, price, image_url } = req.body;

        db.get_inventory([product_name, price, image_url])
            .then(inventory => res.status(200).send(inventory))
            .catch(err => {
                res.status(500).send("something went wrong.")
                console.log(err)
            })
    },

    createProduct: (req, res) => {
        const db = req.app.get('db');
        const { product_name, price, image_url } = req.body;

        db.create_product([product_name, price, image_url])
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.status(500).send('something went wrong.')
                console.log(err)
            })

    },

    // deleteProduct: (req, res) => {
    //     const db = req.app.get('db');
    //     const { product_name } = req.params;
    //     console.log(product_name);
    //     db.delete_product(product_name)
        
    //         .then(() => {
    //             res.sendStatus(200)})
    //         .catch(err => {
    //             res.status(500).send("something went wrong.")
    //             console.log(err)
    //         })
    // }

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
        const { product_name, image, price, product_id } = req.body
        db.edit_product({product_name, image, price, product_id: +product_id})
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
        db.one_product(+req.params.id)
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            res.status(500).send('something went wrong.')
            console.log(err)
        })
    }



}

