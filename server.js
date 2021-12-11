const express = require('express')
const path = require('path') //node native module
const { Movie } = require('./model/movie')
const { Crew } = require('./model/crew')
const { Cast } = require('./model/cast')

const app = express()
const port = 3000
app.use(express.json())


//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))


//GET method on /movie route returns all movies
app.get('/movies', async (req,res) => {
   // console.log(req)
    //find all instances of the Model Movies
    const allMovies = await Movie.findAll()
    //respond with allMovies as a json objeect
    res.json(allMovies)
})

//PUT method on  /movies route returns single movie
// app.put('/movies/:id', async (req,res) => {
//     // console.log(req)
//       //find all instances of the Model Movie
//       const updateMovies = await Movie.update(req.body,{
//           where:{id:req.params.id}
//       })
//       //respond with allMovies as a json objeect
//       res.json(updateMovies)
//   })

//POST method to create a new Movie
app.post('/movies', async (req,res) => {
     console.log(req)
     //creat a new Movie
     let newMovies = await Movie.create(req.body)

     //respond with new Movie as a json objeect
     res.send(newMovies ? "Movie Created" :  "Failed Creation")
 //   res.send("Movie Created")
 })

 //delete one movie by id
app.delete('/movies/:id', async (req,res) => {
    const deleted = await Movie.destroy({
        where: {id: req.params.id}
    })
    //use boolen return value from destroy method return to generate a string message
    res.send(deleted ? "Deleted Movie" : "Deletion Failed")
})

//GET method on  /movies route returns single movie
app.get('/movies/:id', async (req,res) => {
  // console.log(req)
    //find all instances of the Model Movie
    const thisMovies = await Movie.findByPk(req.params.id)
    //respond with allMovies as a json objeect
    res.json(thisMovies)
})

//PUT method on  /movies route updates a single movie
app.put('/movies/:id', async (req,res) => {
    // console.log(req)
      //find all instances of the Model Movie
      const updateMovies = await Movie.update(req.body,{
          where:{id:req.params.id}
      })
      //respond with allMovies as a json objeect
      res.json(updateMovies)
  })

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
