
const api_url = "http://localhost:5500/post";
async function getanimes(){
    const response = await fetch(api_url);
    const arr = await response.json();
    console.log(arr);

    document.write("<h2>👑liste des animés👑</h2>");

    for (var i = 0; i< arr.length; i++){
        document.write("<style>body{background-image: linear-gradient(120deg,blue, red );color:aqua;font-family:'poppins',sans-serif;min-height: 100vh;}</style>");
        document.write("<br><br> ⚔ animé n° :" + i);
        var obj = arr[i];
        for(var key in obj){
            var value = obj[key];
            console.log(value);
            document.write("<br> 🔹 " + key +" : "+ value );
        }
    }

    document.write("<br><br><button><a href='Index.html'>retour</a></button>");
}


getanimes();