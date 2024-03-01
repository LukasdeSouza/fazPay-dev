import { Backdrop, Box, Stack, TextField } from '@mui/material'
import CardInfo from '../../../components/CardInfo'
import { useContext, useEffect, useState } from 'react'
import DrawerRight from '../../../components/DrawerRight'
import RootStoreContext from '../../../stores/RootStore'
import { observer } from 'mobx-react-lite'
import { maleProductsList } from '../../../mockApi/maleProductsList'

const MalesProductsPage = observer(() => {
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
      resolve(maleProductsList);
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
          id={item.id}
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

export default MalesProductsPage