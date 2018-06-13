var bio = {
    "name": "Rebecca Hahn",
    "role": "Web Developer",
    "contacts": {
        "email": "rebecca.hahn87@gmail.com",
        "twitter": "@I3kka",
        "github": "I3ekka",
        "location": "Münster, Germany"
    },
    "picture": "images/fry.jpg",
    "welcomeMessage": "Heya! I'm Rebecca, web developer, PyLadies Chapter lead, JS enthusiast. I'm currently looking for new adventures in web development and/or front-end engineering to gain " +
    "valuable practical experience while pursuing my computer science degree (part-time).",
    "skills": ["JavaScript", "Python", "Web Development", "Object-Oriented Programming"]
};

var work = {
    "jobs": [{
        "employer": "Henworx GmbH & Co. KG",
        "title": "Junior Front-End Developer",
        "location": "Münster (NRW), Germany",
        "datesWorked": "December 2017 - May 2018",
        "description": "I was specifically hired to help deliver the new online reservation system for Luxus Vacation Properties. This involved quickly " +
        "getting up to speed on a number of technologies, including Ruby On Rails, Ember, and Ember Data to name a few as well as " +
        "quickly becoming familiar with business needs. I " +
        "collaborated closely with the business and other team members to ensure project success. " +
        "We successfully delivered the site in April 2017 and continue to make iterative improvements and add features as " +
        "needed."
    },
        {
            "employer": "Henworx - New Media & Software",
            "title": "Software QA Specialist",
            "location": "Münster (NRW), Germany",
            "datesWorked": "March 2015 - November 2017",
            "description": "I was hired to work on Localize's online system, which involved knowledge in C# development, jQuery, knockoutJS, " +
            "SQL Server, Razor templates and Wordpress. I had limited experience with some of these so I learned quickly to become " +
            "productive as soon as possible.  I also lead discussions around better communication between the development team and " +
            "the business as well as definiing the company vision.  I enjoyed my time at Localize and learned a tremendous amount " +
            "from everyone I worked with there."
        }
    ]
};

var education = {
    "schools": [{
        "name": "University of Hagen",
        "datesAttended": "2017 - 2019",
        "location": "Hagen, Germany",
        "degree": "B.Sc. Computer Science",
        "major": "Computer Science",
        "url": "www.#.ca"
    },
        {
            "name": "Udacity",
            "datesAttended": "June 2018",
            "location": "Online Class",
            "degree": "Nanodegree",
            "major": "Front-End Development",
            "url": "https://www.udacity.com"
        },
        {
            "name": "FreeCodeCamp",
            "datesAttended": "June 2018",
            "location": "Online Class",
            "degree": "Online Certificate",
            "major": "Front-End Development",
            "url": "https://www.freecodecamp.com"
        }
    ]
};


var projects = {
    "projects": [{
        "title": "HTML5 Canvas Game",
        "date": "December 2017",
        "description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer " +
        "Nanodegree.",
        "images": ["images/project_2.png"],
        "url": "#"
    },
        {
            "title": "Online Portfolio",
            "date": " November 2017",
            "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
            "Nanodegree.",
            "images": ["images/project_2.png"],
            "url": "#"
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").append(formattedRole);
$("#header").append(formattedName);
$("#topContacts").append(formattedContactInfo);
$("#footerContacts").append(formattedContactInfo);
$("#header").append(formattedHTMLwelcomeMsg);
$(".welcome-message").prepend(formattedHTMLbioPic);


function displayBio() {
    if (bio.skills.length > 0) {
        $("#name").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
}

displayBio();

function displayWork() {
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);

        for (var i = 0; i < work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
}

displayWork();

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[i].date);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDate);
            $(".project-entry:last").append(formattedProjectDescription);

            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
};

projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }
};

education.display();

// $("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);