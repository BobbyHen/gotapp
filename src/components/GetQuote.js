import React, { Component } from 'react';
import './formStyle.css';

class GetQuote extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeEnglishText = this.onChangeEnglishText.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            englishText: '',
           
        }

    }
    onChangeEnglishText(e) {
        this.setState({
            englishText: e.target.value
        });
    }

    
    onSubmit (e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`English quote: ${this.state.englishText}`);
        

    }

    render () {
        return (
            <div>
                <h1> Fill out the form to be part of the family:</h1>
                <div className='form'>
                    <form onSubmit = {this.onSubmit}>
                        <p> English: </p> 
                            <textarea value={this.state.englishText} onChange={this.onChangeEnglishText} cols={40} rows={10} name="englishText"/>
                        <br /><br /><input type="submit" value="translate" /><br /><br />
                    </form>
                </div>

            </div>
            
        );
        
        
    }
}


    


export default GetQuote;