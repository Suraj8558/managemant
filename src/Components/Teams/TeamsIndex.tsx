import { useLoaderData, Link } from "react-router-dom"

export default function TeamsIndex() {
    const teams = useLoaderData();
    return (

        <div>
            <ul>
                {teams.map((team: any) => (
                    <li key={team.id}>
                        <Link to={`/users/${team.id}`}>{team.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}