<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD</title>
</head>
<body>
    <?php
    $id = $_GET["id"];
    $postagens = file("dados.txt");
    unset($postagens[$id]);
    file_put_contents("dados.txt", implode(PHP_EOL, $postagens));
    header("Location: index.php");
    ?>
</body>
</html>