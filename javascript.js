
var u1 = document.getElementById("u1");
var u2 = document.getElementById("u2");
const cat = localStorage.getItem('myCat');
var mensagem = document.getElementById("mensagem");
var lis = document.getElementById("lis");
var response = undefined;
var response2 = undefined;

u1.value=cat;
u1.disabled=true;
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

vv: function (){ 
  console.log ("a")
var xhr = new XMLHttpRequest ();
xhr.open ("GET",`https://barth.com.br/ApiChatCliqx/chat/receberUsuarios.php`
);
xhr.send (null);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4)  {
    if (xhr.status === 200){
      response2 = JSON.parse(xhr.responseText)
      console.log (response2)
      console.log ("200") 
      lis.innerHTML = "";
      for (let i = 0; i < response2.length; i++) {
        console.log (response2[i])

} 
  } 

     } }
        
        
    },








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
          var dd = document.createElement ('dd');
          var li = document.createElement ('li');
          var dtText = document.createTextNode(
            `${response[i].origem}`
          )
          dt.appendChild(dtText);


          var ddText = document.createTextNode (
            `${response[i].mensagem}`
            )
            dd.appendChild(ddText);
            
            
            
          
         

          
          li.appendChild(dt);
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
  



