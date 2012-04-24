//Stephanie Rivera
//Story plot: shopping adventure
//SDI Project 3

//JSON Data
var handleData = function (json) {
	for(var i=0; i<json.cc.length; i++) {
	var limits = json.cc[i];
	console.log("My " + limits.type + " has a limit of " + limits.limit);
	};
};
handleData(json);

//Object with Accessor: Story begins with deciding what to do
var myself = {
	hobby: "shopping", //Property: String
	bored: true, //Property: Boolean
	numTvs: 2, //Property: Number
	shows: ["Rick Steves", "Big Bang Theory", "The Office"], //Property:Array
	sayHobby: function () { //Method with no return
		if(this.bored === true) { //Conditional 
		console.log("I'm so bored. I think I'll go " + this.hobby);
		} else if (numTvs>=1) { //Nested Conditional
		console.log("I'll just watch some more " + this.shows[2] + ".");
		} else { 
		console.log("I guess I'll go study."); }
	}
}
myself.sayHobby();
myself.sayHobby = function() {
		console.log("I'd like to go shopping with a friend.");//Mutator Function
	}
//myself.hobby ="shopping with a friend.";
myself.sayHobby();

//Method Procedure :Look through address book and find friend to go with
var friend1 = {
	name: "Bekah", //Property String
	number: "258-6767",
	avail: "not available to go with me to the mall.",
	answer: function() {
	console.log(this.name + " is " + this.avail); } //Procedure Method
	}
var friend2 = {
	name: "Crystal", //Property String
	number: "258-6798",
	avail: "not available to go with me to the mall.",
	answer: function() {
	console.log(this.name + " is " + this.avail); }  //Procedure Method
	}
var friend3 = {
	name: "Londy", //Property Strings
	number: "258-6701",
	avail: "available to go with me to the mall.",
	answer: function() {
	console.log(this.name + " is " + this.avail); }  //Procedure Method
	}

var friends = [friend1, friend2, friend3]; //Local Variable

function call(invite) { //Function
	return invite.answer(); } //return array listed under call(friends[i])

function listOfFriends() { 
	var i = friends.length;
	for(i=0; i<friends.length; i++) { //For Loop
	call(friends[i]); }
};
listOfFriends();

//Figure out my spending

var paycheck = {
	bills: 200,
	check: 1000,
	calcSpend: function () {
 		var p = this.check - (this.bill * 2);
 		return p;
		console.log("I have " + p + "spend!"); } }
paycheck.calcSpend(this.check);

	
//First shop at the mall. Decide if I have enough money to purchase.

var shopping = {
	costHandbag: 60,
	costShoes: 100,
	money: 200,
	handbag: function (brandName,color) {
  
    if (brandName === "Betsey Johnson") {
      if ((color === 'skullblack' || color === 'cottoncandyblue') && 
      (this.money > this.costShoes + this.costHandbag)) {
            console.log("OMFG! Take my credit card now!");
      } else {
		console.log("Meh. I can do better.");
      }
    } else {
      return false;
    } }
}
shopping.handbag("Betsey Johnson", "cottoncandyblue");

//Other stores I'd like to look at

var mallStore = function (storeName, open) {
	this.storeName = storeName;
	this.open = open;
	}
var mall = new Array();
	mall[0] = new mallStore ("Dilliards", true);
	mall[1] = new mallStore ("H&N", false);
	mall[2] = new mallStore ("Forever 21", true);
var i = 0;
while (i<mall.length) {
	console.log(mall[i].storeName); i++;}

