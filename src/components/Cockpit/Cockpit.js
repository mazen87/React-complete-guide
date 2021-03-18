import React ,{useEffect , memo , useRef} from 'react';
import classesCssModules from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    useEffect(()=>{
        console.log('[cockpit.js] useEffect');
        //Http request.....
       setTimeout(()=>{
            alert('date was successfully saved to cloiud !');
        },1000);
        toggleBtnRef.current.click();
        return ()=>{
           // clearTimeout(timer);
            console.log('[cockpit.js] clean up work in useEffect !');
        };
    // },[props.persons]);
     },[]);

    // useEffect() : you can use this method as many as you want 

     useEffect(()=>{
        console.log('[cockpit.js]  2nd useEffect');
        return ()=>{
            console.log('[cockpit.js] clean up work in 2nd useEffect !')
        };
     })
    let classesCss = [];
    let buttonClass = [classesCssModules.Button];
    if(props.showPersons){
        buttonClass.push(classesCssModules.Red);
    }
    if(props.personsLength <= 2) {
      classesCss.push(classesCssModules.red);
    }
    if(props.personsLength<=1) {
       classesCss.push(classesCssModules.bold);
    }
    return (
       <div>
        <h1>{props.appTitle}</h1>
        <p className={classesCss.join(' ')} >This is really working!</p>
        
        <button ref={toggleBtnRef}
        className={buttonClass.join(' ')} onClick={props.clicked}>Toggle Persons</button>
       <AuthContext.Consumer>
           {
               (context)=>{
              return  <button onClick={context.login} className={classesCssModules.Button}>log in </button>
               }
           }
           
       </AuthContext.Consumer>
       
      </div>
    );
};
export default React.memo(Cockpit); 