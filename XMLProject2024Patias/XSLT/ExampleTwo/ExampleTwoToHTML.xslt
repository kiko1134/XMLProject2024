<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes" encoding="UTF-8"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Филтрирани Видео Карти</title>
                <style>
                    table, th, td {
                    border: 1px solid black;
                    border-collapse: collapse;
                    padding: 10px;
                    text-align: left;
                    }
                </style>
            </head>
            <body>
                <h1>Видео Карти с Капацитет >= 16GB и Цена > 1000</h1>
                <table>
                    <tr>
                        <th>Име на продукт</th>
                        <th>Категория</th>
                        <th>Цена</th>
                        <th>Описание</th>
                        <th>VRAM</th>
                    </tr>
                    <xsl:apply-templates select="computerStore/products/product[category='Видео карти' and specifications/specification[key='VRAM' and number(translate(value, 'GB', '')) >= 16] and number(price) > 1000]"/>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="product">
        <tr>
            <td><xsl:value-of select="productName"/></td>
            <td><xsl:value-of select="category"/></td>
            <td><xsl:value-of select="price"/></td>
            <td><xsl:value-of select="description"/></td>
            <td><xsl:value-of select="specifications/specification[key='VRAM']/value"/></td>
        </tr>
    </xsl:template>

</xsl:stylesheet>
