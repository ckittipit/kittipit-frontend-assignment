import { useState, useRef } from 'react'
import './App.css'
import Column from './components/Column'

const arrayList = [
  {
      type: 'Fruit',
      name: 'Apple',
  },
  {
      type: 'Vegetable',
      name: 'Broccoli',
  },
  {
      type: 'Vegetable',
      name: 'Mushroom',
  },
  {
      type: 'Fruit',
      name: 'Banana',
  },
  {
      type: 'Vegetable',
      name: 'Tomato',
  },
  {
      type: 'Fruit',
      name: 'Orange',
  },
  {
      type: 'Fruit',
      name: 'Mango',
  },
  {
      type: 'Fruit',
      name: 'Pineapple',
  },
  {
      type: 'Vegetable',
      name: 'Cucumber',
  },
  {
      type: 'Fruit',
      name: 'Watermelon',
  },
  {
      type: 'Vegetable',
      name: 'Carrot',
  },
]

function App() {
  const [itemList, setItemList] = useState(arrayList)
  const [fruitsList, setFruits] = useState([])
  const [vegsList, setVegs] = useState([])
  const isSubListClicked = useRef({})

  const onClickItem = (item) => {
    item.type === 'Fruit' ? setFruits([...fruitsList, item]) : setVegs([...vegsList, item])

    setItemList(itemList.filter((i) => i.name !== item.name))

    isSubListClicked.current[item.name] = setTimeout(() => {
      setItemList((prevList) => [...prevList, item])

      item.type === 'Fruit' ? setFruits((prevFruits) => prevFruits.filter((i) => i.name !== item.name))
      : setVegs((prevVegs) => prevVegs.filter((i) => i.name !== item.name))
    }, 5000)
  }

  const onClickItemFromType = (item) => {

    if (isSubListClicked.current[item.name]) {
      clearTimeout(isSubListClicked.current[item.name])
      setItemList([...itemList, item])
    }

    item.type === 'Fruit' ? setFruits(fruitsList.filter((i) => i.name !== item.name))
    : setVegs(vegsList.filter((i) => i.name !== item.name))
  }

  return (
    <>
      <div className="App" style={{width: '100%'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{width: '150px'}}>
            <Column title="List" items={itemList} onClickItem={onClickItem}></Column>
          </div>
          <div style={{width: '150px'}}>
            <Column title="Fruits" items={fruitsList} onClickItem={onClickItemFromType}></Column>
          </div>
          <div style={{width: '150px'}}>
          <Column title="Veggies" items={vegsList} onClickItem={onClickItemFromType}></Column>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
