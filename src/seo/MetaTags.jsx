import React from 'react';
import { Helmet } from 'react-helmet';

function MetaTags({ title, description, keywords, image, canonicalUrl }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Your Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={canonicalUrl} />
      <meta charset="UTF-8" />
      <html lang="tr" />
    </Helmet>
  );
}

export default MetaTags;
