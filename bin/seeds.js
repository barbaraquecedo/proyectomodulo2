require("../config/db.config")

const { fake } = require("faker")
const faker = require('faker')
const Plan = require("../models/plan.model")
const forestIds = [10,103,1006,1015,1016,1020,1023,1039,1043,11,116,128,17,190,216,229,287,289]
const cityIds = [283,288,290,308,320,351,354,369,405,42,420,43,437,522,57,579,670,690,779,862]
const brunchIds = [283,288,290,308,320,351,354,369,405,42,420,43,437,522,57,579,670,690,779,862]
const cinemaIds = [283,288,290,308,320,351,354,369,405,42,420,43,437,522,57,579,670,690,779,862]

Plan.deleteMany({})
.then(() => {
    for (let i = 0; i < 15; i++) {
        const randomRating = Math.floor(Math.random() * (5 - 1 + 1) + 1) // 1 - 5
        const randomIndx = Math.floor(Math.random() * (cityIds.length)) // 0 - 15 
        const randomArrId = cityIds[randomIndx] // 5

        const plan = new Plan({
            title: faker.name.findName(),
            description: faker.lorem.sentences(5),
            image: `https://picsum.photos/id/${randomArrId}/200/300`,
            interests: ["city"],
            rating: randomRating,
            location: faker.address.streetAddress(),
            price: 100,
            date: 'October 15, 1996 05:35:32',
            time: {
                hours: 15,
                minutes: 30 
            }
        })
    
        plan.save()
            .then(newPlan => {
                console.log(`${newPlan.location} has been saved succesfully`)
            })
            .catch(error => console.log(error))
    }

    // aqui otro for
    for (let i = 0; i < 15; i++) {
        const randomRating = Math.floor(Math.random() * (5 - 1 + 1) + 1) // 1 - 5
        const randomIndx = Math.floor(Math.random() * (forestIds.length)) // 0 - 15 
        const randomArrId = forestIds[randomIndx] // 5
        console.log(randomArrId)
        const plan = new Plan({
            title: faker.name.findName(),
            description: faker.lorem.sentences(5),
            image: `https://picsum.photos/id/${randomArrId}/200/300`,
            interests: ["forest"],
            rating: randomRating,
            location: faker.address.streetAddress(),
            price: 100,
            date: 'October 15, 1996 05:35:32',
            time: {
                hours: 15,
                minutes: 30 
            }
        })
    
        plan.save()
            .then(newPlan => {
                console.log(`${newPlan.location} has been saved succesfully`)
            })
            .catch(error => console.log(error))
    }


    for (let i = 0; i < 15; i++) {
        const randomRating = Math.floor(Math.random() * (5 - 1 + 1) + 1) // 1 - 5
        const randomIndx = Math.floor(Math.random() * (brunchIds.length)) // 0 - 15 
        const randomArrId = brunchIds[randomIndx] // 5
        console.log(randomArrId)
        const plan = new Plan({
            title: faker.name.findName(),
            description: faker.lorem.sentences(5),
            image: `https://picsum.photos/id/${randomArrId}/200/300`,
            interests: ["forest"],
            rating: randomRating,
            location: faker.address.streetAddress(),
            price: 100,
            date: 'October 15, 1996 05:35:32',
            time: {
                hours: 15,
                minutes: 30 
            }
        })
    
        plan.save()
            .then(newPlan => {
                console.log(`${newPlan.location} has been saved succesfully`)
            })
            .catch(error => console.log(error))
    }

    for (let i = 0; i < 15; i++) {
        const randomRating = Math.floor(Math.random() * (5 - 1 + 1) + 1) // 1 - 5
        const randomIndx = Math.floor(Math.random() * (cinemaIds.length)) // 0 - 15 
        const randomArrId = cinemaIds[randomIndx] // 5
        console.log(randomArrId)
        const plan = new Plan({
            title: faker.name.findName(),
            description: faker.lorem.sentences(5),
            image: `https://picsum.photos/id/${randomArrId}/200/300`,
            interests: ["forest"],
            rating: randomRating,
            location: faker.address.streetAddress(),
            price: 100,
            date: 'October 15, 1996 05:35:32',
            time: {
                hours: 15,
                minutes: 30 
            }
        })
    
        plan.save()
            .then(newPlan => {
                console.log(`${newPlan.location} has been saved succesfully`)
            })
            .catch(error => console.log(error))
    }
})


