import React ,{ Component } from "react";

class ErrorBoundary extends Component {

    state = {
        hasError : false,
        errormessag : ' '
    };

    componentDidCatch (error, info) {
        this.setState({
            hasError:true,
            errormessage : error

        })
    }
    render (){
        if(this.state.hasError){
            return <h1>{this.state.errormessag}</h1>
        }else{
            return this.props.children;
        }
      
    } 
}

export default ErrorBoundary;