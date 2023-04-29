import { useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios';
import './App.css'

const API_KEY = 'gm9wHZkWqqEypRpU2H57qKa309186dnL';

function GifApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=12&q=${searchQuery}`;
    const response = await axios.get(url);
    setGifs(response.data.data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      {gifs.length > 0 && (
        <div>
          {gifs.map((gif) => (
            <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default GifApp;
