module.exports = function (vars, inputNode) {
  if (inputNode.$.bind) {
    for (var nodeset in vars.bindings) {
      if (vars.bindings[nodeset].id === inputNode.$.bind) {
        return nodeset
      }
    }
    return
  }

  if (inputNode.$.ref || inputNode.$.nodeset) {
    var path = inputNode.$.ref || inputNode.$.nodeset
    // var inputname = vars.context['#name']

    // if (!path.match(/^\//) && !vars.parentName === 'h:body') {
    //   var ancestor = vars.context.parent
    //   while (ancestor) {
    //     if (ancestor['#name'] === 'repeat' || ancestor['#name'] === 'group') {
    //       path += (ancestor.$.ref || '') + (ancestor.$.nodeset || '') + '/'
    //     }
    //     // *CHECK* does this really scale up the tree?
    //     ancestor = ancestor.context.parent
    //   }
    //   path += path
    // }

    return path
  }
}

/*
<xsl:template name="node-path-helper">
    <xsl:param name="input-node"/>
    <xsl:choose>
        <xsl:when test="$input-node/@bind">
            <xsl:variable name="id" select="$input-node/@bind" />
            <xsl:value-of select="/h:html/h:head/xf:model/xf:bind[@id=$id]/@nodeset"/>
        </xsl:when>
        <xsl:when test="$input-node/@ref or $input-node/@nodeset">
            <xsl:variable name="path" select="$input-node/@ref | $input-node/@nodeset" />
            <xsl:variable name="inputname" select="local-name()"/>
            <xsl:if test="not(substring($path, 1, 1) = '/') and not(parent::h:body)" >

                <xsl:for-each select="ancestor::*">
                    <xsl:if test="(local-name() = 'repeat' or local-name() = 'group')">
                      <xsl:if test="string-length(@ref)>0 or string-length(@nodeset)>0">
                          <xsl:value-of select="concat(@ref,@nodeset, '/')" />
                      </xsl:if>
                    </xsl:if>
                </xsl:for-each>
            </xsl:if>
            <xsl:value-of select="$path"/>
        </xsl:when>

    </xsl:choose>
</xsl:template>
*/
