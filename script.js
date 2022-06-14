
btn.onclick = () =>{
fetch("http://localhost:5500/post/"+ Champ.value)
.then(res=>res.json())
.then(data => {
    output.textContent="";
    output.textContent = `Nom de l'animé : ${data.name}`;
    output2.textContent = `Numéro : ${data._id}`;
    output3.textContent = `Nombre de vue :  ${data.nbvue}`;
    output4.date = `Date de parution : ${data.date}`;
  
    

})

}
