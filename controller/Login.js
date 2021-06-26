require("dotenv").config()
const Company = require('../models').Company;
const User = require('../models').User;
const jwt = require('jsonwebtoken')
const Role = require("../models").Role;
exports.loginCompany = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    Company.findAll({
        where: { email: email, password: password },
    }).then(data => {
        if (data[0] !== undefined) {
            var company = {
                id: data[0].id,
                name: data[0].name,
                avatar: data[0].avatar,
                type: "company"
            };
            var token = jwt.sign({ user: company }, process.env.ACCESS_TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '3h' });
            res.json(token);
        } else {
            res.json("err");
        }
    }
    ).catch(err => {
        res.json({ err: err.message })
    })
}
exports.checkLogin = (req, res) => {
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLowerCase() === 'bearer') {
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, company) => {
            if (err) {
                return res.status(403).send({
                    message: 'token loi roi'
                })
            } else {
                res.json({ data: company })
            }
        })
    } else {
        return res.status(403).send({
            message: 'UN'
        });
    }
};
exports.loginUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findAll({
        where: { email: email, password: password }
    }).then(data => {
        if (data[0] !== undefined) {
            var user = {
                id: data[0].id,
                // role: data[0].Roles[0].name,
                // mota: data[0].Roles[0].mota
                avatar: data[0].avatar,
                name: data[0].name,
                type: "user"
            };
            var token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '3h' });
            res.json(token);
        } else {
            res.json("err");
        }
    }
    ).catch(err => {
        res.json({ err: err.message })
    })
}