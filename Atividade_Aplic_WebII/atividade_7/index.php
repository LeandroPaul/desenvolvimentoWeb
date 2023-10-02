<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD</title>
</head>
<body>
    <h1>Lista de Postagens</h1>
    <ul>
        <?php
        $postagens = file("dados.txt");
        foreach ($postagens as $postagem) {
            echo "<li>$postagem</li>";
        }
        ?>
    </ul>
    <a href="criar_postagem.php">Criar Nova Postagem</a>
</body>
</html>