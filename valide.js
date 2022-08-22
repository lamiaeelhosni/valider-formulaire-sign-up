// d = new Date();
// m =document.getElementById("msg");
// m.innerText="bonjour today is ";
// dh3 =document.getElementById("date");
// dh3.innerText="this year is "+new Date();

function Validator() {
   // var error msg
     ernom=document.getElementById('ernom');  
     erpre=document.getElementById('erpre');
     erem=document.getElementById('erem');
     erdn=document.getElementById('erdn');
     ertele=document.getElementById('ertele'); 
     erpw=document.getElementById('erpw'); 
     ervpw=document.getElementById('ervpw'); 
     ercp=document.getElementById('ercp'); 
     vg=document.getElementById('vg'); 
     erp=document.getElementById('erp'); 
   //  var input
    nom =document.getElementById("nom").value;
    prenom =document.getElementById("prenom").value;
    cp =document.getElementById("cp").value;
    dtn=document.getElementById('dn').value;
    email=document.getElementById("email").value;
    tele=document.getElementById("tele").value;
    pw=document.getElementById("pw").value;
    vpw=document.getElementById("vpw").value;
    p=document.getElementById("pay").value;
    RegExp('^[0-9]{10}$/','i');
    //nom
    var regEmail = new RegExp('^[0-9a-z._-]*[@]{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
    testemail = regEmail.test(email);
    if(nom.length<=3 ||!isNaN(nom)){
         ernom.innerText=" nom pas valid ";
         ernom.style.color="red";
      }else{
         ernom.innerText="⁎";
         ernom.style.color="green";
      }
      //prenom
      if(prenom.length<=3 ||!isNaN(prenom)){
         erpre.innerText=" prenom pas valid ";
         erpre.style.color="red";
      }else{
         erpre.innerText="⁎";
         erpre.style.color="green";
      }
      //email
      var regEmail = new RegExp('^[0-9a-z._-]*[@]{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
      testemail = regEmail.test(email);

     if(!testemail){
         erem.innerText=" email pas valide "; 
         erem.style.color="red";
      }else{
         erem.innerText="⁎";
         erem.style.color="green";
      }
      // telephon
      var regtele = new RegExp('^[0-9]{10}$','i');
      regtele  = regtele.test(tele);

      if(!regtele){
         ertele.innerText=" telephon pas valid";
         ertele.style.color="red";
         
      }else{
         ertele.innerText="⁎"; 
         ertele.style.color="green";
      }
      // age
      dif =new Date().getFullYear()-new Date(dtn).getFullYear();
      if(dtn==""){
         erdn.innerText=" obligatoire";
         erdn.style.color="red";
      }
      else if(dif<18){
         erdn.innerText=" age pas valid";
         erdn.style.color="red";
      }else{
         erdn.innerText="⁎";
         erdn.style.color="green";
      }
      //PW 
            var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
            
            if(!regularExpression.test(pw)) {
               erpw.innerText=" Pw pas valid"; 
               erpw.style.color="red";
            }else{
               erpw.innerText="⁎";
               erpw.style.color="green";
            }
      //V PW 
      if(pw!=vpw || !regularExpression.test(pw)) {
         ervpw.innerText=" PW different"; 
         ervpw.style.color="red";
      }else{
         ervpw.innerText="⁎";
         ervpw.style.color="green";
      }

      // code postal

      var regcp = new RegExp('^[0-9]{5}$','i');
      regcp  = regcp.test(cp);
      if(!regcp){
         ercp.innerText=" code postal pas valid";
         ercp.style.color="red";
         
      }else{
         ercp.innerText="⁎"; 
         ercp.style.color="green";
      }
      // gender
      g = document.querySelector('input[name = "g"]:checked');
      if(g ==null){  
         vg.innerText=" obligatoire";
         vg.style.color="red";
      } else {
         vg.innerText="⁎"; 
         vg.style.color=" green";
      }

      // chekbox
       pcontqct = document.querySelector('input[name= "pfcontact"]:checked');
       erpco = document.getElementById("erpfcontact"); 
        if(pcontqct==null){  
         erpco.innerText=" obligatoire";
         erpco.style.color="red";
         }else{
            erpco.innerText="⁎"; 
            erpco.style.color=" green";
         }
      // pays

      if( p == "" ) {
         erp.innerText=" choisis ton  pay ";
         erp.style.color="red";
      }else{
         erp.innerText="⁎";
         erp.style.color="green";
      }

   }      

