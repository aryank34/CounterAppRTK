import {useDispatch} from 'react-redux';

const Button = ({value,action}) => {
  const dispatch = useDispatch();
  return (
    <button className="btn btn-primary" onClick={()=>{
      dispatch(action(value==='+'?1:-1));
    }}>{value}</button>
  )
}

export default Button