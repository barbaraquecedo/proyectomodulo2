const { hashSync } = require("bcryptjs");
const hbs = require("hbs");
hbs.registerPartials(`${__dirname}/../views/partials`);

hbs.registerHelper('formatDate', (date, options) => {
  let array = date.toString().split(' ');
  return `${array[0]} ${array[1].replace(/,/g, '')}`;
})

hbs.registerHelper('formatFullDate', (date, options) => {
  let array = date.toString().split(' ');
  return `${array[0]} ${array[1]} ${array[2].replace(/,/g, '')}`;
})


hbs.registerHelper('userLikes', (user, plan) => {
  if(user.likes.includes(plan.id)){
    return "text-danger"
  } else {
    return ""
  }
})


hbs.registerHelper('planPays', (user, plan) => {
  if(user.pays.includes(plan.id)){
    return "text"
  } else {
    return ""
  }
})

