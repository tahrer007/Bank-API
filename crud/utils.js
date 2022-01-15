const fs = require('fs');
const loadUsers = () => {
    try {
      const dataBuffer = fs.readFileSync('./db/users.json');
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
    } catch (e) {
      return [];
    }
  };

  const stringToJson = (message, string, message2, string2) => {
    return JSON.stringify({ [message]: string, [message2]: string2 });
  };
  
  const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync('./db/users.json', dataJSON);
  };

  module.exports = {
    loadUsers,
    stringToJson,
    saveUsers
  };
  