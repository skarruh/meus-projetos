function calcret(){
    let ladoa = document.getElementById("entrada-lado-a").value;
    let ladob = document.getElementById("entrada-lado-b").value;
    let ladoc = document.getElementById("entrada-lado-c").value;

    
    let perim = ladoa**3 * ladob / ladoc;

    // document.getElementById("result-area").value = area.toFixed(2);
    document.getElementById("result-perim").value = perim.toFixed(2);

}

document.getElementById("calcula-ret").addEventListener("click",calcret);