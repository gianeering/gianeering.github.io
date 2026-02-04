import { getCollection } from "astro:content";

async function getPosts() {
    const data4 = await getCollection("lezioni");
    return data4.map((post)=>({
        slug: post.slug,
        page_title: post.data.page_title,
        description: post.data.description,
        search_code: post.data.search_code,
        containsExamples: post.data.containsExamples,
        hidefromsearch: post.data.hidefromsearch,
        href: post.data.href,
    }));


}

export async function GET({}) {
  return new Response(JSON.stringify(await getPosts()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
