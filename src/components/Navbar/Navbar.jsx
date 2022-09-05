import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import { logo } from '../../utils/constans';

const Navbar = () => {
  <Stack
    direction='row'
    p={2}
    alignItems='center'
    sx={{
      position: 'sticky',
      backgroundColor: '#333',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt='web logo' height={45} />
    </Link>
    <SearchBar />
  </Stack>;
};

export { Navbar };
