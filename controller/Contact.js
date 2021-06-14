var Contact = require('../models').Contact;
require('dotenv').config()
let PAGE_SIZE = parseInt(process.env.PAGE_SIZE);
exports.create = (req, res) => {
    Contact.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.findall = (req, res) => {
    var page = req.query.page;
    if (page) {
        page = parseInt(page)
        let soLuongBoQua = (page - 1) * PAGE_SIZE;
        Contact.findAndCountAll({ offset: soLuongBoQua, limit: PAGE_SIZE }).then(data => {
            res.json({ data: data })
        }).catch(er => {
            throw er;
        })
    } else {
        Contact.findAndCountAll().then(data => {
            res.json({ data: data })
        }).catch(er => {
            throw er;
        })
    }
}
exports.findone = (req, res) => {
    Contact.findOne({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.delete = (req, res) => {
    Contact.destroy({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.update = (req, res) => {
    Contact.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}