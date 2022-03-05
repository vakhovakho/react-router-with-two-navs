import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Main />} />
					<Route path="about" element={<About />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="*" element={<NotFound />} />
				</Route>
      		</Routes>
		</div>
	);
}

export default App;
