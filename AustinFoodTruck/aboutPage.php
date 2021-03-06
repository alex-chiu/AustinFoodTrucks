<!DOCTYPE html>

<html lang="en">

<head>
	<title>About - Austin's Food Trucks</title>
	<meta charset="UTF-8">
	<meta name="description" content="about">
	<meta name="author" content="Group 2">
	<link rel="stylesheet" href="about.css">
	<script src="https://code.jquery.com/jquery-3.5.1.min.js"
			integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
			crossorigin="anonymous">
	</script>
	<script src="./about.js"></script>
</head> 

<body>

	<div class="container">
		<div id="header">
			<a href="./homePage.php"><img id="logo" src="./images/logo.jpeg" alt="logo" width="8%"></a>

			<ul id="nav-bar">
				<li><a href="./homePage.php">HOME</a></li>
				<li><a href="./reviewsPage.php">REVIEWS</a></li>
				<li><a href="./mapPage.php">MAP</a></li>
				<li><a href="./aboutPage.php">ABOUT</a></li>
                <?php
                    if( isset($_COOKIE["login"]) and $_COOKIE["login"] == "valid"){
                        echo '<li><a href="./ratePage.php">RATE</a></li> ';
                    }
                ?>
			</ul>
		</div>

		<div id="about-us">

			<div id="title">
				<h1>Who We Are</h1> 
			</div>

			<div id="cards">
				<div class="card">
					<img src="./images/robsProfile.jpg" alt="avatar">
					<div class="card-text">
						<h4><b>Robert Martinez</b></h4>
						<p>Role: Developer<br>About: I am a third year Math major pursuing a career in software development.</p>
					</div>
				</div>

				<div class="card">
					<img src="./images/edoardoProfile.jpg" alt="avatar">
					<div class="card-text">
						<h4><b>Edoardo Palazzi</b></h4>
						<p>Role: Developer<br>About: I am a fourth year Economics major pursuing a career in the Business Tech industry.</p>
					</div>
				</div>

				<div class="card">
					<img src="./images/alexProfile.jpg" alt="avatar">
					<div class="card-text">
						<h4><b>Alexander Chiu</b></h4>
						<p>Role: Designer <br>About: I am a fourth year Aerospace Engineering major planning on pursuing a graduate degree.</p>
					</div>
				</div>

				<div class="card">
					<img src="./images/blakeProfile.jpeg" alt="avatar">
					<div class="card-text">
						<h4> <b>Blake Turney</b> </h4>
						<p>Role: Graphic Designer/Researcher <br>About: I am a third year math major, and I am pursuing a career in data science. </p>
					</div>
				</div>
			</div>

		</div>
		
	</div>

	<div class="container" id="contact-form">
		<form id="form-submission" action="./feedback.php" method="POST" onsubmit="verifyForm();">
			<h1>Contact Us</h1>

			<label for="name"> Name</label>
			<input type="text" id="name" name="name" placeholder="Your name..">

			<label for="email">Email</label>
			<input type="text" id="email" name="email" placeholder="youremail@email.com">

			<label for="subject">Subject</label>
			<textarea id="subject" name="subject" placeholder="Leave a comment" style="height:200px"></textarea>

			<div id="buttons">
				<input type="submit" value="Submit"/>
				<input type="reset" value="Reset"/>
			</div>
		</form>
	</div>
</body>
</html>
