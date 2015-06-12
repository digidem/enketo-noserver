var _ = require('lodash')

var helperFns = require('./lib/helper-fns')

var result = require('./forms/widgets.json')

var templates = require('./templates')

window.result = result

var helperVars = require('./lib/helper-vars')(result)

var templateVars = _.extend(helperVars, {
  fns: helperFns,
  partials: templates.partials
})

console.log(templateVars)

templateVars.$ = templateVars

var html = templates.form(templateVars)
window.document.getElementById('form').innerHTML = html
