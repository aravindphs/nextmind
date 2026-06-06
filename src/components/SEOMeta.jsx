import { Helmet } from 'react-helmet-async';

const BASE = 'https://zetanextmind.com';
const DEFAULT_IMG = `${BASE}/og-image.png`;

export default function SEOMeta({
  title,
  description,
  canonical,
  ogImage,
  noindex = false,
  jsonLd,
}) {
  const fullTitle = title
    ? `${title} | Zeta Nextmind`
    : 'Zeta Nextmind — AI-Integrated Software Training in Coimbatore';
  const img = ogImage || DEFAULT_IMG;
  const url = canonical ? `${BASE}${canonical}` : BASE;
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zeta Nextmind" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
