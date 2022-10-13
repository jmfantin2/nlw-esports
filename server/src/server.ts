import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    {id:1,name:'ad1'},
    {id:2,name:'ad2'},
    {id:3,name:'ad3'},
  ])
})

app.listen(3333)