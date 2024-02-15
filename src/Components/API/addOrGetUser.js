const addUser = require("./addUser");
const getUser = require("./getUser");

async function addOrGetUser(id, user){
    // console.log(await getUser(id))
    if(! await getUser(id)){
        addUser(user)
    }
}

module.exports = addOrGetUser;