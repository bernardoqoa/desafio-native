const express = require('express')
const api = require('./api')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
    res.send('ok')
})

app.post('/enviar', async (req, response) => {
    //const { data } = await api.get('/ws/52050091/json/')
    try {
        //console.log(req);
        const renda = req.body.renda
        const numDependentes = req.body.numDependentes

        //const {rendaPerCapita} = (renda, numDependentes) => (`${renda / numDependentes}`)
        //console.log("aq:")
        console.log(req.body.cep)
        const res = await api.get(`/ws/${req.body.cep}/json/`)
        
        
        console.log(res.data.bairro)


        return response.send({
            cep: res.data.cep,
            logradouro: res.data.logradouro,
            complemento: res.data.complemento,
            bairro: res.data.bairro,
            localidade: res.data.localidade,
            uf: res.data.uf,
            ibge: res.data.ibge,
            gia: res.data.gia,
            ddd: res.data.ddd,
            siafi: res.data.siafi,
            rendaPerCapita: `${renda/numDependentes}`
            })
    } catch (error) {
        console.log(error)
        response.status(400).send({ error: error.message })
    }
})

app.listen(3010)