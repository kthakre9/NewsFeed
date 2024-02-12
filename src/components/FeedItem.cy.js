import React from 'react'
import { FeedItem } from './FeedItem'

const data = [
  {
    "date": "Thu Feb 08 2024",
    "link": "https://www.nytimes.com/2024/02/07/technology/personaltech/apple-vision-pro-review.html",
    "title": "Apple Vision Pro Review: First Headset Lacks Polish and Purpose",
    "author": "Brian X. Chen",
    "description": "Billed as the future of computing, the $3,500 goggles can’t replace a laptop for work. At times, wearing them also made our columnist feel nauseated.",
    "media": "https://static01.nyt.com/images/2024/02/07/multimedia/07TECHFIX-1-cgpw/07TECHFIX-1-cgpw-mediumSquareAt3X.jpg",
    "mediaDescription": "Reporter Brian Chen tries out Apple Vision Pro for his TechFix column."
  },
  {
    "date": "Thu Feb 08 2024",
    "link": "https://www.nytimes.com/2024/02/08/technology/google-gemini-ai-app.html",
    "title": "Google Retires A.I. Chatbot Bard and Releases Gemini, a Powerful New App",
    "author": "Cade Metz",
    "description": "As it races to compete with OpenAI’s ChatGPT, Google has retired its Bard chatbot and released a more powerful app."
  },
  {
    "date": "Thu Feb 08 2024",
    "link": "https://www.nytimes.com/2024/02/08/business/media/google-ai.html",
    "title": "Google Joins Effort to Help Spot Content Made With A.I.",
    "author": "Tiffany Hsu",
    "description": "The tech company’s plan is similar to one announced two days earlier by Meta, another Silicon Valley giant.",
    "media": "https://static01.nyt.com/images/2024/02/08/multimedia/08GOOGLE-AI-hvbl/08GOOGLE-AI-hvbl-mediumSquareAt3X.jpg",
    "mediaDescription": "Google said it would explore how to incorporate the digital certification into its own products and services."
  }
]

describe('<FeedItem />', () => {
  it('renders', () => {
    cy.viewport(1280, 768)
    cy.mount(<FeedItem data={data} />)

    cy.get('[data-cy-root="feed"]').within(() => {
      cy.get('[data-cy="feed_item_AppleVisionProRe"]')
        .should('have.attr', 'href').and('include', 'alt')
      // .then(href => {
      //   cy.visit(href);
      // });
    })


  })
})