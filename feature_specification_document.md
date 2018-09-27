## Features
1. Product should allow me to use a scorecard to record a score for a course
2. Product should allow me to add a new course hole by hole
3. Product should allow me to see my previously recorded scores
4. Product should allow me to upload a .csv file to create new courses

#### Flow for feature 1
- I log into the app
- I navigate to the courses route
- I select the course I am playing at
- I see a view in which all of the holes are listed
- I am able to select a score for a given hole
- I am able to refresh the page and the scores I've recorded are still there

#### Feature 1 details
- Holes for a course should be listed in a top to bottom fashion
- Holes should display their par
- If available, holes should display their distance
- The score for a hole is selectable from a dropdown


#### Flow for feature 2
- I log into the app
- I navigate to the courses route
- I click an 'add course' button
- I see a view in which hole 1 is displayed
- Hole 1 has a dropdown for par
- Hole 1 has a dropdown for score
- Hole 1 has a text entry for distance to target
- After I enter a score for hole 1, hole 2 is created
- Process repeats
- After I have entered all of my scores, I click a submit button
- The course data is used to create a new course that will be displayed on
  the 'courses' route
- A new score for the new course is recorded and displaed on the 'scores' route

#### Flow for feature 3
- I log into the app
- I navigate to the 'scores' route
- I see dates played, along with the course name and the total score
- When I click on an individual entry, I can see the details about that
  particular game
- Scores are _non-editable_

#### Flow for feature 4
- I log into the app
- I navigate to the 'courses' route
- I click a 'Add Courses by CSV' button
- I provide a file that contains course data
- I click submit
- The new course(s) are now displayed on the 'courses' route
