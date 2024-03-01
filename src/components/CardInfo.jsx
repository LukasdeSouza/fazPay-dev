import { DeleteOutline, DeleteOutlineRounded, MoreHorizOutlined } from '@mui/icons-material'
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Stack, Tooltip, Typography } from '@mui/material'

const CardInfo = ({ id, title, image, currency, price, quantity, onClickEdit, onClickDelete }) => {
  return (
    <Card
      onClick={onClickEdit}
      sx={{
        maxWidth: 345,
        boxShadow: ' -11px 6px 5px 0px rgba(217,210,217,1)',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(0.97)',
          transition: 'all ease 0.3s'
        }
      }}
    >
      <CardHeader
        title={
          <Typography
            fontFamily={'Poppins'}
            // fontWeight={600}
          >
            <b>{title}</b> - {id}
          </Typography>
        }
        action={
          <Tooltip title={'Excluir Produto'} arrow>
            <IconButton size='small' onClick={onClickDelete}>
              <DeleteOutlineRounded />
            </IconButton>
          </Tooltip>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" fontFamily={'Poppins'}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ px: 2 }}>
        <Stack
          width={'100%'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Typography
            variant='body1'
            fontWeight={600}
            fontFamily={'Poppins'}
          >
            {currency}{price}
          </Typography>
          <Typography
            variant='body2'
            fontFamily={'Poppins'}
          >
            Quantidade: {quantity}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  )
}

export default CardInfo