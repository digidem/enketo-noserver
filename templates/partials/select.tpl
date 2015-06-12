<%
  var localName = context['#name']
  var type = localName === 'select' ? 'select_multiple' : 'select_one'
  var nodeset = fns.nodesetUsed(fns.templateVars($, context))
  var binding = bindings[nodeset]
  var appearance = context.$.appearance
  var className = 'question '
  className += fns.appearances(context.$.appearance)
  if (binding.relevant) {
    className += 'or-branch pre-init '
  }
%>
<!-- the xsl used nodeset_absolute, we don't right now. -->
<% if (/minimal|autocomplete/.exec(appearance)) { %>
  <label class="<%= className %>">
  <%= partials.label(fns.templateVars($, context.label[0])) %>
  <%= partials.label(fns.templateVars($, context.hint[0])) %>
  <select>
  </select>
  </label>
<% } else { %>

<% } %>

