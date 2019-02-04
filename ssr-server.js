// ssr-server.js

console.log('ssr-server.js')

const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()

  server.get('/hello', (req, res) => {
    res.send('hello from express');
  })


  server.get('/product/detail/:id', (req, res) => {
    // Access DB
    // res.send(`your product id is ${req.params.id}`);
    return app.render(req, res, "/product", { productId: req.params.id })
  })
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(8080, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:8080')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})