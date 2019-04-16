const express = require("express");
const User = require("../models/users");
const router = express.Router();

router.get("/", (req, res) => {
    const limit = req.body && req.body.limit ? req.body.limit : undefined;
    const page = req.body && req.body.page ? req.body.page : undefined;
    const skip = page !== undefined && limit !== undefined && page !== 0 ? page * limit : undefined;
    const sort = req.body && req.body.sort ? req.body.sort : undefined;
    User.find().skip(skip).limit(limit).sort(sort)
        .then((users) => {
            res.send(users);
        })
        .catch(err => res.send(err.message));
});

router.get("/:id", (req, res) => {
    User.findById({_id: req.params.id})
        .then((user) => {
            res.send(user);
        })
        .catch(err => res.send(err.message));
});

router.post("/", (req, res) => {
    User.create(req.body)
        .then((user) => {
            res.send(user);
        })
        .catch(err => res.send(err.message));
});

router.put("/:id", (req, res) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then((user) => {
            res.send(user);
        })
        .catch(err => res.send(err.message));
});

router.delete("/:id", (req, res) => {
    User.findByIdAndRemove({_id: req.params.id})
        .then((user) => {
            res.send(user);
        })
        .catch(err => res.send(err.message));
});

module.exports = router;