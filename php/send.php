<?php
$uploaddir = "img/";
$uploadfile = $uploaddir.basename($_FILES['userfile']['name']);
echo '<pre>';
if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
    echo "";
    print_r($_FILES);
} else {
    echo "error";
}

?>
<META HTTP-EQUIV="Refresh" CONTENT="1; URL=/success.html">