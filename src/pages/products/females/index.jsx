import { Stack } from '@mui/material'
import CardInfo from '../../../components/CardInfo'
import { useContext, useEffect, useState } from 'react'
import { femaleProductsList } from '../../../mockApi/femaleProductsList'
import RootStoreContext from '../../../stores/RootStore'
import DrawerRight from '../../../components/DrawerRight'
import { observer } from 'mobx-react-lite'

const FemaleProductsPage = observer(() => {
  const { productStore } = useContext(RootStoreContext)

  const [selectedProductId, setSelectedProductId] = useState()
  const [openDrawerRight, setOpenDrawerRight] = useState(false)

  const onCloseDrawerRight = () => {
    setOpenDrawerRight(false)
    productStore.setState('product', {})
  }

  const onClickEdit = (id) => {
    setSelectedProductId(id)

    let selected = productStore.state.products?.filter((product) => product?.id === selectedProductId)
    productStore.setState('product', selected)
    if (selected.length > 0) {
      setOpenDrawerRight(true)
    }
  }

  const onClickDelete = (index) => {
    productStore.setState('products', [])
  }

  const fetchList = () => {
    return new Promise((resolve) => {
      resolve(femaleProductsList);
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

export default FemaleProductsPage