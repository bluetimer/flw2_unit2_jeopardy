// ### Timing module

// The game of Jeopardy is usually played with time constraints.

// During the first two rounds, a contestant has _5 seconds_ to respond to the question after ringing-in.
// In our Jeopardy game, we don't have the ability to ring-in, so we're going to give the player _10 seconds_ to answer the question.

// Here's how it should work:

// 1. When the question is displayed, start a 10 second timer.
// 1. When the time is up, automatically switch to the answer.

// /\* TODO: Program the following:

// - Start the countdown timer whenever a question cell is clicked.
// - 1.  Add a click handler to all elements with the 'question-cell' class (like
// - we did in click_handler.js), which does the following actions.
// - 2.  Call startCountdownTimer with three parameters:
// -
// - a) Timer length, in seconds (start with 10)
// - b) A callback function which returns true when the timer should be
// -       canceled, e.g. when the user presses "show answer" before time is up!
// - c) A callback function which runs when the user runs out of time.
// -
// - 3. {working on it} Implement the times-up callback function 2(c), which should show the
// - answer choices, but with the "correct" button disabled.
// -
// - 4.  Implement the should-cancel callback function 2(b), which should return
// - true if the user pressed the show-answer or close buttons.
// -
// - THIS ONE IS HARD! DON'T WORRY IF YOU NEED TO ASK FOR HELP!
//   \*/

// "#question-modal-close" is the close button's div ID
function attachClickHandlers() {
  // Iterate through question cells and add click handler for startCountdownTimer
  $(".question-cell").each((index, questionElement) => {
    // A callback function which returns true when the timer
    $(questionElement).click(() => {
      // Add code here
      startCountdownTimer(10, shouldcancel, outoftime);
    });
  });
}

function startCountdownTimer(time, conditionwhenclicked, conditionoutoftime) {
  // if time is up, call conditionOutOfTime
  // if conditionwhenClicked is true, stop timer (distable timer)
  conditionwhenclicked();
}
//**  callback function which runs when the user runs out of time */
function outoftime() {
  $("#scoring-actions").show();
  $("#correct-button").prop("disabled", true);
}

/**  return true if the user pressed the show-answer or close buttons. */
function shouldcancel() {
  return isCanceled;
}
