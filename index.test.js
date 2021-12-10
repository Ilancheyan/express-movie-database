const {Movie, Cast, sequelize} = require('./index')

//test movie database CRUD
describe('Movie Database', () => {

    beforeAll(async() => {
        //reset database
        await sequelize.sync({force:true})
        //create array of movies
        const arrayOfMovie = [
            {name: 'Cars', genre: 'Animation', rating: 'general'},
            {name: 'Kung Fu Panda', genre: 'Animation', rating: 'general'}
        ]
        //create array of casts
        const arrayOfCasts =[
            {name: 'Owen Wilson', age: 45, gender: male},
            {name: 'Paul Newman', age: 55, gender: male},

        ]
        //add arrays to database
        await Movie.bulkCreate(arrayOfMovies)
        await Cast.bulkCreate(arrayOfCasts)
    })
    afterAll(async()=> {
        // await sequelize.sync({force:true})
        sequelize.close()
    })
})