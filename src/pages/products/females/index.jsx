import { Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CardInfo from '../../../components/CardInfo'
import { femaleProductsList } from '../../../mockApi'
import { useEffect, useState } from 'react'

const FemaleProductsPage = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  const onClickEdit = (index) => {
    navigate(`/products/female/${index}`)
  }

  const fetchList = () => {
    return new Promise((resolve) => {
      resolve(femaleProductsList);
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

export default FemaleProductsPage