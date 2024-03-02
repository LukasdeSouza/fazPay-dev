import { ArrowBackIosRounded, Logout, MenuOutlined } from '@mui/icons-material'
import { Box, Button, Drawer, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Modal, Stack, Toolbar, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { menuItems } from './MenuItems'
import fazPayLogo from '../assets/FAZPAY-LOGO-branca.png'

const RootLayout = () => {
  const navigate = useNavigate()
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer)
  }

  const handleNavigate = (route) => {
    navigate(route, { replace: true })
    setOpenDrawer(false)
  }

  const onClickLogout = () => {
    setOpenModal(true)
  }

  const onClickConfirmLogout = () => {
    navigate('/')
  }

  const onClickDeclineLogout = () => {
    setOpenModal(false)
  }

  return (
    <>
      <Toolbar
        sx={{
          background: 'linear-gradient(86deg, rgba(70,59,131,1) 0%, rgba(113,97,194,1) 49%, rgba(93,71,212,1) 100%)', borderBottom: "1px solid lightgrey"
        }}>
        <Stack width={'100%'} direction={'row'} justifyContent={'space-between'}>
          <IconButton
            size='small'
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuOutlined sx={{ color: "#ddd" }} />
          </IconButton>
          <Tooltip title={'Sair da Aplicação'} arrow followCursor>
            <IconButton
              size='small'
              color="inherit"
              edge="end"
              onClick={onClickLogout}
            >
              <Logout sx={{ fontSize: 22, color: "#ddd" }} />
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            sx={{ padding: 2, width: 250, }}
          >
            <Stack direction={'row'} alignItems={'inherit'} gap={0.5}>
              <Typography variant='h6' fontFamily={'Poppins'} fontWeight={600} sx={{ color: '#4c3f92' }}>
                FazPay
              </Typography>
              <Typography fontSize={10} fontFamily={'Poppins'}>
                prototype
              </Typography>
            </Stack>
            <IconButton size='small' onClick={() => setOpenDrawer(!openDrawer)}>
              <ArrowBackIosRounded sx={{ fontSize: 14 }} />
            </IconButton>
          </Stack>
          <MenuList>
            <Typography
              fontFamily={'Poppins'}
              fontWeight={600}
              mx={2}
            >
              Vestuário
            </Typography>
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => handleNavigate(item?.route)}
                sx={{ height: 48 }}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant='body2'
                    sx={{ fontFamily: "Poppins" }}
                  >
                    {item.title}
                  </Typography>
                </ListItemText>

              </MenuItem>
            ))}
          </MenuList>
        </Box>
      </Drawer>
      <Stack justifyContent={'center'} alignItems={'center'} padding={2}>
        <img src={fazPayLogo} width={120} />
        {/* <Typography variant='h5' fontFamily={'Poppins'} fontWeight={600}>
          FazPay
        </Typography> */}
      </Stack>
      <Outlet />
      <Modal open={openModal}
        sx={{ position: "absolute", left: '40%', top: '20%' }}
      >
        <Box height={'fit-content'} width={'fit-content'}
          sx={{ padding: 2, background: '#eee', borderRadius: 2 }}
        >
          <Typography variant='h6' fontFamily={'Poppins'}>
            Tem certeza que deseja sair?
          </Typography>
          <Stack gap={1} mt={3}>
            <Button
              variant='contained'
              startIcon={<Logout />}
              onClick={onClickConfirmLogout}
              sx={{
                fontFamily: 'Poppins',
                background: "#5541ba",
                "&:hover": {
                  background: '#6556b4'
                }
              }}
            >
              Sair
            </Button>
            <Button
              variant='outlined'
              onClick={onClickDeclineLogout}
              sx={{
                fontFamily: 'Poppins',
                borderColor: '#5541ba',
                color: '#5541ba'
              }}>
              Voltar
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  )
}

export default RootLayout