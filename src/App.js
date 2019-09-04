import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
const App = () => {
	const APP_ID = 'a814da01';
	const APP_KEY = 'd485a6917c6785f687ee09f0ba1b8ffb';
	const [recipes, setrecipes] = useState([]);
	useEffect(() => {
		getRecipes();
	}, []);
	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		setrecipes(data.hits);
		console.log(data.hits);
	};
	return (
		<div className="App">
			<form className="search-form">
				<input type="text" className="search-bar" />
				<button type="submit" className="search-button">
					search
				</button>
			</form>
			{/* {recipes.map(Recipe =>
				<Recipe />)} */}
		</div>
	);
};

export default App;
