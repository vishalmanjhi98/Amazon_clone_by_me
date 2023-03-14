import './shoppingBasket.css';
import { useStateValue } from './StateProvider';
import Rating from './Rating';
const ShoppingBasket = () => {
  const { myReducer } = useStateValue();
  const [ data, dispatch ] = myReducer;

  const removeFromCart = (id) => {
    dispatch({
      type:'REMOVE_FROM_CART',
      payload:id
    })
  }
  
  return(
    <div className="shoppingBasket">
      <h2>Your Shopping Basket</h2>
      <hr/>
      <ul className='list'>
        {
          data.cartList.map(item=>(<li key={item.id}>
            <div className='imageHolder'>
              <img src={item.imageURL} alt="" />
            </div>
            <div className='itemDeatils'>
              <div>{item.title}</div>
              <p><strong>${item.price}</strong></p>
              <div><Rating rate={item.rating}/></div>
              <button onClick={()=>removeFromCart(item.id)}>Remove from Cart</button>
            </div>
          </li>))
        }
      </ul>
    </div>
  )
}

export default ShoppingBasket;