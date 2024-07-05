// fungsi tombol hambuger button
function openNav() {
    document.getElementById("Overlay-Nav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("Overlay-Nav").style.display = "none";
}


var namaTema ;
if (localStorage.getItem("tema") === null ){
        // Store
        namaTema = "tema-light";
        localStorage.setItem("tema",namaTema );
        
    }
  else {
        // Retrieve
       var x = localStorage.getItem("tema")
       console.log(x)
       document.body.className = x; 
       if (x == "tema-dark"){
        document.getElementById("imgtema").src="Assets/sun.png";
        document.getElementById("imgtema2").src="Assets/sun.png";
       }else{
        document.getElementById("imgtema").src="Assets/moon.png";
        document.getElementById("imgtema2").src="Assets/moon.png";
       }           
    }

function switchtema (){
    var y = localStorage.getItem('tema');
    console.log(y);
    if (y == "tema-light"){
        namaTema = "tema-dark";
        console.log(namaTema);
        localStorage.setItem("tema",namaTema);
        document.body.className = namaTema;
        

    }else {
        namaTema = "tema-light";
        console.log(namaTema);
        localStorage.setItem("tema",namaTema);
        document.body.className = namaTema;
    }
}
function changeimg(){
    var z= localStorage.getItem('tema');
    if (z == "tema-light"){
        document.getElementById("imgtema").src="Assets/moon.png";
        document.getElementById("imgtema2").src="Assets/moon.png";
    }else {
        document.getElementById("imgtema").src="Assets/sun.png";
        document.getElementById("imgtema2").src="Assets/sun.png";
    }
}