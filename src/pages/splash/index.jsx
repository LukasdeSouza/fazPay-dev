import { CircularProgress, Stack, Typography } from '@mui/material'
import React from 'react'

const SplashPage = () => {
  return (
    <Stack
      height={'100vh'}
      width={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stack direction={'row'} alignItems={'center'}>
        <Typography
          variant='h3'
          fontFamily={'Poppins'}
        >
          Faz Pay
        </Typography>
        <Typography>test</Typography>
      </Stack>
      <CircularProgress />
    </Stack>
  )
}

export default SplashPage