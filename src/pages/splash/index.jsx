import { CircularProgress, Grow, Stack } from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import fazPayLogo from '../../assets/FAZPAY-LOGO-branca.png'

const SplashPage = () => {
  const navigate = useNavigate()
  const [grow, setGrow] = useState()

  useEffect(() => {
    setGrow(true)
    setTimeout(() => {
      navigate('/products/male')
    }, [1500])
  }, [])


  return (
    <Stack
      height={'100vh'}
      width={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={4}
      sx={{ background: 'linear-gradient(86deg, rgba(70,59,131,1) 0%, rgba(113,97,194,1) 49%, rgba(93,71,212,1) 100%)' }}
    >
      <Grow in={grow} timeout={1200}>
        <img src={fazPayLogo} width={250} />
      </Grow>

      {/* <Stack direction={'row'} alignItems={'center'} gap={0.5}>
        <Typography
          variant='h3'
          fontFamily={'Poppins'}
          fontWeight={600}
          sx={{ color: '#EEE' }}
        >
          FazPay
        </Typography>
        <Typography
          variant='caption'
          fontFamily={'Poppins'}
          sx={{ color: 'rgba(70,59,131,1)' }}
        >
          test
        </Typography>
      </Stack> */}
      <CircularProgress sx={{ color: 'rgba(70,59,131,1)' }} />
    </Stack>
  )
}

export default SplashPage