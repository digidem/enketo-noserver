var nodePathHelper = require('./node-path-helper')

module.exports = function (vars) {
  var context = vars.context
  var name = context['#name']
  var parent = context.parent
  var parentName = context.parentName

  // first the simplest case (for preload or calculated fields taken from bind elements)
  if (name === 'bind') {
    return context.$.nodeset
  }

  // then for input elements
  var intermediate

  if (parentName === 'select' || parentName === 'select1') {
    console.log('select')
    intermediate = nodePathHelper(vars, parent)
  } else {
        console.log('other')
    intermediate = nodePathHelper(vars, context)
  }

  // now strip anything preceding a // which occurs e.g. in widgets.xml
  // note that this goes only 1 level deep so is not reliable enough

  return intermediate.replace(/^\/\//, '')
}

/**
<xsl:template name="nodeset_used">
      <xsl:choose>
          <!-- first the simplest case (for preload or calculated fields taken from bind elements) -->
          <xsl:when test="local-name() = 'bind'">
              <!--<xsl:choose>-->
                  <!-- if nodeset value is relative -->
                  <!--<xsl:when test="not(substring(./@nodeset, 1, 1) = '/')">-->
                      <!-- start with the top level element of the instance, e.g. /data/ -->
                  <!--    <xsl:value-of select="concat('/', local-name(//xf:instance/child::*[1]), '/')" />
                  </xsl:when>
                  <xsl:otherwise />
              </xsl:choose>-->
              <xsl:value-of select="./@nodeset"/>
          </xsl:when>
          <!-- then for input elements -->
          <xsl:otherwise>
              <xsl:variable name="intermediate">
                  <xsl:choose>
                      <xsl:when test="local-name(..) = 'select1' or local-name(..) = 'select'">
                          <xsl:call-template name="node-path-helper">
                              <xsl:with-param name="input-node" select=".." />
                          </xsl:call-template>
                      </xsl:when>
                      <xsl:otherwise>
                          <xsl:call-template name="node-path-helper">
                              <xsl:with-param name="input-node" select="." />
                          </xsl:call-template>
                      </xsl:otherwise>
                  </xsl:choose>
              </xsl:variable>
              <!-- now strip anything preceding a // which occurs e.g. in widgets.xml-->
              <!-- note that this goes only 1 level deep so is not reliable enough -->
              <xsl:choose>
                  <xsl:when test="contains($intermediate, '//')">
                      <xsl:value-of select="concat('/', substring-after($intermediate, '//'))"/>
                  </xsl:when>
                  <xsl:otherwise>
                      <xsl:value-of select="$intermediate"/>
                  </xsl:otherwise>
              </xsl:choose>
          </xsl:otherwise>
      </xsl:choose>
  </xsl:template>
**/
