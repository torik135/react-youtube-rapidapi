import { Stack } from '@mui/material';
import { categories, color } from '../../utils';

const Sidebar = (props) => {
  const { selectedCategory, setSelectedCategory } = props;

  return (
    <Stack
      className='category-area'
      direction='row'
      sx={{
        overflowX: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((cat) => (
        <button
          className='category-btn'
          style={{
            background: cat.name === selectedCategory && color.sunset3,
            color: '#fff',
          }}
          key={`${cat.name}-${Math.random()}`}
          onClick={() => setSelectedCategory(cat.name)}
        >
          <span
            style={{
              color: cat.name === selectedCategory ? '#fff' : color.sunset3,
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
