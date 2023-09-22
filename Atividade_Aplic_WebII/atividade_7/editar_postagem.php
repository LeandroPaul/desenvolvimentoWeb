<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD</title>
</head>
<body>
<h1>Editar Postagem</h1>
    <?php
    $id = $_GET["id"];
    $postagens = file("dados.txt");
    $postagem = $postagens[$id];
    ?>

    <form action="editar_postagem.php?id=<?= $id ?>" method="post">
        <label for="postagem">Texto da Postagem:</label>
        <textarea id="postagem" name="postagem" required><?= $postagem ?></textarea>
        <br>
        <input type="submit" value="Salvar">
    </form>
    <a href="index.php">Voltar para a Lista</a>

    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $novaPostagem = $_POST["postagem"];
        $postagens[$id] = $novaPostagem;
        file_put_contents("dados.txt", implode(PHP_EOL, $postagens));
        header("Location: index.php");
    }
    ?>
</body>
</html>