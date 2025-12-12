<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrusel de Tarjetas</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.css"> <!-- Asegúrate de que la ruta sea correcta -->
    <link rel="stylesheet" type="text/css" href="../assets/vendor/owl-carousel/owl.carousel.css"> <!-- Asegúrate de que la ruta sea correcta -->
</head>
<body>

<div class="container mt-5">
    <h2 class="text-center">Carrusel de Tarjetas</h2>
    <div class="owl-carousel owl-theme">
        <div class="item">
            <div class="card">
                <img src="../assets/img/work/work-1.jpg" class="card-img-top" alt="Card image 1">
                <div class="card-body">
                    <h5 class="card-title">Título 1</h5>
                    <p class="card-text">Descripción de la tarjeta 1.</p>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="card">
                <img src="../assets/img/work/work-2.jpg" class="card-img-top" alt="Card image 2">
                <div class="card-body">
                    <h5 class="card-title">Título 2</h5>
                    <p class="card-text">Descripción de la tarjeta 2.</p>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="card">
                <img src="../assets/img/work/work-3.jpg" class="card-img-top" alt="Card image 3">
                <div class="card-body">
                    <h5 class="card-title">Título 3</h5>
                    <p class="card-text">Descripción de la tarjeta 3.</p>
                </div>
            </div>
        </div>
        <!-- Agrega más tarjetas según sea necesario -->
    </div>
</div>

<script src="../assets/js/jquery-3.5.1.min.js"></script> <!-- Asegúrate de que la ruta sea correcta -->
<script src="../assets/vendor/owl-carousel/owl.carousel.min.js"></script> <!-- Asegúrate de que la ruta sea correcta -->
<script src="script.js"></script>
<script>
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 3, // Número de tarjetas a mostrar
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    });
</script>

</body>
</html>