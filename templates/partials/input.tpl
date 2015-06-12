<%
  var localName = context['#name']
  var nodeset = fns.nodesetUsed(fns.templateVars($, context))
  var binding = bindings[nodeset]

  var appearance = context.$.appearance && context.$.appearance.toLowerCase()
  var element = 'input'
  var type = ''
  var textAreaAppearancesRe = /multi-line|multiline|text-area|textarea/
  if (binding.type === 'string' && textAreaAppearancesRe.exec(appearance)) {
    element = 'textarea'
    type = 'textarea'
  }

  var attributes = fns.bindingAttributes(fns.templateVars($, context), binding, nodeset, type)
  var className = ''

  switch (localName) {
    case 'input':
    case 'upload':
      if (binding.relevant) {
        className += 'or-branch pre-init '
      }
      if (binding.readonly) {
        className += 'note '
      } else {
        className += 'question '
      }
      break
    case 'bind':
      className += 'calculation '
      break
  }
  if (localName !== 'item') className += 'non-select '
%>
<label class="<%= className %>">
  <% context.$$.forEach(function (node) { %>
  <%   if (localName !== 'item' && localName !== 'bind' && node['#name'] === 'label') { %>
  <%=    partials.label(fns.templateVars($, node)) %>
  <%     if (binding.readonly !== 'true()') { %>
  <span class="required">*</span>
  <%     } %>
  <%   } %>
  <%   if (node['#name'] === 'hint') { %>
  <%=    partials.label(fns.templateVars($, node)) %>
  <%   } %>
  <% }) %>

  <<%= element %>
  <% for (var attr in attributes) { %>
    <%= attr %>="<%= attributes[attr] %>"
  <% } %>
  >

  </<%= element %>>

</label>
