import { Stack } from '@mui/material'
import CardInfo from '../../../components/CardInfo'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { jewelryProductsList } from '../../../mockApi/jewelryProductsList'
import RootStoreContext from '../../../stores/RootStore'
import DrawerRight from '../../../components/DrawerRight'
import { observer } from 'mobx-react-lite'

const JewelryProductsPage = observer(() => {
  const { productStore } = useContext(RootStoreContext)

  const [selectedProductId, setSelectedProductId] = useState()
  const [openDrawerRight, setOpenDrawerRight] = useState(false)

  const onCloseDrawerRight = () => {
    setOpenDrawerRight(false)
    // setSelectedProductId(null)
  }

  const onClickEdit = (id) => {
    setSelectedProductId(id)

    let selected = productStore.state.products?.filter((product) => product?.id === selectedProductId)
    productStore.setState('product', selected)
    if (selected.length > 0) {
      setOpenDrawerRight(true)
    }
  }

  const onClickDelete = () => {
    productStore.setState('products', [])
  }

  const fetchList = () => {
    productStore.setLoading(true)
    return new Promise((resolve) => {
      resolve(jewelryProductsList);
    });
  };

  useEffect(() => {
    fetchList()
      .then(data => {
        productStore.setState('products', data)
        productStore.setLoading(false)
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        productStore.setLoading(false)
      });

    return () => {
      productStore.setState('products', []);
    }
  }, [])

  return (
    <Stack
      gap={3}
      padding={3}
      direction={'row'}
      justifyContent={'center'}
      flexWrap={'wrap'}
    >
      {productStore.state.products?.map((item, index) => (
        <CardInfo
          key={index}
          title={item.name}
          image={item.img}
          currency={item.currency}
          price={item.price}
          quantity={item.quantity}
          onClickEdit={() => onClickEdit(item?.id)}
          onClickDelete={onClickDelete}
        />
      ))}
      <DrawerRight
        selectedProduct={productStore.state.product}
        openDrawerRight={openDrawerRight}
        setOpenDrawerRight={setOpenDrawerRight}
        onCloseDrawerRight={onCloseDrawerRight}
      />
    </Stack>
  )
}
)

export default JewelryProductsPage