jQuery(document).ready(function($) {
  // Set the initial active step to Step 1
  let currentStep = 1;
  updateActiveStep();

  // Handle step click event
  $('#steps_menu li, .vh_next_btn').on('click', function() {    
    // Get the clicked step number
    const clickedStep = $(this).index() + 1;

    // Update the current step
    currentStep = clickedStep;
    updateActiveStep();
  });

  $('#steps_menu li, .vh_next_btn').on('click', function() {    
    // Get the clicked step number
    const clickedStep = $(this).index() + 1;

    // Update the current step
    currentStep = clickedStep;
    updateActiveStep();
  });
  // Function to update the active step
  function updateActiveStep() {
    // Remove active class from all steps
    // $('#steps_menu li.active, .vh_previous_btn').removeClass('active');

    // Add active class to the current step
    $(`#steps_menu li:nth-child(${currentStep})`).addClass('active');
  }
});

 