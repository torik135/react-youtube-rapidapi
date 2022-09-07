import { Stack, Box, Typography } from '@mui/material';

const Loading = (props) => {
    const { children } = props;
    return (
        <Stack>
            <Box>
                <Typography textAlign='center' color='#fff'>
                    { children }
                </Typography>
            </Box>
        </Stack>
    );
}

export { Loading }