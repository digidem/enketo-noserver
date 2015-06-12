<%
   var localName = context['#name']
   var className
   var notTranslated = !fns.string(context.$.ref) && (fns.string(context._) || fns.string(context.output.$.value) && !context._.match('itext('))

   switch (localName) {
    case 'constraintMsg':
      className = 'or-constraint-msg '
      break
    case 'hint':
      className = 'or-hint '
      break
    case 'label':
      className = (context.parentName === 'item') ? 'option-label' : 'questions-label '
      break
   }
%>
<% if (notTranslated) { %>
<span
  lang=""
  class="<%= className + ' active' %>"
>
  <%= context._ %>
</span>
<% } %>
