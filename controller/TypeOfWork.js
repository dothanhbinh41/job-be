var TypeOfWork = require('../models').TypeOfWork;

exports.create = (req, res) => {
    TypeOfWork.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.findall = (req, res) => {
    TypeOfWork.findAll().then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.findone = (req, res) => {
    TypeOfWork.findOne({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.delete = (req, res) => {
    TypeOfWork.destroy({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.update = (req, res) => {
    TypeOfWork.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}