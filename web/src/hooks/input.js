import { useState } from 'react';

export const useInput = data => {
    const [value, setValue] = useState(data);

    return {
        value, 
        setValue,
        reset: () => setValue(""),
        bind:{
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    }

}