import React from 'react';

class SearchInput extends React.Component{


    constructor(props){
        super(props);
        this.state={entry:''};
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
    }
    render(){
        return(
            <div className='ui segment inverted '>
                <form onSubmit={this.onFormSubmit} className='ui form '>
                    <div className='field'>
                        <div className="ui action input">
                            <input type="text" onChange={(event)=>this.setState({entry:event.target.value})} 
                            value={this.state.entry} placeholder="Search..."/>
                            <button className="ui icon button">
                                <i className="search icon"></i>
                            </button>
                         </div>
                    </div>
                   
                 </form>    
            </div>
        )
    }
}

export default SearchInput;