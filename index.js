var
hoquet = require('hoquet');

/**
 * 
 * @param context Object
 * @returns
 */
function cmFormSignup(context) {
  context = context || {};
  var data = context.data || {};
  
  return hoquet.render(
    ['form',
     {
       action:context.action + (context.query || ''),
       method:(context.method || 'post'),
       class:'cm cm-form cm-form-signup' + (context.class || '')
     },
     ['input', {type:'text', name:'username', placeholder:'username', value:data && data.username}],
     ['input', {type:'text', name:'email', placeholder:'e-mail address', value:data && data.email}],
     ['input', {type:'password', name:'password', placeholder:'password', value:data && data.password}],
     ['input', {type:'password', name:'confirm', placeholder:'confirm password', value:data && data.confirm}],
     ['input', {type:'submit', name:'submit', value:data && data.submit || 'submit'}]]
  );
  
}

module.exports = cmFormSignup;
