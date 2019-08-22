# hmtl-jeopardy
a summer project by: AL1AS-001

# how to use
edit the variables.js file to whatever questions and answers you want
the javascript is made so that you can have as many topics as you want and as many questions as you want
be careful if some questions are missing, it will appear as undefined during the game

# gameplay
## initialize the game
starts off with 4 teams. If there are fewer than 4, just have a dummy team.
the game does not start until all 4 team names are filled out

## actual game
each question corresponds to the values in the variables.js
once you click on a question, you can not click on any other
there is a daily double feature integrated in the code
when answering, there is a seperate button to reveal the answer
click on the team name to award points to them
(if needed, right click in a team name to subtract the points. That teams button will disapear for that question)

## finishing the game
If there is not enough time or you finished with every question avalable, click 'finish' underneath the point totals for each team
this will activate the Final Jeopardy question
each team can bet as many points as they have
don't even bother trying to beat the system. There is an internal check to see wether the bet is either below 0 or above their total points

## advanced stuff
for some advanced stuff, inside the variables.js file, there is a points multiplier and start points variables.
these values set the base multiplier and the amount of points each team starts with
