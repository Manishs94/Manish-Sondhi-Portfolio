
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  category?: string;
  tags?: string[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Manish Sondhi | Product & UX Designer Portfolio",
  description = "Portfolio of Manish Sondhi, a product and UX designer creating digital experiences that users love.",
  keywords = "UX Designer, Product Designer, UI/UX, Digital Design, User Experience, Portfolio, Design Systems",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = window.location.href,
  type = "website",
  author = "Manish Sondhi",
  publishDate,
  modifiedDate,
  category,
  tags = []
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "Person",
    "name": author,
    "headline": title,
    "description": description,
    "image": image,
    "url": url,
    ...(type === "article" && {
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Manish Sondhi Portfolio",
        "logo": {
          "@type": "ImageObject",
          "url": image
        }
      },
      ...(publishDate && { "datePublished": publishDate }),
      ...(modifiedDate && { "dateModified": modifiedDate }),
      ...(category && { "articleSection": category }),
      ...(tags.length > 0 && { "keywords": tags.join(", ") })
    }),
    ...(type === "website" && {
      "jobTitle": "Product & UX Designer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "sameAs": [
        "https://linkedin.com/in/manishsondhi",
        "https://github.com/manishsondhi",
        "https://twitter.com/alex_design"
      ]
    })
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta property="og:locale" content="en_US" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Manish Sondhi Portfolio" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@alex_design" />
      <meta name="twitter:site" content="@alex_design" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#4169E1" />
      <meta name="msapplication-TileColor" content="#4169E1" />
      <meta name="application-name" content="Manish Sondhi Portfolio" />

      {/* Performance and Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />

      {/* Preload critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Article-specific meta tags */}
      {type === "article" && (
        <>
          {publishDate && <meta property="article:published_time" content={publishDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
          {category && <meta property="article:section" content={category} />}
          {tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
    </Helmet>
  );
};
