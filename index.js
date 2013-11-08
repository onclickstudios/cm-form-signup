var
hoquet = require('hoquet');

/**
 * 
 * @param action String form action
 * @param data Object optional data to prepopulate the form
 */
function cmpFormSignup(action, data) {
  
  return hoquet.render(
    ['form',
     {action:action, method:'post'},
     ['input', {type:'text', name:'username', placeholder:'username', value:data && data.username}],
     ['input', {type:'text', name:'email', placeholder:'e-mail address', value:data && data.email}],
     ['input', {type:'password', name:'password', placeholder:'password', value:data && data.password}],
     ['input', {type:'password', name:'confirm', placeholder:'confirm password', value:data && data.confirm}],
     ['input', {type:'submit', name:'submit', value:data && data.submit || 'submit'}]]
  );
  
}
module.exports = cmpFormSignup;
