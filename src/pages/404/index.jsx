import { Box, Button, Typography } from '@mui/material'
import NotFoundImage from '../../assets/page_not_found.svg'
import { useNavigate } from 'react-router-dom'
import { ArrowBackSharp } from '@mui/icons-material'

const NotFound404Page = () => {
  const navigate = useNavigate()

  return (
    <Box
      width={'100%'}
      height={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={2}
    >
      <img src={NotFoundImage} width={'30%'} />
      <Typography variant='h4' fontFamily={'Poppins'}>
        Página não Encontrada
      </Typography>
      <Button
        variant='outlined'
        startIcon={<ArrowBackSharp />}
        onClick={() => navigate('/products')}
        sx={{ minWidth: 300, color: '#504390', borderColor: '#504390' }}
      >
        Voltar
      </Button>
    </Box>
  )
}

export default NotFound404Page