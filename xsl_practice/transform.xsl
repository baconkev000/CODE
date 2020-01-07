<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">

<html>
    <body>
        <h2>Test</h2>
        <table style="width:100%">
        <tr>
            <th>Week</th>
            <th>Person</th>
            <th>Birth Date</th>
        </tr>
        
        <xsl:for-each select="/tdata/week">
        <tr>
            <td><xsl:value-of select="num"/></td>
            <td><xsl:value-of select="name"/></td>
            <td><xsl:value-of select="bd"/></td>
        </tr>
        <xsl:for-each>
        </table>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>