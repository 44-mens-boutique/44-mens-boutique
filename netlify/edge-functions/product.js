export default async (request) => {
  const url = new URL(request.url);
  const img   = url.searchParams.get('img')   || '';
  const name  = url.searchParams.get('name')  || 'פריט';
  const price = url.searchParams.get('price') || '';

  const siteUrl = 'https://44mens-boutique.netlify.app';
  const imgUrl  = img ? `${siteUrl}/${img}` : `${siteUrl}/images/suit-white.jpg`;

  const escaped = (s) => s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  const html = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>${escaped(name)} | 44 Men's Boutique</title>
  <meta property="og:title"       content="${escaped(name)} | 44 Men's Boutique" />
  <meta property="og:description" content="${escaped(price)} | בוטיק גברים פרימיום בראשון לציון" />
  <meta property="og:image"       content="${escaped(imgUrl)}" />
  <meta property="og:image:width"  content="800" />
  <meta property="og:image:height" content="800" />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="${escaped(url.href)}" />
  <meta name="twitter:card"       content="summary_large_image" />
  <meta http-equiv="refresh"      content="0;url=${siteUrl}/#products" />
</head>
<body><p>מעביר לאתר...</p></body>
</html>`;

  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=UTF-8' },
  });
};

export const config = { path: '/product' };
