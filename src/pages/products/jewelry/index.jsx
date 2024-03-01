import { Stack } from '@mui/material'
import CardInfo from '../../../components/CardInfo'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const JewelryProductsPage = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  const onClickEdit = (index) => {
    navigate(`/products/jewelry/${index}`, { replace: true })
  }

  const fetchList =  async () => {
    const response = await axios.get('../../../mockApi/jewelry.json')
    console.log(response.data)
    // return new Promise((resolve, _) => {
    //   resolve(jewelryProductsList);
    // });
  };

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <Stack
      gap={3}
      padding={3}
      direction={'row'}
      justifyContent={'center'}
      flexWrap={'wrap'}
    >
      {products?.map((item, index) => (
        <CardInfo
          key={index}
          title={item.name}
          image={item.img}
          currency={item.currency}
          price={item.price}
          quantity={item.quantity}
          onClickEdit={() => onClickEdit(index)}
        />
      ))}
    </Stack>
  )
}

export default JewelryProductsPage