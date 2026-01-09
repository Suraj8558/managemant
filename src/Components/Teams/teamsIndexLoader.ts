export const teamsIndexLoader = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Response("Failed to fetch teams", { status: 500 });
    }
    return response.json();
}