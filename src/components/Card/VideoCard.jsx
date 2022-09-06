import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../../utils';

const VideoCard = (props) => {
  const {
    video: {
      id: { videoId },
      snippet,
    },
  } = props;
  return (
    <Card
      sx={{
        width: { md: '320px', xs: '100%' },
        boxShadow: 'none',
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnail?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={snippet?.channelId ? `/channel/${channelId}` : demoChannelUrl}
        >
          <Typography variant='subtitle2' fontWeight='bold' color='#333'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: '12px', color: '#333', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export { VideoCard };
