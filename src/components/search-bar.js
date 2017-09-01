import React, { Component } from 'react';
import { Input, Sticky } from 'semantic-ui-react';

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state={
      term:''
    }
  }

  handContextRef = contextRef => this.setState({contextRef})

  render(){
    const { contextRef } = this.state

     return(
      <div ref={this.handleContextRef}>
        <Sticky context={contextRef}>
          <Input fluid className='searchBar' size='medium' icon='search' placeholder='Search' value={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>
        </Sticky>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term: term});
    this.props.onSearchInputChange(term);
  }
}




export default SearchBar;
