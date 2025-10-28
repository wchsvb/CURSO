function realizarSuma(){
    const numero1 = parseFloat(document.getElementById("num1").value);
    const numero2 = parseFloat(document.getElementById("num2").value);
    const resultado = numero1 + numero2;
    document.getElementById("resultado").innerText = "El resultado de la suma es: " + resultado;
}