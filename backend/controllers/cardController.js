const Card = require('../models/Card'); 

module.exports = {
    getAllCards : async (req, res) => {
        try {
            const cards = await Card.find({});
            res.status(200).json(cards);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getCard : async (req, res) => {
        try {
            const card = await Card.findOne({title: req.params.title});
            if (!card) return res.status(404).json({ message: 'Card not found' });
            res.status(200).json(card);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    postCard : async (req, res) => {
        try {
            // check if card already exists
            const existingCard = await Card.findOne({ title: req.body.title });
            if (existingCard) return res.status(400).json({ message: 'Card already exists' });

            // validation field
            if (!req.body.title ||!req.body.desc)
                return res.status(400).json({ message: 'Please provide title and description' });

            // create new card
            const newCard = new Card({
                title: req.body.title,
                desc: req.body.desc
            });
            const card = await newCard.save();
            res.status(201).json(card);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}