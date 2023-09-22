<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD</title>
</head>
<body>
    <h1>Criar Nova Postagem</h1>
    <form action="criar_postagem.php" method="post">
        <label for="postagem">Texto da Postagem:</label>
        <textarea id="postagem" name="postagem" required></textarea>
        <br>
        <input type="submit" value="Criar">
    </form>
    <a href="index.php">Voltar para a Lista</a>

    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $novaPostagem = $_POST["postagem"];
        file_put_contents("dados.txt", $novaPostagem . PHP_EOL, FILE_APPEND);
        header("Location: index.php");
    }
    ?>
</body>
</html>