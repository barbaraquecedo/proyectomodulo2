const hbs = require("hbs");
hbs.registerPartials(`${__dirname}/../views/partials`);

hbs.registerHelper('formatDate', (date, options) => {
    let array = date.toString().split(' ');
   return `${array[0]} ${array[1].replace(/,/g, '')}`;
  })

