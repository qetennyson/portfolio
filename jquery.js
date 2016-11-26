/* Simple jQuery that replaces the text on the page so that additional
pages aren't required on the site.

In some cases, this can be a XSS vulnerability, but since the pages
using jQuery .html() contain no user input at all, this is relatively secure.

For the contact page, an entirely new DOM is loaded without these vulnerabilities */

$(document).ready(function(){
  $('.devlink').click(function(){
    $('.subhead').text('Development Experience');
    $('.body-text').empty().html('Students in the CIS program at UofL are exposed to a number of courses in software development, beginning with the concepts of object oriented programming in the context of C#. <br><br> Programming fundamentals like logic, variables, classes, and methods are discussed in these courses, and students develop their own C# programs over two semesters. <br> <br> Beyond the basic programming taught early in the curriculum, later courses cover web architecture, and provide a more robust understanding of full web stacks. <br><br> A personal favorite of mine during this time was AngularJS. Outside of class, a friend and I developed our own application for Google\'s StartupWeekend using Firebase\'s mBaaS and AngularJS. It anonymizes (is that a word?) speaker/audience Q&A interaction, and makes the process far more efficient. <br> <br> To see examples of my development work, you can review my <a href="#" id="body-link">GitHub</a>.');
  });
  $('#closeSubBtn').click(function(){
    $('.subhead').text('About Me');
    $('.body-text').empty().html('I\'m Quincy Tennyson, a network engineer in the Louisville area who enjoyes a bit of code from time to time. After seven years as an active duty Marine, I returned to Louisville in 2013 seeking my bachelor\'s degree in the University of Louisville\'s Computer Information Systems program. <br> <br> Interested in learning an entirely new set of skills, I opted for the web development emphasis and here we are. <br> <br> I believe in a highly functional design, without excessive frill, unless of course that\'s what you like! Development is a creative outlet for me, so I get to enjoy it without relying on it to sustain my family and lifestyle. <br> <br> I hope you enjoy browsing a history of my experience with this lightweight, simply designed website using a bit of HTML/CSS/JS and jQuery. <br> <br> While I have nearly a decade of experience in systems and network administration, my greatest talent lies in bonding together the strengths of any team into a targeted effort. A good team can accomplish the mission, but for a great team nothing is impossible.');
  });

});
