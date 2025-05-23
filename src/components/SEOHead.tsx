
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
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Manish Sondhi | Product & UX Designer Portfolio",
  description = "Portfolio of Manish Sondhi, a product and UX designer creating digital experiences that users love.",
  keywords = "UX Designer, Product Designer, UI/UX, Digital Design, User Experience, Portfolio, Design Systems",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = window.location.href,
  type = "website",
  author = "Manish Sondhi"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Manish Sondhi Portfolio" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@alex_design" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#4169E1" />
      <meta name="msapplication-TileColor" content="#4169E1" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": author,
          "jobTitle": "Product & UX Designer",
          "url": url,
          "image": image,
          "description": description,
          "sameAs": [
            "https://linkedin.com/in/manishsondhi",
            "https://github.com/manishsondhi",
            "https://twitter.com/alex_design"
          ]
        })}
      </script>
    </Helmet>
  );
};
