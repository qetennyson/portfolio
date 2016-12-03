/* Simple jQuery that replaces the text on the page so that additional
pages aren't required on the site.

In some cases, this can be a XSS vulnerability, but since the pages
using jQuery .html() contain no user input at all, this is relatively secure.

For the contact page, an entirely new DOM is loaded without these vulnerabilities */

$(document).ready(function(){
  $('.devlink').click(function(){
    $('.subhead').text('Development Experience');
    $('.body-text').empty().html('<p>Students in the CIS program at UofL are exposed to a number of courses in software development, beginning with the concepts of object oriented programming in the context of C#. <br><br> Programming fundamentals like logic, variables, classes, and methods are discussed in these courses, and students develop their own C# programs over two semesters. <br> <br> Beyond the basic programming taught early in the curriculum, later courses cover web architecture, and provide a more robust understanding of full web stacks. <br><br> A personal favorite of mine during this time was AngularJS. Outside of class my friend, Drew Hill, and I developed our own application for Google\'s StartupWeekend using Firebase\'s mBaaS and AngularJS. Full disclosure, Drew wrote most of this, I merely discovered the use case! It anonymizes (is that a word?) speaker/audience Q&A interaction, and makes the process far more efficient. We call it <a href="http://www.socratesapp.co/#/">Socrates</a> after the storied philosopher. <br> <br> To see examples of my development work, you can review my <a href="https://github.com/qetennyson" id="body-link">GitHub</a> or view specific examples via the navbar stage left.<br></p> <h3> MVC Sample </h3><p>Basic Azure Hosted Pet Shop Animal Model</p><code class="code1"> @model PetShop2.Models.Animal@{ ViewBag.Title = "Create"; } @using (Html.BeginForm()) { @Html.AntiForgeryToken() <div class="form-horizontal"> <hr /> @Html.ValidationSummary(true, "", new { @class = "text-danger" }) <div class="form-group"> @Html.LabelFor(model => model.Name, htmlAttributes: new { @class = "control-label col-md-2" }) <div class="col-md-10"> @Html.EditorFor(model => model.Name, new { htmlAttributes = new { @class = "form-control" } }) @Html.ValidationMessageFor(model => model.Name, "", new { @class = "text-danger" }) </div> </div></code<br><br>s');
  });
  $('#closeSubBtn').click(function(){
    $('.subhead').text('About Me');
    $('.body-text').empty().html('I\'m Quincy Tennyson, a network engineer in the Louisville area who enjoyes a bit of code from time to time. After seven years as an active duty Marine, I returned to Louisville in 2013 seeking my bachelor\'s degree in the University of Louisville\'s Computer Information Systems program. <br> <br> Interested in learning an entirely new set of skills, I opted for the web development emphasis and here we are. <br> <br> I believe in a highly functional design, without excessive frill, unless of course that\'s what you like! Development is a creative outlet for me, so I get to enjoy it without relying on it to sustain my family and lifestyle. <br> <br> I hope you enjoy browsing a history of my experience with this lightweight, simply designed website using a bit of HTML/CSS/JS and jQuery. <br> <br> While I have nearly a decade of experience in systems and network administration, my greatest talent lies in bonding together the strengths of any team into a targeted effort. A good team can accomplish the mission, but for a great team nothing is impossible.<br><br> In my free time, I enjoy swimming, reading, photography, and PC gaming.');
  });

  $('.devlinkcontact').click(function(){
    $('.middle-text').empty().html('<h3>Development Experience<h3> <p>Students in the CIS program at UofL are exposed to a number of courses in software development, beginning with the concepts of object oriented programming in the context of C#. <br><br> Programming fundamentals like logic, variables, classes, and methods are discussed in these courses, and students develop their own C# programs over two semesters. <br> <br> Beyond the basic programming taught early in the curriculum, later courses cover web architecture, and provide a more robust understanding of full web stacks. <br><br> A personal favorite of mine during this time was AngularJS. Outside of class my friend, Drew Hill, and I developed our own application for Google\'s StartupWeekend using Firebase\'s mBaaS and AngularJS. Full disclosure, Drew wrote most of this, I merely discovered the use case! It anonymizes (is that a word?) speaker/audience Q&A interaction, and makes the process far more efficient. We call it <a href="http://www.socratesapp.co/#/">Socrates</a> after the storied philosopher. <br> <br> To see examples of my development work, you can review my <a href="https://github.com/qetennyson" id="body-link">GitHub</a> or view specific examples via the navbar stage left.<br></p> <h3> MVC Sample </h3><p>Basic Azure Hosted Pet Shop Animal Model</p> <br> <code> @model PetShop2.Models.Animal@{ ViewBag.Title = "Create"; } @using (Html.BeginForm()) { @Html.AntiForgeryToken() <div class="form-horizontal"> <hr /> @Html.ValidationSummary(true, "", new { @class = "text-danger" }) <div class="form-group"> @Html.LabelFor(model => model.Name, htmlAttributes: new { @class = "control-label col-md-2" }) <div class="col-md-10"> @Html.EditorFor(model => model.Name, new { htmlAttributes = new { @class = "form-control" } }) @Html.ValidationMessageFor(model => model.Name, "", new { @class = "text-danger" }) </div> </div></code<br><br><p>Java Class</p><code>');
  });
  /*$('#closeSubBtn').click(function(){
    $('.subhead').text('About Me');
    $('.body-text').empty().html('I\'m Quincy Tennyson, a network engineer in the Louisville area who enjoyes a bit of code from time to time. After seven years as an active duty Marine, I returned to Louisville in 2013 seeking my bachelor\'s degree in the University of Louisville\'s Computer Information Systems program. <br> <br> Interested in learning an entirely new set of skills, I opted for the web development emphasis and here we are. <br> <br> I believe in a highly functional design, without excessive frill, unless of course that\'s what you like! Development is a creative outlet for me, so I get to enjoy it without relying on it to sustain my family and lifestyle. <br> <br> I hope you enjoy browsing a history of my experience with this lightweight, simply designed website using a bit of HTML/CSS/JS and jQuery. <br> <br> While I have nearly a decade of experience in systems and network administration, my greatest talent lies in bonding together the strengths of any team into a targeted effort. A good team can accomplish the mission, but for a great team nothing is impossible.');
  });*/
  $('.netlink').click(function(){
    $('.subhead').text('Problems of Network');
    $('.body-text').empty().html('I enjoy networking for the same reason I enjoy programming from time to time. Unlike dealing with "systems" issues, that often seem vague and solved by some form of IT roulette on occasion, problems of network are a bit more logical. <br> <br> If we understand the layers of the OSI model, and network fundamentals, then we can solve even the most complex problems with at least some sort of methodology. <br> <br> We have a real toolset, so to speak. I like that. I also like the precision and logic of networking. We, like the programmer, rely on our configuration\'s high accuracy to get people talking. <br><br> Our success isn\'t measured by installation bars, but by the sound of our customers on a VOIP call, or the joy in seeing a distant coworker\'s face over Telepresence on their birthday, rather than just hearing them on a conference call. <br> <br> I received my CCENT in 2016, and am pursuing my CCNA for early 2017. During this pursuit, I regularly use Cisco Packet Tracer and GNS3 - network simulation software for both certification study and real world testing. <br> <br> I\'ve included some practical examples below.</p> <br> <br> <figure> <img src="router-stick-diagram.jpg" class="networkfigure"> <figcaption class="caption">Figure 1 - A basic router-on-a-stick configuration, common in SOHO network solutions.</figcaption> </figure> <br> <br> <figure> <img src="net.png" class="networkfigure"> <figcaption class="caption">Figure 2 - A full enteprise network with VOIP. A costly, but efficient network infrastructure with Layer 3 switching and relatively high performance routers.</figcaption> </figure>');
  });
  $('.netlinkcontact').click(function(){
    $('.middle-text').empty().html('<h3>Problems of Network</h3> <p>I enjoy networking for the same reason I enjoy programming from time to time. Unlike dealing with "systems" issues, that often seem vague and solved by some form of IT roulette on occasion, problems of network are a bit more logical. <br> <br> If we understand the layers of the OSI model, and network fundamentals, then we can solve even the most complex problems with at least some sort of methodology. <br> <br> We have a real toolset, so to speak. I like that. I also like the precision and logic of networking. We, like the programmer, rely on our configuration\'s high accuracy to get people talking. <br><br> Our success isn\'t measured by installation bars, but by the sound of our customers on a VOIP call, or the joy in seeing a distant coworker\'s face over Telepresence on their birthday, rather than just hearing them on a conference call. <br> <br> I received my CCENT in 2016, and am pursuing my CCNA for early 2017. During this pursuit, I regularly use Cisco Packet Tracer and GNS3 - network simulation software for both certification study and real world testing. <br> <br> I\'ve included some practical examples below.</p> <br> <br> <figure> <img src="router-stick-diagram.jpg" class="networkfigure"> <figcaption class="caption">Figure 1 - A basic router-on-a-stick configuration, common in SOHO network solutions.</figcaption> </figure> <br> <br> <figure> <img src="net.png" class="networkfigure"> <figcaption class="caption">Figure 2 - A full enteprise network with VOIP. A costly, but efficient network infrastructure with high performance, redundant core Layer 3 switching.</figcaption> </figure>');
  });
  $('#closeNetSubBtn').click(function(){
    $('.subhead').text('About Me');
    $('.body-text').empty().html('I\'m Quincy Tennyson, a network engineer in the Louisville area who enjoyes a bit of code from time to time. After seven years as an active duty Marine, I returned to Louisville in 2013 seeking my bachelor\'s degree in the University of Louisville\'s Computer Information Systems program. <br> <br> Interested in learning an entirely new set of skills, I opted for the web development emphasis and here we are. <br> <br> I believe in a highly functional design, without excessive frill, unless of course that\'s what you like! Development is a creative outlet for me, so I get to enjoy it without relying on it to sustain my family and lifestyle. <br> <br> I hope you enjoy browsing a history of my experience with this lightweight, simply designed website using a bit of HTML/CSS/JS and jQuery. <br> <br> While I have nearly a decade of experience in systems and network administration, my greatest talent lies in bonding together the strengths of any team into a targeted effort. A good team can accomplish the mission, but for a great team nothing is impossible. <br> <br> In my free time, I enjoy swimming, reading, photography, and PC gaming.');
  });

  $('.analysislink').click(function(){
    $('.subhead').text('Analysis and Other Writing');
    $('.body-text').empty().html('<p class=".body-text">The culmination of the CIS curriculum is a strategic IT assessment for a non-profit organization. I provided an assessment for Kentucky Horsemen\'s Benevolent and Protective Association (HBPA), a firm assisting backstretch horse racing workers with headquarters here in Louisville. <br><br> In addition, students complete a number of assignments centered around ethical issues in IT. I\'ve included an example of one of these case studies as well. <ul class> <li><a href="Kentucky%20HBPA%20Strategic%20Assessment.pdf" class="doclink" target="_blank">Kentucky HBPA Strategic Analysis</a></li> </ul> <ul> <li><a href="CaseReport2.pdf" class="doclink" target="_blank">Intellectual Property</a></li> </ul> </p>');
  });

  $('.analysislinkcontact').click(function(){
    $('.middle-text').empty().html('<h3>Analysis and Other Writing</h3><p class=".body-text">The culmination of the CIS curriculum is a strategic IT assessment for a non-profit organization. I provided an assessment for Kentucky Horsemen\'s Benevolent and Protective Association (HBPA), a firm assisting backstretch horse racing workers with headquarters here in Louisville. <br><br> In addition, students complete a number of assignments centered around ethical issues in IT. I\'ve included an example of one of these case studies as well. <ul class> <li><a href="Kentucky%20HBPA%20Strategic%20Assessment.pdf" class="doclink" target="_blank">Kentucky HBPA Strategic Analysis</a></li> </ul> <ul> <li><a href="CaseReport2.pdf" class="doclink" target="_blank">Intellectual Property</a></li> </ul> </p>');
  });



/* jQuery that validates the contact form submission, and sends to outside e-mail through the formspree.io platform.
This allows for free web hosting through GHPages.  Good for me.
  $('form#contact_form').validate({
  messages: { },
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/quincytennyson8@gmail.com",
      method: "POST",
      data: $(form).serialize(),
      dataType: "json",
      success: function(data) {
          $("form#contact_form :input").prop("disabled", true);
          $('#thanks').show();
      }
    });
    return false;
  }
});

*/




});
