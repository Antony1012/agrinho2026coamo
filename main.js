<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pato Andando</title>

<style>

body{
    margin:0;
    overflow:hidden;
    background:#87CEEB;
}

/* chão */
.chao{
    position:absolute;
    bottom:0;
    width:100%;
    height:150px;
    background:#4CAF50;
}

/* pato */
#pato{
    position:absolute;
    bottom:120px;
    left:-150px;
    font-size:100px;
    animation:pular 0.6s infinite alternate;
}

/* animação do pato */
@keyframes pular{
    from{
        transform:translateY(0px);
    }

    to{
        transform:translateY(-10px);
    }
}

</style>
</head>
<body>

<div id="pato">🦆</div>
<div class="chao"></div>

<script>

const pato = document.getElementById("pato");

let posicao = -150;

function andar(){

    posicao += 3;

    pato.style.left = posicao + "px";

    // volta pro começo
    if(posicao > window.innerWidth){
        posicao = -150;
    }

    requestAnimationFrame(andar);
}

andar();

</script>

</body>
</html>