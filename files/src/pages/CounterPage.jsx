import { useEffect } from "react"
import Button from "../components/Button"
import Message from "../components/Message"
import { counterApi, minus, plus } from "../redux/counter-slice"
import { useDispatch, useSelector } from "react-redux"

const CounterPage = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.counterReducer);
  //Compound Mount (Life Cycle Hook)
  useEffect(()=>{
    dispatch(counterApi());
  },[])
  return (
    <div className="container">
        {!selector.counter && <p>Loading...</p>}
        {selector.counter && <p>Counter Api Value is {selector.counter} and Message is {selector.message}</p>}
        <Message msg='Counter App' type='title'/>
        <Message msg='Value is ' type= ''/>
        <Button value='+' action = {plus} /> &nbsp;
        <Button value='-'action = {minus} />
    </div>
  )
}

export default CounterPage