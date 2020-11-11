
const axios = require('axios')
const Title = require('../models/Title')
const Movement = require('../models/Movement')

module.exports = () => {

    const controller = {};

    controller.getAll = (req, res) => {
        Title.find()
            .then(titles => {
                res.status(200).json(titles);
            })
            .catch(error => res.status(500).json(error));
    }

    controller.add = (req, res) => {
        const newTitle = new Title({
            openValue: req.body.openValue,
            originalValue: req.body.originalValue,
            closingDate: req.body.closingDate,
            state: req.body.state,
            type: req.body.type,
            discount: req.body.discount,
            interest: req.body.interest,
            document: req.body.document
        });

        newTitle
            .save()
            .then(title => {
                res.json(title);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    }

    controller.edit = (req, res) => {
        const newTitle = new Title({
            _id: req.params.id,
            openValue: req.body.openValue,
            originalValue: req.body.originalValue,
            closingDate: req.body.closingDate,
            state: req.body.state,
            type: req.body.type,
            discount: req.body.discount,
            interest: req.body.interest,
            document: req.body.document
        });

        Title.findOneAndUpdate({ _id: req.params.id }, newTitle, { new: true })
            .then(title => {
                res.json(title);
            })
            .catch(error => res.status(500).json(error));
    }


    controller.delete = (req, res) => {
        Title.findOneAndDelete({ _id: req.params.id })
            .then(title => {
                res.json(title);
            })
            .catch(error => res.status(500).json(error));
    }

    controller.pay = async (req, res) => {
        let titleId = req.params.id
        let type = req.body.type
        let value = req.body.value
        let interest = req.body.interest
        let fine = req.body.fine
        let paymentType = req.body.paymentType
        let cardExpiryDate = req.body.cardExpiryDate
        let cardIssuer = req.body.cardIssuer

        let title = await Title.findById(titleId);

        if (paymentType == "CREDIT_CARD") {
            title.state = "SUBSTITUIDO";
            title.closingDate = cardExpiryDate;
            title.recipient = cardIssuer;

            const newMovement = new Movement({
                title: titleId,
                type: type,
                originalValue: value,
                interest: interest,
                fine: fine
            });

            let movement = await newMovement.save();

            res.json(movement);
        }
        else {
            if (value == title.openValue) {
                title.state = "LIQUIDADO";

                const newMovement = new Movement({
                    title: titleId,
                    type: type,
                    originalValue: value,
                    interest: interest,
                    fine: fine
                });

                let movement = await newMovement.save();

                res.json(movement);
            }
            else {
                const newMovement = new Movement({
                    title: titleId,
                    type: type,
                    originalValue: value,
                    interest: interest,
                    fine: fine
                });

                let movement = await newMovement.save();

                res.json(movement);
            }
        }
    }

    return controller;
}