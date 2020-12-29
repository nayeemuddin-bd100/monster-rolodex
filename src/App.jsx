import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/searchbox.component.jsx';

class App extends Component{
  constructor(){
    super()

    this.state = {
     monsters: [
      // hard code user koraar bodole componentDidMount er maddome ekane data fetch kora hoyeche! jaa dynamic vabee render hobe !
      //  {
      //    name: 'Frankstein',
      //    id:'abc1'
      //  },
      //  {
      //    name: 'Dracula',
      //    id: 'abc2'
      //  },
      //  {
      //    name: 'Zombie',
      //    id: 'abc3'
      //  }
     ],
     searchField : ''
    }

    // this.handleChange = this.handleChange.bind(this)
    //class component er modde jodi kono method declare kora hoi tahole this ke bind kore dite hobe!onnothaai eta kaj korbe nah ! 
    //r this ke bind korar poribotte handlechange method e jodi arro function use kori tahole r this ke bind korar dorkar nhai...!
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({
      monsters : users
    }))
  }

  //axios er maddome data ante chailee...!!
  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(response => console.log(response.data))
  // }

  /* handleChange(e) {
    this.setState({ searchField: e.target.value });
    console.log(this);
  }
  */
  // bind na kore arrow function use kora hoyeche

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }


  render() {
    const { monsters, searchField } = this.state
    const filterdmonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())

    ))

    

    return (
      <div className="App">
        <h2>Monster Rolodex</h2>
        <SearchBox
          placeholder=" Search Monsters "
          handleChange={this.handleChange}
        />


        {/* <input
          type="search"
          placeholder="Search Monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        /> */}
        {/* <CardList monsters={ this.state.monsters } /> 
           ekhane monsters props er maddome state er data gulo cardlist e rakha hoyeche */}
        <CardList monsters={filterdmonsters}/>

        {/* jokon search kora hobe tokon monsters state er shob data show na kore sudumatro filter kora data gulo show korbe  */}
      </div>
    );
  }
}

export default App;
