
// import './App.css'
// //import Header from './components/Header';
// import {useState} from 'react'
// import Counter from './Counter'
// import Embloyee from './Embloyee'
 //import Header from "./components/Header";
// function App() {
//  // const data='iam rishana'
//  // const count=0
//   const [count,setCount]=useState(0)
//    const addCount=()=>{
//     setCount(count+1)
//    }
//    // spred operator
//   let obj={
//    title:'ist counter',
//     count
//   }
//   let emp=[{name:'rishana', age:21},{name:'minnu', age:234}]

//   return (

//     // <div>
//     //   <h1>counter:{counter}</h1>
//     //  <h1 style={{color:'red'}}>Hello world</h1>
//     //  <p className='hello'>haaaai gysss {data}</p>
//     //  <Header data={data}    />
//     //  </div>
//     // 33  <Counter {...obj} />
//     <div>
//       <button className="btn-success" onClick={addCount}>Add</button>
//       <Counter {...obj} />
//       <Counter title="2nd" count={count} />


//       {
//         emp.map((objj,index)=>{
//            return(
//             <Embloyee key={index} name={objj.name} age={objj.age}/>
//            )
//         })
//       }
//     </div>
    

//   );
// }

// export default App;

//import Mount from "./Mount";
// import { useState } from "react";
// import Mount from "./components/Mount";
// import Counter from "./Counter";
//  function App (){

//    const [state,setState] = useState(true)
//     return (
//        <div className="App">
       
//          <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
//          { state? <Counter/>: <Mount/>}
//        </div>
//     );
//  }
//  export default App;

// TO DO APP

// import React from 'react';
// import './App.css';
// import {useState} from 'react'
// function App() {
//   const [toDos,setTodos]=useState([])
//   const [toDo,setTodo]=useState('')

//   return (
//     <div className="app">
//       <div className="mainHeading">
//         <h1>ToDo List</h1>
//       </div>
//       <div className="subHeading">
//         <br />
//         <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
//       </div>
//       <div className="input">
//         <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
//         <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])}  className="fas fa-plus"></i>
      
//       </div>
     
//       <div className="todos">
//         { toDos.map((obj)=>{

//      return(
//         <div className="todo">
//           <div className="left">
//             <input onChange={(e)=>{
//               console.log(e.target.checked)
//               console.log(obj)
//               setTodos(toDos.filter(obj2=>{
//                 if(obj2.id===obj.id){
//                   obj2.status=e.target.checked
//                 }
//                 return obj2
//               }))
//             }}value={obj.status} type="checkbox" name="" id="" />
//             <p>{obj.text}</p>
//           </div>
//           <div className="right">
//             <i onClick={(e)=>{
//               setTodos(toDos.filter(obj2=>{
//                 let temp;
//                 if(obj2.id!==obj.id){
//                   temp=obj2
//                 }
//                 return temp;
//               }))
//             }} className="fas fa-times"></i>
//           </div>
//         </div>)
//       })}
//       {toDos.map((obj)=>{
//         if(obj.status){
//           return(<h1>{obj.text}</h1>)
//         }
//          return null
//       })}
       
//       </div>
//     </div>
//   );
// }

// export default App;


// NETFLIX

//import react from 'react'

import NavBar from "./components netflix/NavBar/NavBar"
import Banner from "./components netflix/Banner/Banner"
import {action,originals} from './urls'
 //import './components netflix/App netflix.css'
 import './App.css'
import RowPost from "./components netflix/RowPost/RowPost";

function App(){
    return(
        <div className="App">
            <NavBar/>
            <Banner/>
            <RowPost url={originals} title='Netflix Originals'   />
            <RowPost url={action}  title='Action' isSmall  />
        </div>
    );
}
export default App;