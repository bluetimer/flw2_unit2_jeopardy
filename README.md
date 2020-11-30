# Code Nation Fellowship 2 Unit 2 Project - Jeopardy

Students will implement a Jeopardy game.

Below is the recommended order in which to complete the project.

## Day 1 - Rendering

### render_categories.js [done]

1. Note the `categories` array at the top of the file. These are the category headers.
2. Follow the instructions in the file and write code where it reads `// Add code here`
3. The output should be:

![render_categories.js](https://i.imgur.com/l6J9OCh.png)

### render_questions.js [done]

1. Note the `numCategories` and `questionValues` variables at the top of the file.
2. Follow the instructions in the file and write code where it reads `// Add code here`
3. The output should be:

![render_questions](https://i.imgur.com/rpPcTHD.png)

## Day 2 - Helper functions [done]

### click_handlers.js

1. Students and volunteers should take a minute to read the instructions.

   1. There is a lot of code in this file and students are asked to carefully append it.

2. Follow the instructions and write code where it reads `// Add code here`

3. If done correctly, the following should be true:

   1. Each question block is clickable
   2. On-click renders a popup like so:

   ![onclick](https://i.imgur.com/lUb4wOp.png)

   3. Clicking "Show Answer" will show the answer like so:

   ![answer](https://i.imgur.com/bhvRj4s.png)

   4. Clicking "Close" will hide the modal and remove the question from the board like so:

   ![closed](https://i.imgur.com/IBIyhrJ.png)

## Day 3 - Scoring [done]

### scoring.js

1. Follow the instructions in the file and write code where it reads `// Add code here`

2. If done correctly, the following should be true:

   1. On launching, there is a new "Current Score: 0" div at the bottom of the board like so:

   ![current_score](https://i.imgur.com/MJltSPC.png)

   2. After clicking on a question, then clicking "Show Answer", the player is presented with an option to select "Correct" or "Wrong".

   ![correct_or_wrong](https://i.imgur.com/7YPhGSv.png)

   3. If the player chooses "Correct", the score is updated to reflect the added amount.

   ![correct](https://i.imgur.com/AEAw7tL.png)

   4. Ensure that choosing "Wrong" subtracts the amount instead.

## Extra Credit

### Timing module

The game of Jeopardy is usually played with time constraints.

During the first two rounds, a contestant has _5 seconds_ to respond to the question after ringing-in.

In our Jeopardy game, we don't have the ability to ring-in, so we're going to give the player _10 seconds_ to answer the question.

Here's how it should work:

1. When the question is displayed, start a 10 second timer.
1. When the time is up, automatically switch to the answer.

/\* TODO: Program the following:

- Start the countdown timer whenever a question cell is clicked.
-
- 1.  Add a click handler to all elements with the 'question-cell' class (like
- we did in click_handler.js), which does the following actions.
-
- 2.  Call startCountdownTimer with three parameters:
-
- a) Timer length, in seconds (start with 10)
- b) A callback function which returns true when the timer should be
-       canceled, e.g. when the user presses "show answer" before time is up!
- c) A callback function which runs when the user runs out of time.
-
- 3.  Implement the times-up callback function 2(c), which should show the
- answer choices, but with the "correct" button disabled.
-
- 4.  Implement the should-cancel callback function 2(b), which should return
- true if the user pressed the show-answer or close buttons.
-
- THIS ONE IS HARD! DON'T WORRY IF YOU NEED TO ASK FOR HELP!
  \*/
