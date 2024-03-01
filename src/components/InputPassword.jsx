import { IconButton, InputAdornment, TextField, useTheme } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react'

const InputPassword = ({ label, value, setValue }) => {
  // const theme = useTheme()
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <TextField
      variant='outlined'
      type={showPassword ? 'text' : 'password'}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label={label}
      placeholder='********'
      size='small'
      required
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton size='small' onClick={handleClickShowPassword}>
              {showPassword
                ? <VisibilityIcon sx={{ color: '#7161c2' }} />
                : <VisibilityOffIcon sx={{ color: '#5541ba' }} />
              }
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}

export default InputPassword