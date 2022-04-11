const Movie = require('../Model/Movie');
const Joi = require('joi');

///////// create movie ///////////////////
exports.postmovie = async (req, res, next) => {
    //joi validate schema
    const schema = Joi.object({
        name: Joi.string().min(1).max(30).required(),
        image: Joi.string().required(),
        screen: Joi.string().max(30),
        language: Joi.string().max(30),
        certificate: Joi.string().required(),
        rating: Joi.string().max(30),
        

    })
    // joi validate input data
    var { error } = await schema.validate(req.body);
    if (error) {
        return res.status(400).send({ msg: error.details[0].message })
    }
    res.send('success')

    ////////////////// save data in mongodb using mongoose //////////////
    const movie = new Movie({
        name: req.body.name,
        image: req.body.image,
        language: req.body.language,
        certificate: req.body.certificate,
        rating: req.body.rating,
        screen:req.body.screen,
    })
    try {
        var response = await movie.save();
        res.send(response)
    } catch (err) {
        res.status(400).send(err)
    }
}

//////////////////////// get movie ///////////////////
exports.getmovie = async (req, res, next) => {
    const response = await Movie.find();
    res.send(response);
}

exports.updatemovie = async (req, res, next) => {
    const { movieId } = req.params;   // object destructure
    const response = await Movie.findByIdAndUpdate(movieId, {
        name: req.body.name,
        image: req.body.image,
        screen: req.body.screen,
        language: req.body.language,
        certificate: req.body.certificate,
        rating: req.body.rating
    });
    res.send(response);
}

////////// delete movie /////////////// 
exports.deletemovie = async (req, res, next) => {
    const { movieId } = req.params;   // object destructure 
    const response = await Movie.findByIdAndRemove(movieId)
    res.send(response);
}