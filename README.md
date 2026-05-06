# agrinho2026coamo
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
}

/* Cabeçalho */
header {
    background-color: #4CAF50;
    color: white;
    padding: 20px 0;
    text-align: center;
}

header nav a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

header nav a:hover {
    color: #d1ffd1;
}

/* Seções */
section {
    padding: 40px 20px;
    max-width: 1000px;
    margin: 30px auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

section h2 {
    color: #4CAF50;
    margin-bottom: 20px;
}

section ul {
    list-style-type: disc;
    padding-left: 20px;
}

section a {
    color: #4CAF50;
    text-decoration: none;
}

section a:hover {
    text-decoration: underline;
}

/* Rodapé */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px 0;
    margin-top: 20px;
}