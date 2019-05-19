const UserAPP = require('./model.js');
exports.create = (req, res) => {
   
    const user = new UserAPP({
    name: req.body.name ,
    gender: req.body.gender,
    age:req.body.age,
    });

    user.save()
    .then(data => {
        res.send(data);
    })
};
exports.findAll = (req, res) => {
    UserAPP.find()
    .then(users => {
        res.send(users);
    })
};
exports.findOne = (req, res) => {
    UserAPP.findById(req.params.userId)
    .then(user => res.send(user))
};
exports.update = (req, res) => {
   

    UserAPP.findByIdAndUpdate(req.params.userId, {
        name: req.body.name ,
        gender: req.body.gender,
        age:req.body.age,
        }, {new: true})
    .then(user => {res.send(user); })
};
exports.delete = (req, res) => {
    UserAPP.findByIdAndRemove(req.params.userId)
    .then(User => {res.send({message: "Deleted"});
    })
};