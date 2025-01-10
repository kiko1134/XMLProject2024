<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8"/>
    <xsl:template match="/">
        <html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
            <body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">
                <xsl:for-each select="computerStore/products/product">
                    <div style="background-color:teal;color:white;padding:4px">
                        <span style="font-weight:bold"><xsl:value-of select="productName"/> - </span>
                        <xsl:value-of select="price"/>
                    </div>
                    <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
                        <p>
                            <xsl:value-of select="description"/>
                        </p>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>