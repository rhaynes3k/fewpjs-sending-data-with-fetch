// Add your code here


function submitData(name, email){
  return fetch('http://localhost:3000/users',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(function(resp){
      return resp.json()
    })
    .then(function(data){
      document.body.innerHTML = data.id
    })
    .catch(function(error){
      document.body.innerHTML = error.message
    })
}

// fetch(destinationURL, configurationObject)
//   .then(function(resp){
//     debugger
//     return resp.json()
//   })
//   .then(function(object){
//     console.log(object)
//   })
//   .catch(function(error){
//     aler('Bad things! Ragnarok!')
//     console.log(error.message)
//   })
