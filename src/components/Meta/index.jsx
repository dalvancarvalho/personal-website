/* Meta/index.jsx */

import { Helmet } from 'react-helmet-async'

function Meta({ description, title, url }) {
  // Sets Open Graph, social network, and default meta tags for SEO purposes

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:url" content={url} />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default Meta
