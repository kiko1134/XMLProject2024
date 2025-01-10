<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text" encoding="UTF-8"/>
    <xsl:template match="/">
        <xsl:text>Име на магазин:</xsl:text>
        <xsl:value-of select="computerStore/storeInfo/storeName"/>
        <xsl:text>&#10;</xsl:text>
        <xsl:text>Адрес на магазин:</xsl:text>
        <xsl:value-of select="computerStore/storeInfo/location/city"/>
        -
        <xsl:value-of select="computerStore/storeInfo/location/address"/>
        <xsl:text>&#10;</xsl:text>
        <xsl:text>Телефон за връзка:</xsl:text>
        <xsl:value-of select="computerStore/storeInfo/contactNumber"/>
        <xsl:text>&#10;</xsl:text>
        <xsl:text>Продукти в магазина:</xsl:text>
        <xsl:text>&#10;</xsl:text>
        <xsl:for-each select="computerStore/products/product">
            <xsl:value-of select="productName"/>
            -
            <xsl:value-of select="price"/>
            <xsl:text>&#10;</xsl:text>
            <xsl:value-of select="description"/>
            <xsl:text>&#10;</xsl:text>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>