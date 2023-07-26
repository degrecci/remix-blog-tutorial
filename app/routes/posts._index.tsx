import { Link, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/post.server";
import { json } from "@remix-run/node";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <main className="px-16 py-12">
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
      <h1 className="mt-5">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
