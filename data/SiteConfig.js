module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Einar Stefánsson | classical bass singer", // Site title.
  siteTitleAlt: "Homepage of the Norwegian bass singer Einar Stefánsson", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "http://www.einarstefansson.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Einar Stefánsson, classical bass singer", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-110489649-1", // GA tracking ID.
  disqusShortname: "http-einar-stefansson", // Disqus shortname.
  postDefaultCategoryID: "Upcoming", // Default category for posts.
  userName: "Einar Stefánsson", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Manchester, UK", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "I do in fact love Bryn Terfel!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "soundcloud",
      url: "https://soundcloud.com/einarstefansson",
      iconClassName: 'FaSoundcloud'
    },
    {
      label: "Twitter",
      url: "https://twitter.com/EinarStefansson",
      iconClassName: 'FaTwitter'
    },
    {
      label: "Email",
      url: "mailto:eina.ste@hotmail.com",
      iconClassName: 'FaEnvelope'
    }
  ],
  copyright: "Copyright © 2017. Einar Stefánsson", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#3D9970", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FDFEFD" // Used for setting manifest background color.
};
