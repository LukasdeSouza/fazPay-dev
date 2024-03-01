import { ArrowBackIosRounded, Logout, MenuOutlined } from '@mui/icons-material'
import { Box, Divider, Drawer, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Stack, Toolbar, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { menuItems } from './MenuItems'

const RootLayout = () => {
  const navigate = useNavigate()
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer)
  }

  const handleNavigate = (route) => {
    navigate(route, { replace: true })
    setOpenDrawer(false)
  }

  const onClickLogout = () => {
    navigate('/')
  }

  return (
    <>
      <Toolbar>
        <Stack width={'100%'} direction={'row'} justifyContent={'space-between'}>
          <IconButton
            size='small'
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuOutlined />
          </IconButton>
          <Tooltip title={'Sair da Aplicação'} arrow followCursor>
            <IconButton
              size='small'
              color="inherit"
              edge="end"
              onClick={onClickLogout}
            >
              <Logout sx={{ fontSize: 22 }} />
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
              <Typography variant='h6' fontFamily={'Poppins'} sx={{ color: '#4c3f92' }}>
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
        <Typography variant='h5' fontFamily={'Poppins'} fontWeight={600}>
          Faz Pay
        </Typography>
      </Stack>
      <Outlet />
    </>
  )
}

export default RootLayout