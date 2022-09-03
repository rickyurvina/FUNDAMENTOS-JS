// Fetch API PROMISES

const url = "https://jsonplaceholder.typicode.com/users"

const consultarAPI = () => {
    fetch(url)//promise es un valor que esta disponible ahora y en el futuro
        .then( respuesta => respuesta.json())
        .then( resultado => {
            resultado.forEach( comentario => {
                console.log(comentario)
            })
        })
}
consultarAPI();