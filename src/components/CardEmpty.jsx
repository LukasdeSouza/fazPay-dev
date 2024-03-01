import { Paper, Typography } from "@mui/material"

const CardEmpty = ({ title, children }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 2,
        padding: 2,
        boxShadow: ' -11px 6px 5px 0px rgba(217,210,217,1);'
      }}>
      <Typography
        variant="h6"
        fontFamily={'Poppins'}
        textAlign={'center'}
        fontWeight={600}
        mb={1}
        sx={{ color: '#362b6e' }}
      >
        {title}
      </Typography>
      {children}
    </Paper>
  )
}

export default CardEmpty