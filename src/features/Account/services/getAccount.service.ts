export default async function getAccount() {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API}/user/account`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        blogId: process.env.NEXT_PUBLIC_BLOG_ID!,
      },
    });

    const res = await result.json();
    return res.data;
  } catch (e) {
    console.error("getAccount", e);
  }
}
