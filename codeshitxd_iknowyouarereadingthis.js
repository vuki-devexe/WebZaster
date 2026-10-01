var the_fucking_score = BigInt(0);

var phones = BigInt(0);
var Techzasters = BigInt(0);
var Mods = BigInt(0);
var Unbricked = BigInt(0);
var Romdown = BigInt(0);

var SuperUpgradeFinal = 20;

var hasSDCard = 0;
var hasTWRP = 0;
var hasROMs = 0;
var hasFasInt = 0;
var hasPhonePar = 0;

var costSD = BigInt("2500");
var costTWRP = BigInt("10500");
var costROMs = BigInt("125500");
var costFasInt = BigInt("2255000");
var costPhonePar = BigInt("3556410");

//incrise the fucking score Zaster01
function changetextzasterNOW() {
	document.getElementById("score").innerHTML = the_fucking_score;
	document.getElementById("shopp1item").innerHTML = "Buy a Phone: " + phones + " (Cost: " + formatBigInt(f) + ")";
	document.getElementById("shopp2item").innerHTML = "Hire Techclickers: " + Techzasters + " (Cost: " + formatBigInt(f2) + ")";
	document.getElementById("shopp3item").innerHTML = "Mod a Phone: " + Mods + " (Cost: " + formatBigInt(f3) + ")";
	document.getElementById("shopp4item").innerHTML = "Unbrick a Phone: " + Unbricked + " (Cost: " + formatBigInt(f4) + ")";
	document.getElementById("shopp5item").innerHTML = "Download a Rom: " + Romdown + " (Cost: " + formatBigInt(f5) + ")";
}
calcrice();
changetextzasterNOW();
document.getElementById("wonderwhothisguyishey?").addEventListener('click', function() {
	the_fucking_score = the_fucking_score + (BigInt(1) + phones);
	changetextzasterNOW()
});
document.getElementById("set1").addEventListener('click', function() {
	var a = document.getElementById("settings_page_2");
	if (a != null) {
		a.style.display = "table";
	}
	var a = document.getElementById("settings_page_1");
	if (a != null) {
		a.style.display = "none";
	}
	var a = document.getElementById("evilcolse");
	if (a != null) {
		a.style.display = "none";
	}
});
document.getElementById("EVILEXITMUHAHAHHAA").addEventListener('click', function() {
	var a = document.getElementById("settings_page_2");
	if (a != null) {
		a.style.display = "none";
	}
	var a = document.getElementById("settings_page_1");
	if (a != null) {
		a.style.display = "table";
	}
	var a = document.getElementById("evilcolse");
	if (a != null) {
		a.style.display = "block";
	}
});

//Close and open shop Zaster02
function CloseShop() {
	var a = document.getElementById("shop");
	if (a != null) {
		a.style.display = "none";
	}
}
function OpenShop() {
	var a = document.getElementById("shop");
	if (a != null) {
		a.style.display = "table";
	}
}

//Close and open settings Zaster03
function CloseSet() {
	var a = document.getElementById("set");
	if (a != null) {
		a.style.display = "none";
	}
}
function OpenSet() {
	var a = document.getElementById("set");
	if (a != null) {
		a.style.display = "table";
	}
}

//Format BigInt Zaster04
function formatBigInt(value) {
	var s = String(value);
	var len = s.length;

	if (len <= 3) {
		return s;
	} else if (len <= 6) {
		return s.substring(0, len - 3) + "." + s.substring(len - 3, len - 2) + "K";
	} else if (len <= 9) {
		return s.substring(0, len - 6) + "." + s.substring(len - 6, len - 5) + "M";
	} else if (len <= 12) {
		return s.substring(0, len - 9) + "." + s.substring(len - 9, len - 8) + "B";
	} else if (len <= 15) {
		return s.substring(0, len - 12) + "." + s.substring(len - 12, len - 11) + "T";
	} else if (len <= 18) {
		return s.substring(0, len - 15) + "." + s.substring(len - 15, len - 14) + "Qa";
	} else if (len <= 21) {
		return s.substring(0, len - 18) + "." + s.substring(len - 18, len - 17) + "Qi";
	} else if (len <= 24) {
		return s.substring(0, len - 21) + "." + s.substring(len - 21, len - 20) + "Sx";
	} else if (len <= 27) {
		return s.substring(0, len - 24) + "." + s.substring(len - 24, len - 23) + "Sp";
	} else if (len <= 30) {
		return s.substring(0, len - 27) + "." + s.substring(len - 27, len - 26) + "Oc";
	} else if (len <= 33) {
		return s.substring(0, len - 30) + "." + s.substring(len - 30, len - 29) + "No";
	} else {
		return s.substring(0, len - 33) + "." + s.substring(len - 33, len - 32) + "Dc";
	}
}

//shop shit Zaster05
var f;
var f2;
var f3;
var f4;
var f5;
function calcrice() {
	f = (phones + BigInt(1)) * BigInt(15) / BigInt(10) * BigInt(10);
	f2 = (Techzasters + BigInt(1)) * BigInt(200);
	f3 = ((Mods + BigInt(1)) * BigInt(35)) / BigInt(10) * BigInt(500);
	f4 = (Unbricked + BigInt(1)) * (BigInt(387)) / (BigInt(10)) * (BigInt(10000));
	f5 = (Romdown + BigInt(1)) * (BigInt(1000)) * (BigInt(35000));
}

function BuyPhone() {
	calcrice();
	if (the_fucking_score >= BigInt(f)) {
		the_fucking_score = the_fucking_score - f;
		phones = phones + BigInt(1);
		calcrice();
		changetextzasterNOW();
		
	}
}
function BuyTC() {
	calcrice();
	if (the_fucking_score >= BigInt(f2)) {
		the_fucking_score = the_fucking_score - f2;
		Techzasters = Techzasters + BigInt(1);
		calcrice();
		changetextzasterNOW();
	}
}
function BuyMod() {
	calcrice();
	if (the_fucking_score >= BigInt(f3)) {
		the_fucking_score = the_fucking_score - f3;
		Mods = Mods + BigInt(1);
		calcrice();
		changetextzasterNOW();
	}
}
function Unbrick() {
	calcrice();
	if (the_fucking_score >= BigInt(f4)) {
		the_fucking_score = the_fucking_score - f4;
		Unbricked = Unbricked + BigInt(1);
		calcrice();
		changetextzasterNOW();
	}
}
function BuyRomdown() {
	calcrice();
	if (the_fucking_score >= BigInt(f5)) {
		the_fucking_score = the_fucking_score - f5;
		Romdown = Romdown + BigInt(1);
		calcrice();
		changetextzasterNOW();
	}
}