import React from "react";
import "./App.css"
import "./components/Header"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import BasicTextFields from "./components/InputField";


// aik file k ander multiple components bhi bana skty hain jese aik hmne App ka bnaya hwa to aese hi aik hm header ka banayengay
// Jo bhi component ka name hoga uska first letter hameesha capital hoga jese App , Header
// Component banany ka aik faida yeh hai k agr kisi aik component mn issue aye to wo srf aik component ka hi ho baki sab sahi ho
//React mn ham attribute ki jaga prop ka word use krty hain
//   Ab hmne jo Header or footer ka component yahan pr banaya hai usko comment krengay or alag sy folder mn jaa kr banayengay phr import krayengay



// class Header extends React.Component{
//   render(){
//     return(
//       <div className="header">
//       <h1>Header here</h1>
//       </div>
//     )
//   }
// }


// class Footer extends React.Component{
//   render(){
//     return(
//       <h1 className="footer">Footer here</h1>
//     )
//   }
// }



class App extends React.Component {
  render() {
  //   let arr = [{text:"Usman"},
  //   {text: "Rahim"},
  //   {text: "Rahim"},
  //   {text: "Rahim"},
  //   {text: "Rahim"}
  // ]


// --------------------------------------------------


    // let arr = []

    // function addTodo() {
    //   // arr.push(input.value)
    //   input.value = '';
    //   console.log(input.value);
    // }

    // let input = document.getElementById("input")
    return (
      // <div>
      //   <h1>
      //     Hello Usman
      //   </h1>
      //   <ul>
      //     {arr.map((items,index)=>{
      //       // yahan pr key k andr jo index dala hai hmne us mn hr child ko aik alag kism ki id de di hai hm ne
      //       // {console.log(items.text,index)}
      //       return <li key={index}>{items.text}</li>
      //     })}
      //   </ul>
      // </div>



      <div className="main">
        {/* Component ko target krny ka tareeka yeh hota hai jo neechay header k component py kiya */}
        {/* <Header /> */}

        {/* Yahan pr ab hm Component ko lagayengay jo hmne import kraya hai Header ka */}


        <Header />

        <h1 style={{color:"yellow"}}>Main Component</h1>
        <img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" width="400px" height="400px" />

        {/* <Footer /> */}

        <BasicTextFields />
        <Footer />
        <Button />
        <button type="button" className="btn btn-primary">Primary</button>

      </div>

// --------------------------------------------------


      // <div>
      //   <input type="text" placeholder="Enter your task here" id="input"></input>

      //   <button id="submit" onClick="addTodo()">Submit</button>




      // </div>


    )

  }
}


export default App;
