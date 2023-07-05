document.addEventListener('DOMContentLoaded', function() {
  // Get the template source
  var userTemplateSource = document.getElementById('user-template').innerHTML;

  // Compile the template
  var userTemplate = Handlebars.compile(userTemplateSource);

  // Define the user data
  var userData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 28
  };

  // Render the template with the data
  var userContainer = document.getElementById('user-container');
  userContainer.innerHTML = userTemplate(userData);
});
