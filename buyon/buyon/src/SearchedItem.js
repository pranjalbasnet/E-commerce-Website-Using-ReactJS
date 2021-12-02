import React from 'react'
import Product from './Product'
import { useStateValue } from './StateProvider';

function SearchedItem() {
    const [{search}, dispatch] = useStateValue();
    return (
        <div>
            {search.map(item => (
            <Product
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}   
        </div>
    )
}

export default SearchedItem
