module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get('db');
        const { productName, price, image_url } = req.body;

        db.get_inventory([productName, price, image_url])
            .then(inventory => res.status(200).send(inventory))
            .catch(err => {
                res.status(500).send("something went wrong.")
                console.log(err)
            })
    },

    createProduct: (req, res) => {
        const db = req.app.get('db');
        const { productName, price, image_url } = req.body;

        db.create_product([productName, price, image_url])
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
        const { productName } = req.params;
        console.log(productName);
        db.delete_product(productName)
        
            .then(() => {
                res.sendStatus(200)})
            .catch(err => {
                res.status(500).send("something went wrong.")
                console.log(err)
            })
    }



}

