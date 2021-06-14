var Work = require('../models').Work;
var Company = require('../models').Company;
require('dotenv').config()

let PAGE_SIZE = parseInt(process.env.PAGE_SIZE);
exports.create = (req, res) => {
    Work.create(req.body).then(data => {
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
        Work.findAndCountAll({ offset: soLuongBoQua, limit: PAGE_SIZE, include: [Company] }).then(data => {
            res.json({ data: data })
        }).catch(er => {
            throw er;
        })
    } else {
        Work.findAndCountAll({ include: [Company] }).then(data => {
            res.json({ data: data })
        }).catch(er => {
            throw er;
        })
    }
}
exports.findone = (req, res) => {
    Work.findOne({ where: { id: req.params.id }, include: [Company] }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.delete = (req, res) => {
    Work.destroy({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.update = (req, res) => {
    Work.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}