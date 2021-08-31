module.exports = (application) => {

application.get('/', (req, res) => {
    res.send('<h1>Helo Word</h1>')
})

}