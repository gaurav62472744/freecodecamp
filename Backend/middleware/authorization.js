const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    jwt.verify(token, process.env.SECRET_CODE || '', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token is not valid' });
        } else {
            req.user = decoded.id;
            next();
        }
    });
};

module.exports= authorization;