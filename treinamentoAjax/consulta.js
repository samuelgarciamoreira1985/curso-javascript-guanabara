const recuperar = () =>{

    var icep = document.getElementById('cep')
    var resCep = Number(icep.value) 

    var itela = document.getElementById('tela')
    var xhr = new XMLHttpRequest()
    xhr.responseType = "json"

    xhr.onreadystatechange = () =>{
        if (xhr.readyState === 4){
            let resp = JSON.stringify(xhr.response)
            //alert(resp)
            itela.innerHTML += resp
        }
    }

    //xhr.open("GET" , `https://viacep.com.br/ws/${resCep}/json/`)
    xhr.open("GET" , "https://viacep.com.br/ws/" + resCep + "/json/")

    xhr.send()
        

}