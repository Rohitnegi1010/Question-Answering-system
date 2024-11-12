import React ,{useState,useRef,useEffect} from 'react'
import "./App.css"
import {data} from'./assets/data';
const App = () => {
    let[index,setIndex]=useState(0);
    let[question,setQuestion]=useState(data[index]);
    let[lock,setLock]=useState(false)
    let[score,setScore]=useState(1);
    let[result,setResult]=useState(false);
  
    let Option1=useRef(null)
    let Option2=useRef(null)
    let Option3=useRef(null)
    let Option4=useRef(null)
   
    let Option =[Option1,Option2,Option3,Option4]

    const checkAns=(e,ans)=>{
      if(index===data.length-1){
      setResult(true)}
        if(lock==false){
        if(question.ans==ans){
        e.target.classList.add("correct")
        setScore(score+1)
        console.log(score)
     setLock(true);
    }
    else{
    e.target.classList.add("wrong")
      setLock(true);
      Option[question.ans-1].current.classList.add("correct")
    }
  }
  }
    const Next=()=>{
      if(lock==true){
        
      setIndex(++index)
      setQuestion(data[index])
      setLock(false);
      Option.map((option)=>{
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      })
    }}
    const reset=()=>{
      setIndex(0)
      setLock(false)
      setQuestion(data[index])
      setResult(false)
      setScore(0)
    }
  return (
    <div className='container'>
        <h1>Quiz appp</h1>
        <hr/>
       {result?<>
       </>:<>
       <h2>{index+1}.  {question.question}</h2>
   <ul>
        <li ref={Option1}onClick={(e)=>{checkAns(e,1)}}>
{question.option1}</li>
        <li ref={Option2}onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li ref={Option3}onClick={(e)=>{checkAns(e,3)}}>
        {question.option3}</li>
        <li ref={Option4}onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        </ul> 
        <button  className='next' onClick={Next}>Next</button>
        <div className='index'>{data.length-index} out of {data.length} remaining</div>

       </>}
        
   {result?<>
   <h3>Your score is {score} out of {data.length}</h3>
   <button className="reset" onClick={reset}>Reset</button>
   </>:<></>}
    </div>
  )
}

export default App