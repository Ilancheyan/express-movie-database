const {Movie, Cast, Crew, sequelize} = require('./index')

//test movie database CRUD
describe('Movie Database', () => {

    beforeAll(async() => {
        //reset database
        await sequelize.sync({force:true})
        //create array of movies
        const arrayOfMovies = [
            {name: 'Cars', genre: 'Animation', rating: 'general'},
            {name: 'Kung Fu Panda', genre: 'Animation', rating: 'general'}
        ]
        //create array of casts
        const arrayOfCasts =[
            {name: 'Owen-Wilson', age: 40, gender: 'male'},
            {name: 'Paul-Newman', age: 55, gender: 'male'},

        ]
        //create array of crew
        const arrayOfCrews =[
            {name: 'John', position: 'script writer', company: 'Disney'},
            {name: 'James', position: 'director', company: 'Pixar'},
        
        ]

        //add arrays to database
        await Movie.bulkCreate(arrayOfMovies)
        await Cast.bulkCreate(arrayOfCasts)
        await Crew.bulkCreate(arrayOfCrews)
    })

       //create instances of Movie Model for testing
       test('movie has a name', async() => {
        //read test instance from db
        const testMovie = await Movie.findOne({where: {name: 'Cars'}});
        expect(testMovie.name).toBe('Cars')
    })

        //create instances of Cast Model for testing
           test('cast member has a name', async() => {
            //read test instance from db
            const testCast = await Cast.findOne({where: {name: 'Owen-Wilson'}});
            expect(testCast.name).toBe('Owen-Wilson')
        })
        //create instances of Crew Model for testing
           test('crew has a name', async() => {
            //read test instance from db
            const testCrew = await Crew.findOne({where: {name: 'John'}});
            expect(testCrew.name).toBe('John')
           })

    afterAll(async()=> {
        // await sequelize.sync({force:true})
        sequelize.close()
    })
})
