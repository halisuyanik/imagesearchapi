import React from 'react';
import SearchInput from "./SearchInput";
import axios from 'axios';
import ImageList from './ImageList';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={images:[],};
    }

     onSearchSubmit= async(entry)=>{
       const response=await axios.get(process.env.PIXABAY_KEY)

        this.setState({images:response.data.hits})
    }

    render(){
        return(
            <div className='ui segment inverted container  ' style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}></SearchInput>
                <ImageList images={this.state.images} ></ImageList>
            </div>
        )
    }
}

export default App;
