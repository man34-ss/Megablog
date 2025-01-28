// common button which can be used directly to create any button
import React from "react";
//created button function in which  function we passed text which will br=e displayed on text 
//also some default css properties and we can gove more propertires during calling of function
//...props alllow to pass more propertires of css

function Button({
    children,
    type='button',
    bgColor = 'bg-blue-600',
    textColor= 'text-white',
    className='',
    ...props


}){
    return(
        <button className= {`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}  {...props}>
           {children}
        </button>
    )
}

export default Button