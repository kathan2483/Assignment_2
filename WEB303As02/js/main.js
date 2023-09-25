$(document).ready(function () {
  // Function to load and animate content
  function loadAndAnimateContent(contentUrl) {
    // Hide the content with animation
    $('#content').fadeOut('fast', function () {
      // Clear the content
      $(this).empty();

      // Load content using AJAX
      $.ajax({
        url: contentUrl,
        dataType: 'html',
        success: function (data) {
          // Append the loaded content
          $('#content').html(data);

          // Animate the content with a fade-in effect
          $('#content').fadeIn('slow');
        },
        error: function () {
          // Handle any errors here
          $('#content').html('<p>Error loading content.</p>');
          $('#content').fadeIn('slow');
        },
      });
    });
  }

  // Click event handlers for the links
  $('#prospect').click(function (e) {
    e.preventDefault();
    loadAndAnimateContent('prospect.html');
  });

  $('#convert').click(function (e) {
    e.preventDefault();
    loadAndAnimateContent('convert.html');
  });

  $('#retain').click(function (e) {
    e.preventDefault();
    loadAndAnimateContent('retain.html');
  });
});
