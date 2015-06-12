var htmlTypes = require('./html-types')

module.exports = function (vars, binding, nodeset, type) {
  var attributes = {}
  var context = vars.context
  var localName = context['#name']
  var xmlType = binding.type || 'string'
  var htmlInputType = htmlTypes(vars.fns.templateVars(vars.$, vars.context), xmlType)

  if (type === 'select_multiple') {
    attributes.multiple = 'multiple'
  } else if (type !== 'select_one' && type !== 'textarea') {
    attributes.type = htmlInputType
  }

  attributes.name = nodeset

  if (htmlInputType === 'radio') {
    attributes['data-name'] = nodeset
  }

  if (context['#name'] === 'item') {
    attributes.value = context._
  }

  if (binding.required === 'true()' && localName !== 'bind') {
    attributes.required = 'required'
  }

  if (binding.constraint) {
    attributes['data-constraint'] = binding.constraint
  }

  if (binding.relevant) {
    attributes['data-relevant'] = binding.relevant
  }

  if (binding.calculate) {
    attributes['data-calculate'] = binding.calculate
  }

  attributes['data-type-xml'] = xmlType

  if (xmlType === 'decimal') {
    attributes.step = 'any'
  }

  if (binding.readonly === 'true()' && htmlInputType !== 'hidden') {
    attributes.readonly = 'readonly'
  }

  if (htmlInputType === 'file' && context.$.mediatype) {
    attributes.accept = context.$.mediatype
  }

  return attributes
}

/**

        <xsl:if test="$binding/@jr:preload">
            <xsl:choose>
                <xsl:when test="not( $binding/@jr:preload = 'patient' )" >
                    <xsl:attribute name="data-preload">
                        <xsl:value-of select="./@jr:preload"/>
                    </xsl:attribute>
                    <xsl:attribute name="data-preload-params">
                        <xsl:value-of select="./@jr:preloadParams"/>
                    </xsl:attribute>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:message>NO SUPPORT: Patient preload item is not supported (ignored).</xsl:message>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:if>


    </xsl:template>
**/
