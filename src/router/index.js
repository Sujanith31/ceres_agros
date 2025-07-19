import { createRouter, createWebHistory } from 'vue-router'

import homepage from '@/frontPage/customCode/homepage.vue'
import ourStory from '@/frontPage/customCode/outStoryPage.vue'
import aboutUs from '@/frontPage/customCode/aboutuspage.vue'
import contactUs from '@/frontPage/customCode/contactus.vue'
import blogpage from '@/frontPage/customCode/blogpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
       {
      path: "/",
      name: "homepage",
      component: homepage,
    },
    {
      path:"/our-Story",
      name: "OurStory",
      component: ourStory,
    },
    {
      path:"/about-Us",
      name: "Aboutus",
      component: aboutUs,
    },
    {
      path:"/contact-us",
      name: "ContactUs",
      component: contactUs,
    },
    {
      path:"/blog",
      name: "BlogPage",
      component: blogpage,
    }
  ]
})

export default router
