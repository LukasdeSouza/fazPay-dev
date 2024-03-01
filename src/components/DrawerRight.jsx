import { ArrowBackIosRounded } from '@mui/icons-material'
import { Box, Drawer, IconButton, MenuList, Stack, Typography } from '@mui/material'


const DrawerRight = ({ selectedProduct, openDrawerRight, setOpenDrawerRight, onCloseDrawerRight, children }) => {

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value)
  }

  return (
    <Drawer
      anchor='right'
      open={openDrawerRight}
      onClose={onCloseDrawerRight}
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
            <Stack mt={2}>
              <Stack direction={'row'} alignItems={'center'} gap={0.5}>
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
                  {selectedProduct[0]?.name}
                </Typography>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} gap={0.5}>
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
                  {selectedProduct[0]?.quantity}
                </Typography>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} gap={0.5}>
                <Typography
                  variant='caption'
                  fontFamily={'Poppins'}
                >
                  Preço: R$
                </Typography>
                <Typography
                  variant='body1'
                  fontFamily={'Poppins'}
                  fontWeight={600}
                >
                  {selectedProduct[0]?.price}
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


export default DrawerRight