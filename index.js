function submitData(userName, userEmail) {
    return fetch ("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify ({
            name: userName,
            email: userEmail
        }) 
    })
    .then(function(response) {
    return response.json()
    })
    .then(function(object) {
    // return (object)
    document.getElementById("test").innerHTML = object.id
    })
    .catch(function(error) {
        alert("Something Went Wrong!")
        document.getElementById("test").innerHTML = (error.message)
    })
}


