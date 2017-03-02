$(document).ready(function(){
  $('.ui.form')
  .form({
    fields: {
      firstName: {
        identifier: 'firstName',
        rules: [{
          type   : 'empty',
          prompt : 'Please enter your first name'
        }]
      },
      lastName: {
        identifier: 'lastName',
        rules: [{
          type   : 'empty',
          prompt : 'Please enter your last name'
        }]
      },
      email: {
        identifier: 'email',
        rules: [{
          type   : 'email',
          prompt : 'Please enter a valid E-mail Address'
        }]
      },
      subject: {
        identifier: 'subject',
        rules: [
          {
            type   : 'empty',
            prompt : 'I need to know what this is about, please enter a subject'
          },
          {
            type   : 'maxLength[30]',
            prompt : 'Subject is too long :('
          }
        ]
      },
      body: {
        identifier: 'body',
        rules: [{
          type   : 'empty',
          prompt : 'Please enter a password'
        }]
      }
    }
  })
;
});
