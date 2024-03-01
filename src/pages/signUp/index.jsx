import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import CardEmpty from '../../components/CardEmpty'
import InputPassword from '../../components/InputPassword'
import { LoadingButton } from '@mui/lab'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordConfirm, setPasswordConfirm] = useState(null)

  const handleSignUp = () => { }

  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Stack height={'100%'} justifyContent={'center'} alignItems={'center'}>
        <CardEmpty title={'Cadastro de Usuário'}>
          <Typography variant='caption' fontFamily={'Poppins'} sx={{ color: '#777' }}>
            Preencha as informaçoes abaixo para se cadastrar
          </Typography>
          <Stack gap={1.5} mt={1}>
            <TextField
              type='text'
              value={user}
              onChange={(e) => setUser(e.target.value)}
              label="Nome Completo"
              size='small'
              required
            />
            <TextField
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              size='small'
              required
            />
            <InputPassword
              label={'Digite sua Senha'}
              value={password}
              setValue={setPassword}
            />
            <InputPassword
              label={'Confirme sua Senha'}
              value={passwordConfirm}
              setValue={setPasswordConfirm}
            />
            <Stack gap={1} mt={1}>
              <LoadingButton
                variant='contained'
                onClick={handleSignUp}
                sx={{
                  fontFamily: 'Poppins',
                  background: "#7161c2",
                  "&:hover": {
                    background: '#504390'
                  }
                }}
              >
                Cadastrar
              </LoadingButton>
              <Button
                variant='outlined'
                onClick={() => navigate('/')}
                sx={{
                  fontFamily: 'Poppins',
                  color: "#7161c2",
                  borderColor: "#7161c2",
                  "&:hover": {
                    color: '#504390',
                    borderColor: "#7161c2",
                  }
                }}>
                Fazer Login
              </Button>
            </Stack>
          </Stack>
        </CardEmpty>
      </Stack>
    </Box>
  )
}

export default SignUpPage