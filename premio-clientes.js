function acmeRegalo(clientes) {
    var premioNavidad;
    for (i = 0; i <= clientes.length - 1; i++){
        var cuantia = Math.floor(Math.random() * 15000);
        if (cuantia > 9999) {
            premioNavidad = "Cesta de navidad con jamón ";
            document.write(clientes[i] + " " + cuantia + " eur " + premioNavidad);
        } else if (cuantia >= 5000 && cuantia<= 9999) {
            premioNavidad = "Cesta de navidad simplona ";
            document.write(clientes[i] + " " + cuantia + " eur " + premioNavidad);
        } else {
            premioNavidad = "Carta y pegatina de Acme ";
            document.write(clientes[i] + " " + cuantia + " eur " + premioNavidad);
        }
    }
    
}
acmeRegalo(["Juan Ramos", "Pedro Sanchez", "Begoña Gómez", "Frederick Williams",
"Roberta Williams", "Paco Porras", "La Veneno", "Profesor Moriarti",
"Pato Lucas", "Cristobal Montoro"]);

document.getElementById('impresion').innerHTML