import { Route, Routes } from 'react-router';
import './App.css';
import Catalog from './components/Catalog';
import Main from './components/Main';
import CatalogItem from './components/CatalogItem';
import NotFound from './components/NotFound';
import About from './components/About';
import Contacts from './components/Contacts';
import Basket from './components/Basket';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />}></Route>
			<Route exact path="/catalog" element={<Catalog />}></Route>
			<Route exact path="/about" element={<About />}></Route>
			<Route exact path="/contacts" element={<Contacts />}></Route>
			<Route exact path="/item" element={<CatalogItem />}></Route>
			<Route exact path="/basket" element={<Basket />}></Route>
			<Route path="*" element={<NotFound />}></Route>
		</Routes>
	);
}

export default App;
