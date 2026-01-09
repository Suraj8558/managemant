import { useLoaderData } from "react-router-dom";


export default function Team() {
    const team = useLoaderData();
    console.log("team - sinlge ", team)
    return (
        <h1>This is Team page </h1>
    )
}