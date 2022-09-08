export async function onRequestGet(req) {
  
  const res = await fetch(`https://api.angelwolf.workers.dev/api/${req}`);
  let end = await res.json();
  return new Response(end);
}
