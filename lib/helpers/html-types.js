module.exports = function (vars, xmlType) {
  var localName = vars.context['#name']
  var parentName = vars.context.parentName

  if (parentName === 'select1') return 'radio'
  if (parentName === 'select') return 'checkbox'
  if (localName === 'bind') return 'hidden'

  switch (xmlType) {
    case 'select1':
      return 'radio'
    case 'select':
      return 'checkbox'
    case 'dateTime':
      return 'datetime'
    case 'date':
      return 'date'
    case 'binary':
      return 'file'
    case 'decimal':
    case 'float':
    case 'double':
    case 'int':
    case 'integer':
      return 'number'
    case 'string':
    case 'barcode':
    case 'geopoint':
    case 'geotrace':
    case 'geoshape':
      return 'text'
    default:
      return 'ERROR: Unsupported data type ' + xmlType
  }
}

/**

            <!-- note, it may not actually be possible to support 'file' with offline storage -->
            <xsl:when test="$xml_type = 'binary'">file</xsl:when>
            <xsl:when test="$xml_type = 'time'">time</xsl:when>
            <xsl:when
                test="$xml_type = 'decimal' or $xml_type = 'float' or $xml_type = 'double' or $xml_type = 'int' or $xml_type = 'integer'"
                >number</xsl:when>
            <xsl:when test="$xml_type = 'string'">text</xsl:when>
            <!-- temporary -->
            <xsl:when test="$xml_type = 'barcode' or $xml_type = 'geopoint' or $xml_type = 'geotrace' or $xml_type = 'geoshape'" >
                <xsl:value-of select="string('text')" />
            </xsl:when>
            <!-- ********* -->
            <xsl:otherwise>
                <xsl:value-of select="$error"/>
                <xsl:message terminate="no">ERROR: Unsupported data type '<xsl:value-of select="$xml_type"/>' found.</xsl:message>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
 */
