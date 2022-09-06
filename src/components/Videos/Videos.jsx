import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from '../';

const Videos = (props) => {
  const { videos, direction } = props;
  if (!videos?.length) return 'Loading...';

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos.map((items) => {
        <Box key={Math.random()}>
          {items.id.videoId && <VideoCard video={item} />}
          {items.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>;
      })}
    </Stack>
  );
};

export { Videos };
