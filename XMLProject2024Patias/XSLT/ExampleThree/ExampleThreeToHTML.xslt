<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes" encoding="UTF-8"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Филтрирани Дънни Платки X570</title>
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
                <h1>Дънни Платки с Чипсет X570 и Цена > 120</h1>
                <table>
                    <tr>
                        <th>Име на продукт</th>
                        <th>Категория</th>
                        <th>Цена</th>
                        <th>Описание</th>
                        <th>Чипсет</th>
                    </tr>
                    <xsl:apply-templates select="computerStore/products/product[category='Дънни платки' and specifications/specification[key='Чипсет' and value='X570'] and number(price) > 120]"/>
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
            <td><xsl:value-of select="specifications/specification[key='Чипсет']/value"/></td>
        </tr>
    </xsl:template>

</xsl:stylesheet>
