import './productList.css';
import { useStateValue } from './StateProvider';
import Card from './Card';
const ProductList = () => {
  const { initialState } = useStateValue();
  return(
    <div className="productList">
      {
        initialState.productList.map((item, index)=><Card {...item} key={index}/>)
      }
    </div>
  )
}

export default ProductList;