//const configurationObject = {
  //  method: "POST",
    //headers: {
      //"Content-Type": "application/json",
      //"Accept": "application/json",
    //},
    //body: JSON.stringify({
      //dogName: "Byron",
      //dogBreed: "Poodle",
    //}),
  //};
  
 // fetch("http://localhost:3000/dogs", configurationObject)
   // .then(function (response) {
   // return response.json();
   // })
    //.then(function (object) {
    //console.log(object);
    //});


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
    console.log(object)
    })
    .catch(function(error) {
        alert("Something Went Wrong!")
        console.log(error.message)
    })
}


