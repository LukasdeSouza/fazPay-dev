import { Diamond, Man, Woman } from "@mui/icons-material";

export const menuItems = [
  {
    icon: <Man sx={{ color: '#5f50ad' }} />,
    title: 'Moda Masculina',
    route: 'male',
  },
  {
    icon: <Woman sx={{ color: '#5f50ad' }} />,
    title: 'Moda Feminina',
    route: 'female',
  },
  {
    icon: <Diamond sx={{ color: '#5f50ad' }} />,
    title: 'Jóias e Bijuterias',
    route: 'jewelry',
  },
]