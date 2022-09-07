import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

import { color } from '../../utils'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: '5px',
        border: '1px solid #e3e3e3',
        boxShadow: 'none',
        pl: 2,
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: color.sunset3 }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export { SearchBar };
