import React , {useId} from "react";
//select from option
function Select({
    options,//by default we get in form of array
    label,
    className,
    ...props
},ref){
    const id = useId()
    return(
        <div className="w-full">
            {label && <label></label>}
            <select
            {...props}
            id= {id}
            ref={ref}
            className={`px-3 py-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
                {options?.map((option)=>(
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)