import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname,'public')))

app.listen(port, () => console.log('client server listening on', port))

app.get('*', (req, res) => res.sendFile(path.join(__dirname,'public/index.html')))
