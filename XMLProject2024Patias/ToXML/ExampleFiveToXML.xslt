<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" encoding="UTF-8"/>
    <xsl:template match="/">
        <products>
        <xsl:for-each select="computerStore/products/product">
            <product>
            <name><xsl:value-of select="productName"/></name>
            <price><xsl:value-of select="price"/></price>
            <description><xsl:value-of select="description"/></description>
            </product>
        </xsl:for-each>
        </products>
    </xsl:template>
</xsl:stylesheet>