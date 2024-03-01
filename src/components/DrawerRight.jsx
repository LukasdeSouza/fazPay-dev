import { ArrowBackIosRounded } from '@mui/icons-material'
import { Box, Divider, Drawer, IconButton, MenuList, Stack, TextField, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import RootStoreContext from '../stores/RootStore'
import { observer } from 'mobx-react-lite'


const DrawerRight = observer(({ openDrawerRight, setOpenDrawerRight, children }) => {
  const { productStore } = useContext(RootStoreContext)

  const [productQuantity, setQuantity] = useState(productStore.state.product?.quantity)

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value)
  }

  return (
    <Drawer
      anchor='right'
      open={openDrawerRight}
      onClose={() => setOpenDrawerRight(false)}
    >
      <Box>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          sx={{ padding: 2, width: 250, }}
        >
          <Stack direction={'row'} alignItems={'inherit'} gap={0.5}>
            <Typography variant='h6' fontFamily={'Poppins'} sx={{ color: '#4c3f92' }}>
              Vestuário
            </Typography>
            <Typography fontSize={10} fontFamily={'Poppins'}>
              prototype
            </Typography>
          </Stack>
          <IconButton size='small' onClick={() => setOpenDrawerRight(!openDrawerRight)}>
            <ArrowBackIosRounded sx={{ fontSize: 14 }} />
          </IconButton>
        </Stack>
        <MenuList sx={{ borderTop: '1px solid lightgrey' }}>
          <Box px={2}>
            <Typography fontFamily={'Poppins'} fontWeight={600}>Alterar Quantidade</Typography>
            <Stack mt={2}>
              <Stack direction={'row'} alignItems={'center'}>
                <Typography
                  variant='caption'
                  fontFamily={'Poppins'}
                >
                  Produto:
                </Typography>
                <Typography
                  variant='body1'
                  fontFamily={'Poppins'}
                  fontWeight={600}
                >
                  {productStore.state.product[0]?.name}
                </Typography>
              </Stack>
              <Stack direction={'row'} alignItems={'center'}>
                <Typography
                  variant='caption'
                  fontFamily={'Poppins'}
                >
                  Quantidade Disponível:
                </Typography>
                <Typography
                  variant='body1'
                  fontFamily={'Poppins'}
                  fontWeight={600}
                >
                  {productStore.state.product[0]?.quantity}
                </Typography>
              </Stack>
              <Stack direction={'row'} alignItems={'center'}>
                <Typography
                  variant='caption'
                  fontFamily={'Poppins'}
                >
                  Preço:
                </Typography>
                <Typography
                  variant='body1'
                  fontFamily={'Poppins'}
                  fontWeight={600}
                >
                  {productStore.state.product[0]?.price}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </MenuList>
        {children}
      </Box>
    </Drawer>
  )
}
)

export default DrawerRight