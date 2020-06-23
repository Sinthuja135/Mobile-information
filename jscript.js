function iPhoneFunction(){
	var i8plus = "iPhone 8plus";
	var i8 = "iPhone 8";
	var i7plus = "iPhone 7plus";
	
	var i8plusPage = i8plus.link("i8plus.html ","_blank");
	var i8Page = i8.link("i8.html");
	var i7plusPage = i7plus.link("i7plus.html");
	
	document.getElementById("iphone").innerHTML = i8plusPage+"<br>" + i8Page + "<br>" + i7plusPage;

}

function samsungFunction(){
	var sj7 = "Samsung Galaxy J7";
	var snote8 = "samsung-galaxy-note-8";
	var ss7 = "Samsung Galaxy S7";
	
	var sj7Page = sj7.link("SamsungGalaxyJ7.html");
	var snote8Page = snote8.link("samsung-galaxy-note-8.html");
	var ss7Page = ss7.link("SamsungGalaxyS7.html");
	
	document.getElementById("samsung").innerHTML = sj7Page+"<br>" + snote8Page + "<br>" + ss7Page;
	
}

function htcFunction(){
	var hcull = "HTC U11";
	var huu = "HTC U Ultra";
	var h10 = "HTC 10 evo";
	
	var hcullPage = hcull.link("htcu11.html");
	var huuPage = huu.link("htcultra.html");
	var h10Page = h10.link("htc10evo.html");
	
	document.getElementById("htc").innerHTML = hcullPage+"<br>" + huuPage + "<br>" + h10Page;
	
	
	
}



	
