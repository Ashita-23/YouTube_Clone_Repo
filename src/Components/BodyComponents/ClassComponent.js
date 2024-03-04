import { Component } from "react"

class UserClass extends Component {
constructor(props){
    super(props);
 this.state ={
    // in class componrnts we have one state object we can create multiple numbers of states here...
   userInfo:{
    // initial values of state
     name : "default",
     location : "default"
   }
 }
    

    console.log("constructor")
    // place where we create our states
}
// to make an api call we can make our CDM async
 async componentDidMount(){
    console.log("componentDidMount")
// place where we call our APIs
const ApiData = await fetch("https://api.github.com/users")
const Data = await ApiData.json()
console.log(Data,"Data from CDM Api call !")
this.setState({
    userInfo:Data
})

this.timer = setTimeout(()=>{
    console.log("setTime out from Component Did Mout !")
})
}


componentDidUpdate(preProps, prevState){

    console.log("component Did Update")
    if(this.state.count !== this.prevState.count){
        return "than do this"
    }

}

componentWillUnmount(){
    // this one is use to remove setTimeOut and setInterval 
    console.log("Components will unmount")
    clearTimeout(this.timer)
}

render(){
    console.log("render")
    // place where we extract our props
  const {location}= this.state.userInfo;
    return(
        <div>
            <h1>user name : {this.state.userInfo.name}</h1>
            <h1>user: {location}</h1>
        </div>
    )
}
}

export default UserClass 
// <UserClass username = "akshay"/> prop for user name