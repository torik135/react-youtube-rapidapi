import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard, Loading } from '../';

const Videos = (props) => {
  const { videos, direction } = props;
  if (!videos?.length) return <Loading>'Loading...'</Loading>;

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos.map((items) => (
        <Box key={Math.random()}>
          {items.id.videoId && <VideoCard video={items} />}
          {items.id.channelId && <ChannelCard channelDetail={items} />}
        </Box>
      ))}
    </Stack>
  );
};

export { Videos };
