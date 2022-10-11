<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submitted data</title>
</head>
<body>
    <h1>The info you gave:</h1>
    <p>Your is name is <?php echo $_POST["fname"];?> <?php echo $_POST["lname"];?>.</p>
    <p>You gave the email address <?php echo $_POST["email"];?></p>
    <p>Your phone number is <?php echo $_POST["pnumber"];?></p>
    <?php
    if (isset($_POST["prefEmail"])) {
        echo "Your prefered contact method is email";
    }   elseif (isset($_POST["prefPnumber"])) {
        echo "Your prefered contact method is through telephone";
    } else {
        echo "You did not set a preferred contact method";
    }
    ?>
    <h2>Your message:</h2>
    <h3><?php echo $_POST["msg"];?></h3>
    <p><?php echo $_POST["message"];?></p>
<!-- Wanted to make the submitted file downloadable here instead of just the name-->
    <p>and your attached file: <?php echo $_POST["file"];?></p>
</body>
</html>