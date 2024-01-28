import { useEffect, useState } from 'react';
import './style.css';

export const AsyncList = () => {
  const [listData, setListData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setListData([
        'Name_1',
        'Name_2',
        'Name_3',
        'Name_4',
        'Name_5',
      ])
    }, 1000)
  }, []);

  if (!listData) {
    return null
  };

  return (
    <ul className='list'>
      {
        listData.map((dataListItem, index) => {
          return <li className='list__item' key={index}>
            {dataListItem}
          </li>
        })
      }
    </ul>
  )
}