function registerCheck(){
	var a = document.getElementById("firstname").value;
	var b = document.getElementById("lastname").value;
	var c = document.getElementById("email").value;
	var d = document.getElementById("password").value;
	var e = document.getElementById("conpassword").value;
	
	if(a == '' || b == '' || c=='' || d=='' || e==''){
		alert("Values Cannot Be Empty!!");
	}
	else{
		validateCheck(d,e);
	}
}

function validateCheck(d,e){
	if(d != e){
		alert("Passwords are not match. Try Again!!");
	}
}

function loginCheck(){
	var a = document.getElementById("uname").value;
	var b = document.getElementById("upword").value;
	
	if(a=='' || b==''){
		alert("Did not Username or Password. Please Enter!!");
	}
	
}

function paymentCheck(){
		var a = document.getElementById("name").value;
		var b = document.getElementById("email").value;
		var c = document.getElementById("card").value;
		var d = document.getElementById("date").value;
		var e = document.getElementById("number").value;
		var f = document.getElementById("address").value;
		
		if(a=='' || b=='' || c=='' || d=='' || e=='' || f==''){
			alert("Value Cannot be Empty. Please Fill it!!");
		}
}


function check(){
	var a = document.getElementsByTagName('input')[1].value;
	var b = document.getElementsByTagName('input')[2].value;
	var c = document.getElementsByTagName('input')[3].value;
	var d = document.getElementsByTagName('input')[4].value;
	
	if(a=='' || b=='' || c=='' || d=='') {
		alert("Values Cannot be Empty!!!");
	}
}