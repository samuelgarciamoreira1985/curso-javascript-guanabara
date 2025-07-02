/*const xhr = new XMLHttpRequest()
var documento

xhr.responseType = "json"
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status == 200){
        documento = xhr.response
        //documento = JSON.parse(documento)
        console.log(documento)
    } else {
        
    }
}

xhr.open("GET" , "https://api.github.com/users/samuelgarciamoreira")

xhr.send()*/

var xhr = new XMLHttpRequest()

var pessoa = {
                    "userId": 300,
                    "id": 40,
                    "title": "M",
                    "body": "deu certo"
             }

xhr.responseType = "json"
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4){
        console.log(xhr)
        console.log('deu certo')
    }
}

xhr.open("POST" , "https://jsonplaceholder.typicode.com/posts")

xhr.send(pessoa)