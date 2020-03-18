// content of index.js
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end(`{
  	"coffees": [{
	  		"name": "latte", 
	  		"hasMilk": true,
	  		"image": "coffee1"
  		},
  		{
	  		"name": "flat white", 
	  		"hasMilk": true,
	  		"image": "coffee1"
  		},
  		{
	  		"name": "espresso", 
	  		"hasMilk": false,
	  		"image": "coffee1"
  		},
  		{
	  		"name": "cortado", 
	  		"hasMilk": true,
	  		"image": "coffee1"
  		},
  		{
	  		"name": "capuccino", 
	  		"hasMilk": true,
	  		"image": "coffee1"
  		}
  	],
  "milks": [{
	  		"name": "full", 
	  		"image": "milk1"
  		},
  		{
	  		"name": "skinny white", 
	  		"image": "milk2"
  		},
  		{
	  		"name": "oat", 
	  		"image": "milk3"
  		}
  	]
  }`)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})