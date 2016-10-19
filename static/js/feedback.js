$(document).ready(function (){

  $("#linux32-downloads-stable a").click(function(event) {
    if(ga) {
      var os = $(event.currentTarget).attr("data-os").toString()
      ga('send', 'event', 'Download', os );
    }
  });

  $("#downloads a").click(function(event) {
    if(ga) {
      var os = $(event.currentTarget).attr("id").toString()
      ga('send', 'event', 'Download', os );
    }
  });

  $('.awesome-tooltip').tooltip({
        placement: 'left'
    });

    $(window).bind('scroll',function(e){
      dotnavigation();
    });




    /* get clicks working */
    $('#dot-nav li').click(navClickAction);
    $('#downarrow').click(navClickAction);
    $('#topDownloadButton').click(navClickAction);
    $('#sectionDownloadButton').click(navClickAction);


    $('#aboutLink').click(navClickAction);
    $('#resourcesLink').click(navClickAction);
    $('#feedbackLink').click(navClickAction);

    var resetForm = function(event) {
      var form = $('#feedbackForm');
      form.find('#titleGroup').removeClass('has-error');
      form.find('#messageGroup').removeClass('has-error');
      form.find('#title').val('');
      form.find('#name').val('');
      form.find('#email').val('');
      form.find('#message').val('');

      if (event != null) {
        var feedbackLabel = $('#formFeedback')
        feedbackLabel.removeClass('text-danger').removeClass('text-success').removeClass('text-info');
        feedbackLabel.text('');
      }
      $('#submitButton').attr('disabled', false);
      $('#resetFormButton').attr('disabled', false);

      return false;
    }

    $('#resetFormButton').click(resetForm);

    $('#feedbackForm').submit(function(event) {

      var form = $('#feedbackForm');

      var titleInput = form.find('#title');
      var nameInput = form.find('#name');
      var emailInput = form.find('#email');
      var messageInput = form.find('#message');

      var titleValue = titleInput.val();
      var nameValue = nameInput.val();
      var emailValue = emailInput.val();
      var messageValue = messageInput.val();

      var valid = true;

      if (titleValue == "" || titleValue == undefined) {
        valid = false;
        form.find('#titleGroup').addClass('has-error');
      }

      if (messageValue == "" || messageValue == undefined) {
        valid = false;
        form.find('#messageGroup').addClass('has-error');
      }

      var feedbackLabel = $('#formFeedback')
      feedbackLabel.removeClass('text-danger').removeClass('text-success').removeClass('text-info');
      if (valid) {
        feedbackLabel.text('Please wait while we record your feedback...');
        feedbackLabel.addClass('text-info');

        $('#submitButton').attr('disabled', true);
        $('#resetFormButton').attr('disabled', true);

        var body = 'FROM WEB FEEDBACK:\nNAME: ' + nameValue +
					'\nEMAIL: ' + emailValue +
					'\nMESSAGE:\n' + messageValue;

        var postParams = JSON.stringify({
						'title': titleValue,
						'body': body
					});

        $.ajax({
            contentType: 'application/json',
            data: postParams,
            dataType: 'text',
            success: function(data){
              resetForm();
              feedbackLabel.text(data.toString());
              feedbackLabel.removeClass('text-info').addClass('text-success');
            },
            error: function(error){
              feedbackLabel.text('Sorry, something went wrong. ' + error );
              feedbackLabel.removeClass('text-info').addClass('text-warning');
              $('#submitButton').attr('disabled', false);
              $('#resetFormButton').attr('disabled', false);
            },
            processData: false,
            type: 'POST',
            url: '/feedback'
        });

      }else {
        feedbackLabel.text('There was an issue - please check your form input.');
        feedbackLabel.addClass('text-danger');
      }

      return false;
    });
});
