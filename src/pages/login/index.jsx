import { Box, Button, Link, Snackbar, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import CardEmpty from '../../components/CardEmpty'
import { LoadingButton } from '@mui/lab'
import InputPassword from '../../components/InputPassword'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [user, setUser] = useState(null)
  const [password, setPassword] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)

    if (user === null || password === null) {
      setTimeout(() => {
        setLoading(false)
        setOpenSnackBar(true)
      }, [1200])
    } else {
      setTimeout(() => {
        setLoading(false)
        navigate('/products/male')
      }, [1200])
    }
  }

  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Stack height={'100%'} justifyContent={'center'} alignItems={'center'}>
        <CardEmpty title={'Login de Usuário'}>
          <Typography variant='caption' fontFamily={'Poppins'} textAlign={'center'}>
            Preencha com seu usuário e senha para acessar
          </Typography>
          <Stack component={'form'} gap={2} mt={2} onSubmit={handleLogin}>
            <TextField
              type='text'
              value={user}
              onChange={(e) => setUser(e.target.value)}
              label="Usuário"
              size='small'
              required
            />
            <InputPassword
              label={'Senha'}
              value={password}
              setValue={setPassword}
            />
            <Stack gap={1} mt={1}>
              <LoadingButton
                type='submit'
                variant='contained'
                loading={loading}
                onClick={handleLogin}
                sx={{
                  fontFamily: 'Poppins',
                  background: "#5541ba",
                  "&:hover": {
                    background: '#6556b4'
                  }
                }}
              >
                Entrar
              </LoadingButton>
              <Button
                variant='outlined'
                onClick={() => navigate('/sign-up')}
                sx={{
                  fontFamily: 'Poppins',
                  color: "#7161c2",
                  borderColor: "#7161c2",
                  "&:hover": {
                    color: '#504390',
                    borderColor: "#7161c2",
                  }
                }}>
                Me Cadastrar
              </Button>
            </Stack>
            <Link
              href='/forgot-password'
              underline='always'
              variant='caption'
              fontFamily={'Poppins'}
            >
              Esqueceu sua senha?
            </Link>
          </Stack>
        </CardEmpty>
      </Stack>
      <Snackbar
        open={openSnackBar}
        onClose={() => setOpenSnackBar(false)}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        color='error'
        message={"🚨 Preencha as Informações para efetuar o Login!"}
      />
    </Box>
  )
}

export default LoginPage