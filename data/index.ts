export const navbarData = {
  homeTitle: 'Art Shop',
}

export const footerData = {
  author: 'Al Asad Nur Riyad',
  aboutAuthor: 'Hi! I am Riyad, a Tech enthusiast, problem solver and software engineer. Currently working at Appscode Inc.',
  authorInterest: 'I have a fair amount of knowledge of Javascript, Typescript, VueJs, and Nuxt. If you have an interesting idea, either open source or paid let\'s connect.',
  aboutTheSite: 'This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it\'s deployed in Vercel.',
}

export const homePage = {
  title: 'Welcome To Art Shop',
  description: 'Get news, website development service,  learning resources and more.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description: 'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Art shop bhola',
  description: 'Online web services and digital media',
  aboutMe: 'Welcome to [Art Shop Name], your premier destination for unique art pieces and cutting-edge frontend development courses. We’re more than just an online media platform—we’re a community of artists and tech enthusiasts passionate about creativity and innovation.',
}

export const seoData = {
  description: 'Discover unique art pieces and learn frontend development with our comprehensive courses. [Art Shop Name] is your gateway to creativity and coding.',
  ogTitle: 'Explore Art and Learn Frontend Development at [Art Shop Name]',
  twitterDescription: 'Visit [Art Shop Name] to find stunning art pieces and master frontend development with our expert-led courses.',
  image: 'https://www.pexels.com/video/a-small-lighthouse-on-the-water-near-a-body-of-water-17141099/',
  mySite: 'https://artshop-website.com',
  twitterHandle: '@artshophandle',
  mailAddress: 'support@artshop-website.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
