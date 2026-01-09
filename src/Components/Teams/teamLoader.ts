

export async function teamLoader({ params }: any) {
  const { userId } = params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (res.status === 404) {
    throw new Response("Team not found", { status: 404 });
  }

  if (!res.ok) {
    throw new Response("Failed to load team", { status: 500 });
  }

  return res.json(); // { id, name, email, company }
}
