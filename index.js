var
hoquet = require('hoquet');

var script = function () {
  var
  sa = require('visionmedia-superagent'),
  serialize = require('JayceTDE-serialize'),
  ev = require('component-event');
  
  var form = document.querySelector('.cm-form-signup');
  
  ev.bind(form, 'submit', function(e) {
    e.preventDefault();
    var p = serialize(form);
    console.log(p);
  });
  
  sa.get('http://localhost:3000/login', function(e,s) {
    e ? console.error(e)
    : document.querySelector('[name=username]')
  });
};

/**
 * 
 * @param action String form action
 * @param data Object optional data to prepopulate the form
 */
function cmFormSignup(context) {
  var data = context.data || {};
  return hoquet.render(
    ['form',
     {
       action:(context && context.action),
       method:(context && context.method || 'post'),
       class:'cm cm-form cm-form-signup' + (context && context.class || '')
     },
     ['input', {type:'text', name:'username', placeholder:'username', value:data && data.username}],
     ['input', {type:'text', name:'email', placeholder:'e-mail address', value:data && data.email}],
     ['input', {type:'password', name:'password', placeholder:'password', value:data && data.password}],
     ['input', {type:'password', name:'confirm', placeholder:'confirm password', value:data && data.confirm}],
     ['input', {type:'submit', name:'submit', value:data && data.submit || 'submit'}]],
     ['script', {type:'text/javascript'}, hoquet.strScript(script)]
  );
  
}

module.exports = cmFormSignup;
