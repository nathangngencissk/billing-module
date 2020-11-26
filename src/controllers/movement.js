const Movement = require('../models/Movement')

module.exports = () => {

    const controller = {};

    controller.getAll = (req, res) => {
        Movement.find()
            .then(movements => {
                res.status(200).json(movements);
            })
            .catch(error => res.status(500).json(error));
    }

    controller.add = (req, res) => {
        const newMovement = new Movement({
            title: req.body.title,
            originalValue: req.body.originalValue,
            interest: req.body.interest,
            fine: req.body.fine
        });

        newMovement
            .save()
            .then(movement => {
                res.json(movement);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    }

    controller.edit = (req, res) => {
        const newMovement = new Movement({
            _id: req.params.id,
            title: req.body.title,
            originalValue: req.body.originalValue,
            interest: req.body.interest,
            fine: req.body.fine
        });

        Movement.findOneAndUpdate({ _id: req.params.id }, newMovement, { new: true })
            .then(movement => {
                res.json(movement);
            })
            .catch(error => res.status(500).json(error));
    }


    controller.delete = (req, res) => {
        Movement.findOneAndDelete({ _id: req.params.id })
            .then(movement => {
                res.json(movement);
            })
            .catch(error => res.status(500).json(error));
    }

    return controller;
}