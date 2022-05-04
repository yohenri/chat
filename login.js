var senha = document.getElementById('senha');
var email = document.getElementById('email');


  function pass(){
    if( senha.value  === '123456' && email.value === email){
     alert('Acesso concluído!'); 
     window.location.replace("./index.html")}
      else {
      alert('Acesso negado!');
       return false;
     }
    }



    pesquisar = function (){
        console.log ("a")
      var xhr = new XMLHttpRequest ();
      xhr.open ("GET",`https://barth.com.br/ApiChatCliqx/chat/verificarLogin.php?email=${email.value}&senha=${senha.value}`
      );
      xhr.send (null);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4)  {
          if (xhr.status === 200){
            response = JSON.parse(xhr.responseText)
            console.log (response.nome)
            localStorage.setItem('myCat', response.nome)
            const cat = localStorage.getItem('myCat');
            console.log(cat)
            window.location.href= "./index.html"
        
          }
      }
    }
}
