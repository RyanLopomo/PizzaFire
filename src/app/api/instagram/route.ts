type InstagramMedia = {
  id?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  caption?: string;
  timestamp?: string;
};

const knownPosts = [
  {
    id: "DdXhBINJEsx",
    link: "https://www.instagram.com/p/DdXhBINJEsx/",
    image: "/instagram-posts/DdXhBINJEsx.jpg",
  },
  {
    id: "DdWurjeOpMe",
    link: "https://www.instagram.com/p/DdWurjeOpMe/",
    image: "/instagram-posts/DdWurjeOpMe.jpg",
  },
  {
    id: "DdWpgy_RIaa",
    link: "https://www.instagram.com/p/DdWpgy_RIaa/",
    image: "/instagram-posts/DdWpgy_RIaa.jpg",
  },
];

const unavailable = (reason: string, status = 503) => {
  console.error(`[instagram] ${reason}`);
  return Response.json({ ok: false, posts: [], reason }, { status });
};

export async function GET() {
  const userId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!userId || !accessToken) {
    console.warn("[instagram] Credentials are not configured; returning supplied public post links.");
    return Response.json(
      {
        ok: true,
        posts: knownPosts.map((post) => ({ ...post, caption: "" })),
        source: "provided-links",
      },
      { headers: { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600" } },
    );
  }

  try {
    const url = new URL(`https://graph.facebook.com/v23.0/${encodeURIComponent(userId)}/media`);
    url.searchParams.set("fields", "id,media_type,media_url,thumbnail_url,permalink,caption,timestamp");
    url.searchParams.set("limit", "12");

    const response = await fetch(url, {
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(8000),
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) {
      const error = (await response.json().catch(() => null)) as
        | { error?: { code?: number; type?: string; message?: string } }
        | null;
      const code = error?.error?.code;
      console.error("[instagram] Graph API request failed", {
        status: response.status,
        code,
        type: error?.error?.type,
        message: error?.error?.message,
      });
      return unavailable(code ? `graph_api_error_${code}` : "graph_api_request_failed");
    }

    const data = (await response.json()) as { data?: InstagramMedia[] };
    const posts = (Array.isArray(data.data) ? data.data : [])
      .filter((media) =>
        ["IMAGE", "CAROUSEL_ALBUM", "VIDEO"].includes(media.media_type ?? "") &&
        Boolean(media.id && (media.media_url || media.thumbnail_url) && media.permalink),
      )
      .sort((a, b) => Date.parse(b.timestamp ?? "") - Date.parse(a.timestamp ?? ""))
      .slice(0, 3)
      .map((media) => ({
        id: media.id,
        image: media.thumbnail_url || media.media_url,
        link: media.permalink,
        caption: media.caption ?? "",
      }));

    return Response.json(
      { ok: true, posts },
      { headers: { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600" } },
    );
  } catch (error) {
    console.error("[instagram] Request failed", error);
    return unavailable(error instanceof Error && error.name === "TimeoutError" ? "upstream_timeout" : "upstream_unavailable");
  }
}
