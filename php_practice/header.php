<!Doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>

    </head>
    <body>
        <header>
            <div>
                <form action="includes/login.inc.php" method="post">
                    <input type="text" name="maiuid" placeholder="Username/E-mail...">
                    <input type="password" name="pwd" placeholder="Password...">
                    <button type="submit" name="login-submit">Login</button>
                </form>
                <a href="signup.php">Signup</a>
                <form action="includes/logout.inc.php" method="post">
                    <button type="submit" name="logout-submit">Logout</button>
                </form>
            </div>
        </header>
