import {  FaHeart } from "react-icons/fa";

const Rating = ({rate}) => {
  return Array(5).fill().map((item, i) => <Star key={i} selected={rate > i}/>)
}

const Star = ({ selected }) =>
<FaHeart color={ selected ? 'red' : 'gray'}/>

export default Rating;