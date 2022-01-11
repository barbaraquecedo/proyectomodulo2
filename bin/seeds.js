require("../config/db.config")

const faker = require('faker')
const Plan = require("../models/plan.model")
const plansTitles = ["paseito por el campo", "de tapas por donosti"]

Promise.all([
    Plan.deleteMany()
])
    .then(() => {
        for (let i = 0; i < 30; i++) {
            const randomRating = Math.floor(Math.random() * (5 - 1 + 1) + 1)

            const plan = new Plan({
                title: faker.name.findName(),
                description: "description of the plan",
                image: "https://i.pravatar.cc/300",
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
    .catch(error => {
        console.error(error)
    })