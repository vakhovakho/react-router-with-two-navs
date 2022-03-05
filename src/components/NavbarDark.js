import { Link } from "react-router-dom";

export default function NavbarDark() {
  return (
    <nav className="dark">
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/dashboard">Dashboard</Link>
			</li>
		</ul>
    </nav>
  );
}
