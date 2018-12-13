$(main);

function main(){
    $("#go").click(requisicao);
}

function montaPagina(obj){
        $(".resultado").html(obj["logradouro"] + "<br>" + obj["bairro"]
         + "<br>" + obj["localidade"] + "<br>" + obj["uf"]); 
    
    
    //var bairro = obj['bairro'];
    //$(".resultado").html(bairro);
}

function requisicao() {
    var xhttp = new XMLHttpRequest();
    var valor = document.getElementById('cep').value;
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText); 
        montaPagina(obj)
      }
    };
    
  xhttp.open("GET", "https://viacep.com.br/ws/" + valor + "/json/", true); 
  xhttp.send();
}