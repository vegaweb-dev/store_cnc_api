import img from '../../assets/images/carlos-vega.jpeg';
import './about.css';

const About = () => (
	<div className='about'>
		<img className='about__image' src={img} alt='img' />
		<h2 className='about__title'>Carlos Vega</h2>
		<h5 className='about__subtitle'>Frontend Developer</h5>
		<p className='about__description'>
			Frontend developer with experience in React, HTML, and CSS, good team
			player, passionate about learning and willing to take new challenges.
			carlosjuniorrvega@hotmail.com https://github.com/vegaweb-dev
		</p>
	</div>
);

export default About;
