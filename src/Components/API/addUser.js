async function addUser(user) {
  const apiUrl = "http://127.0.0.1:3001/addUser";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  console.log(user)

  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    //   return response.json(); 
      return response.json(); 
    })
    .then((data) => {
      // console.log("User added successfully:", data);
      
    })
    .catch((error) => {
      console.error("There was a problem adding the user:", error);
    });
}

module.exports = addUser;
