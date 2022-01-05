const {readdirSync} = require('fs');
const ascii = require('ascii-table')
let table = new ascii("Events")
table.setHeading('EVENTS', 'LOAD STATUS')

module.exports = (client) => {
  readdirSync("./Events/").forEach((file) => {
    const events = readdirSync("./Events/").filter((file) => file.endsWith(".js"))
    for(let file of events) {
      let pull = require(`../Events/${file}`);
      if(pull.name){
        client.events.set(pull.name, pull)
      } else {
          table.addRow(file, 'EVENT REGISTERED')
        continue;
      }
    }
  })
  console.log(table.toString())
}