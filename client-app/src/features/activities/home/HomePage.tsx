import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function HomePage() {
    return (
        <Container>
            <h1>Home Page</h1>
            <h3>Got to <Link to="/activities">Activities</Link></h3>
        </Container>
    )
}