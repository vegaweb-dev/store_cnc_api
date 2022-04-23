import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-duplicates
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-duplicates
import { useParams } from 'react-router-dom';
import './product-details.css';

const ProductDetails = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [product, setProduct] = useState(null);
	const params = useParams();
	const productId = params?.productId;

	useEffect(() => {
		if (productId) {
			setIsLoading(true);
			fetch(`https://fakestoreapi.com/products/${productId}`)
				.then(res => res.json())
				.then(setProduct)
				.catch(() => {
					setError('There was an error connecting to the server');
				})
				.finally(() => setIsLoading(false));
		}
	}, [productId]);

	const { title, image, price, description, rating } = { ...product };

	return (
		<div className='product-details'>
			<Link className='product-details__link' to='/'>
				&#60; Back to products
			</Link>
			{isLoading ? (
				<p>Loading...</p>
			) : error ? (
				<p>{error}</p>
			) : !product ? (
				<p>Sorry, we couldnt find that product.</p>
			) : (
				<div className='product-details__wrapper'>
					<img className='product-details__image' src={image} alt={title} />
					<div className='product-details__info'>
						<h3 className='product-details__title'>{title}</h3>
						<div className='product-details__value'>${price}</div>
						<p className='product-details__text'>{description}</p>
						{rating && (
							<>
								<div>
									<b>Rate:</b> {rating.rate}
								</div>
								<div>
									<b>Count:</b> {rating.count}
								</div>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
