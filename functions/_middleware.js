export async function onRequest(context) {
  const url = new URL(context.request.url);
  const response = await context.next();

  // Set correct MIME types for JavaScript and CSS files
  if (url.pathname.endsWith('.js')) {
    response.headers.set('Content-Type', 'application/javascript; charset=utf-8');
  } else if (url.pathname.endsWith('.css')) {
    response.headers.set('Content-Type', 'text/css; charset=utf-8');
  }

  return response;
}
