import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import './home.css';

const Home = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(setProducts)
			.catch(() => {
				setError('There was an error connecting to the server');
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className='home'>
			<h2 className='home__title'>Products</h2>
			{isLoading ? (
				<p>Loading...</p>
			) : error ? (
				<p>{error}</p>
			) : !products?.length ? (
				<p>There are no products to show.</p>
			) : (
				<div className='home__cards-container'>
					{products.map(({ id, title, image, price }) => (
						<ProductCard
							key={id}
							id={id}
							title={title}
							image={image}
							price={price}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
