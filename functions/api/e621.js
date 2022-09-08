export async function onRequestGet(req) {
  
  const res = await fetch(`https://api.angelwolf.workers.dev/api/${req}`);
  return new Response(res);
}
