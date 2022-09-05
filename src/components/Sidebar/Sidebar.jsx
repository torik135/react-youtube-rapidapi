import { Stack } from '@mui/material';
import { categories } from '../../utils';

const Sidebar = (props) => {
  const { selectedCategory, setSelectedCategory } = props;

  return (
    <Stack
      direction='row'
      sx={{
        overflowX: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'row' },
      }}
    >
      {categories.map((cat) => (
        <button
          className='category-btn'
          style={{
            background: cat.name === selectedCategory && '#FC1503',
            color: '#fff',
          }}
          key={`${cat.name}-${Math.random()}`}
          onClick={() => setSelectedCategory(cat.name)}
        >
          <span
            style={{
              color: cat.name === selectedCategory ? '#fff' : 'red',
              marginRight: '15px',
            }}
          >
            {cat.icon}
          </span>
          <span
            style={{ opacity: cat.name === selectedCategory ? '1' : '0.7' }}
          >
            {cat.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export { Sidebar };
