import React from "react";

interface InputProps{
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    placeholder?: string;
    label?: string;
    styleCustom?: string;
    onClick?: () => void;
}

export default function Input(props: InputProps){
    return (   
        <div className="flex flex-col w-full gap-1">
            {
                props.label ? (
                    <label className="font-semibold">
                        {props.label}
                    </label>
                ) : null
            }
            <input 
              className={`w-full px-2 py-1 rounded-md border border-zinc-500 ${props.styleCustom}`}
              placeholder={props.placeholder}
              type={props.type} 
              onChange={props.onChange} 
              value={props.value} 
              name={props.label}
            />
        </div>
    )
}