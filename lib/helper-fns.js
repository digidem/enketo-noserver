var _ = require('lodash')

module.exports = {
  nodesetUsed: require('./helpers/nodeset-used'),

  nodePathHelper: require('./helpers/node-path-helper'),

  bindingAttributes: require('./helpers/binding-attributes'),

  childNodes: function (obj) {
    // Returns a merge of all child nodes
    // root/mynode/child::node()
    var result = {}
    for (var key in obj) {
      _.merge(result, obj[key])
    }
    return result
  },
  filterByAttr: function (arr, attr, value) {
    // Returns nodes that have an attribute 'attr'
    // root/mynode[@default]
    var result = arr.filter(function (obj) {
      return obj.$[attr] === value
    })
    return result && result[0]
  },
  sanitize: function (str) {
    return str.replace(' ', '_')
  },

  string: function (v) {
    if (!v) return
    return typeof v === 'string' || v[0] && typeof v[0]._ === 'string'
  },

  appearances: function (appearance) {
    return appearance ? 'or-appearance-' + appearance.toLowerCase().split(' ').join(' or-appearance-') : ''
  },

  templateVars: function ($, node) {
    var vars = _.extend({}, $, { context: node })
    vars.context.parentName = $.context && $.context['#name']
    vars.context.parent = $.context
    return vars
  }
}
