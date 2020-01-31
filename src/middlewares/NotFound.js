module.exports = (req, res, next) => {
    res.sendStatus(404).send('Not Found');
    next();
}