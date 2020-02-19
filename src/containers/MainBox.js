import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
   constructor(props){
     super() 
     this.state = {
       display: 'profile'
     }
   }

  notDry = (e) => { 
    this.setState({
      display: e.target.id
    })
  }
  display = () => {
    switch(this.state.display){
      case 'profile': 
      return Profile()
      case 'photo':
      return Photos()
      case 'cocktail':
      return Cocktails()
      case 'pokemon':
      return < Pokemon /> //whenever it's calling for a class for info, use tag < /> 
    }
  }

  render() {

    const detailsToDisplay = <div>Hi, I'm div!</div>

    return (
      <div>
        <MenuBar display = {this.state.display} notDry={this.notDry}/>
        {this.display()}
      </div>
    )
  }

}

export default MainBox
