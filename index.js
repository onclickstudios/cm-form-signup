var form = require('cmp-form');

module.exports = function() {
  return form({
    action: '/users',
    inputs: [{type: 'text', name: 'username', placeholder: 'username'},
             {type: 'text', name: 'email', placeholder: 'e-mail address'},
             {type: 'password', name: 'password', placeholder: 'password'},
             {type: 'password', name: 'confirm', placeholder: 'confirm'},
             {type: 'submit', name: 'submit', value: 'go'}]
  });
};
