import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Navbar,
} from './components';

const App = () => {
  <BrowserRouter sx={{ backgroundColor: '#333' }}>
    <Box>
      <Navbar />
      <Routes>
        <Route to='/' exact element={<Feed />} />
        <Route to='/video/:id' element={<VideoDetail />} />
        <Route to='/channel/:id' element={<ChannelDetail />} />
        <Route to='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>;
};

export default App;
