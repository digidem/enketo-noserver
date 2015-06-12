<% var relevant = bindings[context.$.ref] && bindings[context.$.ref].relevant %>
<% var labelRefOrValue = context.label && fns.string(context.label[0].$.ref) || fns.string(context.label) %>
<section
  class="
  <%=  labelRefOrValue ? 'or-group ' : 'or-group-data ' %>
  <%= relevant && 'or-branch pre-init ' %>
  <%= fns.appearances(context.$.appearance) %>
  "
  name="<%= context.$.ref %>"
  data-relevant="<%= relevant %>"
>
  <% if (labelRefOrValue) { %>
  <h4><%= partials.label(fns.templateVars($, context.$$[0])) %></h4>
  <% } %>
  <% context.$$.forEach(function (node) { %>
  <% var name = node['#name'] %>
  <% if (name === 'label' || name === 'hint') return %>
  <%= partials[name](fns.templateVars($, node)) %>
  <% }) %>

</section>
<!-- end of group <%= context.$.ref %> -->
