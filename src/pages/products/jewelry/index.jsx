import { Stack } from '@mui/material'
import CardInfo from '../../../components/CardInfo'
import { jewelryProductsList } from '../../../mockApi'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const JewelryProductsPage = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  const onClickEdit = (index) => {
    navigate(`/products/jewelry/${index}`, { replace: true })
  }

  const fetchList = () => {
    return new Promise((resolve, _) => {
      resolve(jewelryProductsList);
    });
  };

  useEffect(() => {
    fetchList()
      .then(data => {
        setProducts(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
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