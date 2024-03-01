import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import CardEmpty from '../../components/CardEmpty'
import { LoadingButton } from '@mui/lab'
import { ArrowBackIos, ArrowBackOutlined, ArrowBackRounded, ArrowBackSharp, ArrowCircleLeft, ArrowLeft, ArrowLeftRounded, SendOutlined, SendRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const ForgotPasswordPage = () => {
  const navigate = useNavigate()

  const handleRedefinePassword = () => {

  }

  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Stack height={'100%'} justifyContent={'center'} alignItems={'center'}>
        <CardEmpty title={'Esqueceu sua Senha?'}>
          <Typography variant='caption' fontFamily={'Poppins'} textAlign={'center'}>
            Não se preocupe, receba em seu email uma redefinição de senha
          </Typography>
          <Stack gap={1.5} mt={1}>
            <TextField
              // value={user}
              // onChange={(e) => setUser(e.target.value)}
              label="Email Cadastrado"
              // placeholder='cariani@breakingbad.com'
              size='small'
              sx={{ mt: 1 }}
            />
            <Stack gap={1} mt={1}>
              <LoadingButton
                variant='contained'
                startIcon={<SendRounded />}
                onClick={handleRedefinePassword}
                // size='small'
                sx={{
                  background: "#7161c2",
                  "&:hover": {
                    background: '#504390'
                  }
                }}
              >
                Enviar
              </LoadingButton>
              <Button
                variant='outlined'
                startIcon={<ArrowBackSharp/>}
                onClick={() => navigate('/')}
                sx={{
                  color: '#7161c2',
                  borderColor: '#7161c2',
                  "&:hover": {
                    borderColor: '#38297f'
                  }
                }}
              >
                Voltar
              </Button>
            </Stack>
          </Stack>
        </CardEmpty>
      </Stack>
    </Box>
  )
}

export default ForgotPasswordPage