const baseMain = 'main'

export const routsNameMain = {
  home: `/`,
  otherPages: {
    projects: {
      index: `/projects`,
      details: `/projects/details/`
    },
    team: {
      index: `/team`,
      details: `/team/details/`
    },
    testimonial: `/testimonial`,
    pricing: `/pricing`,
    faq: `/faq`
  },
  about: `/about`,
  service: {
    index: `/service`,
    website: `/service/website/`,
    eCommerce: `/service/eCommerce/`,
    mobile: `/service/mobile/category/`,
    system: `/service/system/`,
    socialMediaManagement: `/service/socialMediaManagement/`,
    seoAndWebsiteOptimization: `/service/seoAndWebsiteOptimization/`,
    googleAds: `/service/googleAds/`,
    sponsoredLinks: `/service/sponsoredLinks/`,
    contentMarketing: `/service/contentMarketing/`,
    domain: `/service/domain/`,
    accommodation: `/service/accommodation/`,
    brandAndDesign: `/service/brandAndDesign/`,
    emailProfessional: `/service/emailProfessional/`
  },
  blog: {
    index: `/blog`,
    tag: `/blog/search/tag/`,
    details: `/blog/post/`,
    category: `/blog/search/category/`
  },
  contact: `/contact`
}
