import SearchBar from './SearchBar';
import HomeList from './HomeList';
import React, { useEffect, useState} from 'react';
import axios from 'axios'

const SearchPage = (props) => {
	const [input, setInput] = useState('');
    const [homeList, setHomeList] = useState();
	const [isLoading, setIsLoading] = useState(false);

  	const updateInput = async (input) => {
     	setInput(input);
  	}

	useEffect( () => {
		if (isLoading && input) {
			const fetchData = async() => {
				axios.get('/search', {
					params: {
						address: input
					}
				})
				.then(response => {
					console.log("SUCCESS", response)
					if (response.data.items) {
						setHomeList(response.data.items)
					} else {
						setHomeList([])
					}
					setIsLoading(false);
				})
				.catch(error => {
					console.log(error)
					setIsLoading(false);
				})
			};
			fetchData();
		}
	},[isLoading]);
	
  	return (
    	<div style={{marginTop:'50px'}}>
      	<h1>Home Search</h1>
      	<SearchBar
			keyword={input}
			handleClick={() => setIsLoading(true)}
			onSubmit={updateInput}
      	/>
      	<HomeList homeList={homeList}/>
    	</div>
   	);
}

export default SearchPage