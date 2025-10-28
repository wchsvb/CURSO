        document.getElementById("myBtn").addEventListener("click", function() {
            document.getElementById("demo").innerText = "¡Hola, has hecho clic en el botón!";
        });

        var x = document.getElementById("btn2");
        x.addEventListener("mouseover", funcion1);
        x.addEventListener("click", funcion2);
        x.addEventListener("mouseout", funcion3);
       
        function funcion1() {
            document.getElementById("demo2").innerText = "¡Estás pasando el ratón sobre el botón!";
        }
        function funcion2() {
            document.getElementById("demo2").innerText = "¡Has hecho clic en el botón!";
        }
        function funcion3() {
            document.getElementById("demo2").innerText = "¡Has quitado el ratón del botón!";
        }
