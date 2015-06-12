var fns = require('./helper-fns')

module.exports = function (result) {

  var head = result['h:html']['h:head'][0]
  var body = result['h:html']['h:body'][0]
  var itext = head.model[0].itext
  var translation = itext && itext[0].translation

  var defaultLang

  var translations = translation && translation.reduce(function (p, v) {
    var lang = v.$.lang
    p[lang] = v.text.reduce(function (p, v) {
      p[v.$.id] = v.value
      return p
    }, {})
    if (v.$.default === 'true()') {
      defaultLang = lang
      p.default = p[lang]
    }
    return p
  }, {})

  defaultLang = defaultLang || translation && translation[0].$.lang

  var bindings = head.model[0].bind.reduce(function (p, v) {
    p[v.$.nodeset] = v.$
    return p
  }, {})

  var instanceChildNodes = fns.childNodes(head.model[0].instance[0])

  var formId = instanceChildNodes[0].$.id ||
    instanceChildNodes[0].$.xmlns || '_'

  var submission = head.model[0].submission

  return {
    head: head,

    body: body,

    translated: translation && Object.keys(translations).length > 1,

    translations: translations,

    defaultLang: defaultLang,

    bindings: bindings,

    formId: formId,

    submissionAttrs: submission && submission[0] && submission[0].$
  }
}
