/*
This is empty on purpose! Your code to build the resume will go here.
 */

//var formattedName = HTMLheaderName.replace("%data%", "Ben Melchionno");

//var formattedRole = HTMLheaderRole.replace("%data%", "Product Manager");

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);


var bio ={
	"name": "Ben Melchionno", 
	"role":"Project Manager",
	"contacts": {
		"mobile":"514-555-555",
		"email": "benmelchionno@hotmail.com",
		"github": "benmelchionno",
		"twitter":"@benmelch",
		"location": "Montreal"
	},
	"welcome":"It does not matter how slowly you go as long as you do not stop. -Confucius", 
	"skills":["problem solving", "team building","leadership","management"],
	"bioPic": "images/bioPic2.jpg"
};

var work ={
			"jobs":[
			{
				"employer":"United Nations",
				"title": "Quality Assurance Manager",
				"location":"Brindisi",
				"dates": "2004",
				"discription":"Managed a team of QA Anaylst"
			},
			{
				"employer":"Bombardier Aerospace",
				"title": "Manager Solution Archietecture",
				"location":"Montreal",
				"dates": "2012",
				"discription":"Managed a team of Solution Architects"
			},
			{
				"employer":"Traction on Demand",
				"title": "Business Development Manager",
				"location":"Montreal Canada",
				"dates": "2015",
				"discription":"Business Development Eastern Canada"
			}

		]

};

var projects ={
				"projects":[
				{
					"title":"Customer Portal",
					"dates":"2016",
					"description": "A digital libary for customers to retrieve technical documentation",
					"image": "images/BombardierBusiness.png"
				}
			]

};

var education = {
  					"schools": 
  					[
					  	{
					  	 "name" :"Concordia University",
					  	 "location" :"Montreal, Canada",
					  	 "majorr": ["Management of Information Systems"],
					  	 "degree dates":2000
					  	 
					  	},
					  	{
					  	 "name" :"Vanier College",
					  	 "city" :"Montreal, Canada",
					  	 "majors": "Commerce",
					  	 "graduation":1997,
					  	 "online course":"none"
					  	}
					],
					"online Course":
					[
						{
							"title":"Intro to Programming",
							"school": "Udacity",
							"dates": "2016",
							"url":"https://www.udacity.com/nanodegree"
						}
					]
				};
$("#main").append(education["school"]);


function inName(name) {
  name = bio.name.trim().split(" ");
  console.log(name);
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  return name[0] + " " + name[1];
};

$("#main").append(internationalizeButton);


// to see a google msap of the places lived

$("#mapDiv").append(googleMap);


