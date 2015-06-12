<form
  autocomplete="off"
  novalidate="novalidate"
  class="clearfix <%= body.$ && body.$.class %>"
  id="<%= formId %>"
  <% if (submissionAttrs) { %>
  <%   if (submissionAttrs.action) { %>
  action="<%= submissionAttrs.action %>"
  <%   } else if (submissionAttrs.method) { %>
  method="<%= submissionAttrs.method %>"
  <%   } else if (submissionAttrs.base64RsaPublicKey) { %>
  data-base64RsaPublicKey="<%= submissionAttrs.base64RsaPublicKey %>"
  <%   } %>
  <% } %>
>
<!-- This form was created by transforming a OpenRosa-flavored (X)Form using a template based on an enketo xsl transform -->
  <section class="form-logo">
  </section>

  <h3 id="form-title">
    <%= head['h:title'] && head['h:title'][0]._ || "No Title" %>
  </h3>

  <select id="form-languages"
    style="<%= translated ? '' : 'display: none;' %>"
    data-default-lang="<%= defaultLang %>"
  >
    <% for (var lang in translations) { %>
    <option value="<%= lang %>"><%= lang %></option>
    <% } %>
  </select>

  <% body.$$.forEach(function (node) { %>
  <%= partials[node['#name']](fns.templateVars($, node)) %>
  <% }) %>
</form>
