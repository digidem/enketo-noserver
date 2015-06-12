<%
  var value = context.value._ || ''
  // *TODO* need to add error checking to this
%>
<!-- *TODO* translation -->
<option
  value=<%= value %>
>
  <%= partials.label(fns.templateVars($, context)) %>
</option>
