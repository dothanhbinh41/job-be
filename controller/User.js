var User = require('../models').User;
var Company = require('../models').Company;
var Role = require("../models").Role;
var Work = require("../models").Work;
var TypeOfWork = require("../models").TypeOfWork
var Tag = require("../models").Tag
require('dotenv').config()
let PAGE_SIZE = parseInt(process.env.PAGE_SIZE);
exports.create = (req, res) => {
    const mail = req.body.email;
    User.findAll({ where: { email: mail } }).then(data => {
        if (data.length !== 0) {
            res.json({ data: "email đã tồn tại!" })
        } else {
            Company.findAll({ where: { email: mail } }).then(data => {
                if (data.length !== 0) {
                    res.json({ data: "email đã tồn tại!" })
                } else {
                    User.create(req.body).then(data => {
                        res.json({ data: data })
                    }).catch(er => {
                        throw er;
                    })
                }
            })
        }
    }).catch(er => {
        throw er;
    })
}
exports.findall = (req, res) => {
    var page = req.query.page;
    var status = req.query.status;

    if (page || status) {
        if (page && !status) {

            page = parseInt(page)
            let soLuongBoQua = (page - 1) * PAGE_SIZE;
            User.findAndCountAll({ offset: soLuongBoQua, limit: PAGE_SIZE, include: [{ model: TypeOfWork }, { model: Tag }] }).then(data => {
                res.json({ data: data })
            }).catch(er => {
                throw er;
            })
        } else if (status && !page) {
            User.findAndCountAll({ where: { status: status }, include: [{ model: TypeOfWork }, { model: Tag }] }).then(data => {
                res.json({ data: data })
            }).catch(er => {
                throw er;
            })
        } else {
            page = parseInt(page)
            let soLuongBoQua = (page - 1) * PAGE_SIZE;
            User.findAndCountAll({ where: { status: status }, offset: soLuongBoQua, limit: PAGE_SIZE, include: [{ model: TypeOfWork }, { model: Tag }] }).then(data => {
                res.json({ data: data })
            }).catch(er => {
                throw er;
            })
        }
    } else {
        User.findAndCountAll({ include: [{ model: TypeOfWork }, { model: Tag }] }).then(data => {
            res.json({ data: data })
        }).catch(er => {
            throw er;
        })
    }
}
exports.findone = (req, res) => {
    User.findOne({ where: { id: req.params.id }, include: [{ model: TypeOfWork }, { model: Tag }] }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.findSaveWork = (req, res) => {
    User.findOne({ where: { id: req.params.id }, include: [{ model: TypeOfWork }, { model: Tag }, { model: Work, attributes: ['id', 'name', 'companyId', 'address', 'dealtime', 'price1', 'price2'], include: [{ model: Company, attributes: ['name', 'avatar'] }] }] }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.delete = (req, res) => {
    User.destroy({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.update = (req, res) => {
    User.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}