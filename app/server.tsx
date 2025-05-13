export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'GET') {
    return new Response(null, { status: 204 })
  }
  const htmlDocument = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">    
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a simple HTML document.</p>
</body>
</html>
`
  return new Response(htmlDocument, {
    headers: { 'Content-Type': 'text/html' },
  })
}