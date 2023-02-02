/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.mindwords.info/', generateRobotsTxt: true,
    policies: [{
        userAgent: "*", allow: "/"
    }], generateIndexSitemap: ['http://localhost:3000/server-sitemap.xml', 'https://www.mindwords.info/sitemap.xml']
}