var jwt = require('jsonwebtoken');
var SEED = require('../config/config').SEED;

// Verificar token

exports.verificaToken = function(req, res, next) {
    var token = req.query.token;
    jwt.verify(token, SEED, (err, decoded) => {
        if(err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Token incorrecto',
                errors: err
            });
        }

        req.usuario = decoded.usuario; // mandas la info del usuario que ha relizado la acción (crear, borrar...)

        next(); // si no hay error continua con las llamadas correspondientes
    })
}
    
