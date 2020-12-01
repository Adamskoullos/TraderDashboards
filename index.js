function sendEmail() {
			Email.send({
                SecureToken : "a1c1c120-6a20-4bb8-bd64-9404cddc6251",
				To : 'traderdashboards@gmail.com',
				From : "traderdashboards@gmail.com",
				Subject : "email subject",
				Body : "email body",
			})
			.then(function(message){
				alert("mail sent successfully")
			});
}