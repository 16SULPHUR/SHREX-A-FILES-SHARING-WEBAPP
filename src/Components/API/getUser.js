async function getUser(id) {
  const apiUrl = `http://127.0.0.1:3001/getUser?id=${id}`; // Construct URL with query parameter

  const requestOptions = {
    method: "GET", // Use GET method for fetching data
    headers: {
      "Content-Type": "application/json",
    },
  };

  // console.log(id);

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      return false;
    }

    const data = await response.json();

    // console.log("User found successfully:", data);
    return true;
  } catch (error) {
    console.error("There was a problem finding the user:", error);
    return false;
  }
}

module.exports = getUser;
