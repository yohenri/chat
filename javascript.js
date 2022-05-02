var u1 = document.getElementById("u1");
var u2 = document.getElementById("u2");
var mensagem = document.getElementById("mensagem");
var lis = document.getElementById("lis");
var response = undefined;

console.log('teste');



var chat = {
  
  /* chatz: function () {
      var xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
          `https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=${u1}&destino=${u2}`
        
      );
      xhr.send(null); */


      /* xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status == 200) {
            response = JSON.parse(xhr.responseText);
            console.log(response); */


            /* for (i = 0; i < response.results.length; i++) {
                console.log(response.results[i].poster_path); */
                

   /*        }
        }
    }
}
    }
}

 */






pesquisar: function (){
    console.log ("a")
  var xhr = new XMLHttpRequest ();
  xhr.open ("GET",`https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=${u1.value}&destino=${u2.value}`
  );
  xhr.send (null);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4)  {
      if (xhr.status === 200){
        response = JSON.parse(xhr.responseText)
        console.log (response)
        console.log ("200") 
        lis.innerHTML = "";
        for (let i = 0; i < response.length; i++) {
          console.log (response[i])
          var dt = document.createElement ('dt');
          var li = document.createElement ('li');
          var dtText = document.createTextNode (
            `${response[i].mensagem}`
          )
          dt.appendChild(dtText);
          li.appendChild(dt);

          var dd = document.createElement ('dd');
          var ddText = document.createTextNode (
            `${response[i].mensagem}`
          )

          dd.appendChild(dtText);
         

          var dd = document.createElement ('dd');
          var ddText = document.createTextNode (
            `${response[i].mensagem}`

          )
          dd.appendChild(ddText);
          li.appendChild(dd);

          lis.appendChild(li);          
        }
      }
      console.log ("4")


    }
    
  }
},

  



  enviar: function (){
    obj = { 
      origem : u1.value,
      destino : u2.value,
      mensagem : mensagem.value,
    };
  var xhr = new XMLHttpRequest ();
  xhr.open ("POST","https://barth.com.br/ApiChatCliqx/chat/inserirMensagem.php"
  );
console.log (obj)

  xhr.send (JSON.stringify(obj));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4)  {
      if (xhr.status === 201){
        console.log (obj)
        console.log ("201") 
        
      }
      console.log ("4")
      
      
    }
    
  },setInterval(function(){
    chat.pesquisar()
  },4000)
}
}
  



