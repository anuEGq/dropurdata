<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<xsl:output method="html"/>
  <xsl:template match="/">
       <html>
            <body>
                <h1><xsl:value-of select="/article/front/title-group/article-title"/></h1>
                <h2><xsl:value-of select="/article/front/abstract/title"/></h2>
                <p><xsl:value-of select="/article/front/abstract/p"/></p>
                
                <xsl:for-each select="/article/body/sec">
                    <section>
                         <xsl:attribute name="id">
                              <xsl:value-of select="@id"/>
                         </xsl:attribute>
                         <h3><xsl:value-of select="title"/></h3>
                         <xsl:apply-templates/> 
                    </section>
                </xsl:for-each>
            </body>
       </html>
   </xsl:template>

      <xsl:template match="xref">
                <a>
                    <xsl:attribute name="ref-type">
                         <xsl:value-of select="@ref-type"/>
                    </xsl:attribute>
                    <xsl:attribute name="id">
                         <xsl:value-of select="@rid"/>
                    </xsl:attribute>
                    <xsl:value-of select="/sec/p/xref"/>
                </a>
     </xsl:template>
     <xsl:template match="table-wrap">
               <table>
                     <xsl:attribute name="id">
                         <xsl:value-of select="@id"/>
                    </xsl:attribute>
                    <tr>
                    <xsl:for-each select="table/thead/tr/th">
                         <th>
                              <xsl:value-of select="node()"/>
                         </th>
                    </xsl:for-each>
                    </tr>
                    <tr>
                    <xsl:for-each select="table/tbody/tr/td">
                              <td>
                                   <xsl:value-of select="node()" />
                              </td>
                    </xsl:for-each>
                    </tr>
                    
               </table>
     </xsl:template>

     <xsl:template match="/ref-list">
             <xsl:for-each select='/ref'>
               <label>
                    <xsl:value-of select='label'/>
               </label>
               <span>
                    <xsl:value-of select='mixed-citation'/>
               </span>
             </xsl:for-each>
     </xsl:template>
</xsl:stylesheet>