const knownPostIds = new Set(["DdXhBINJEsx", "DdWurjeOpMe", "DdWpgy_RIaa"]);

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  if (!knownPostIds.has(id)) return new Response(null, { status: 404 });

  try {
    const embedResponse = await fetch(`https://www.instagram.com/p/${id}/embed/captioned/`, {
      signal: AbortSignal.timeout(6000),
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 900 },
    });
    if (!embedResponse.ok) return new Response(null, { status: 502 });

    const html = await embedResponse.text();
    const match = html.match(/"(https?:[^\"]*t51\.82787-15[^\"]*)"/);
    const imageUrl = match?.[1]
      .replaceAll("\\/", "/")
      .replaceAll("\\u0026", "&")
      .replaceAll("&amp;", "&");
    if (!imageUrl) return new Response(null, { status: 404 });

    const parsedUrl = new URL(imageUrl);
    if (!parsedUrl.hostname.endsWith("fbcdn.net")) return new Response(null, { status: 502 });

    const imageResponse = await fetch(parsedUrl, {
      signal: AbortSignal.timeout(6000),
      headers: { "User-Agent": "Mozilla/5.0", Referer: "https://www.instagram.com/" },
      next: { revalidate: 900 },
    });
    if (!imageResponse.ok) return new Response(null, { status: 502 });

    return new Response(imageResponse.body, {
      headers: {
        "Content-Type": imageResponse.headers.get("content-type") ?? "image/jpeg",
        "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600",
      },
    });
  } catch {
    return new Response(null, { status: 502 });
  }
}
