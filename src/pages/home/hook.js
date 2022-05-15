import { useEffect, useState } from 'react';

export const Hook = () => {

    const [ currentDate, setCurrentDate ] = useState(new Date());
    const [ checkState, setCheckState ] = useState(true);

    useEffect(() => {
        setInterval(() => setCurrentDate(new Date()), 30000);
    }, [])

    let currentDateTime = {
        day : currentDate.toLocaleDateString('en-us', { day:"numeric"}),
        month : currentDate.toLocaleDateString('en-us', { month:"long"}),
        year : currentDate.toLocaleDateString('en-us', { year:"numeric"}),
        weekDay : currentDate.toLocaleDateString('en-us', { weekday : "short"}),
        time : currentDate.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        })
    }

    useEffect(()=> {
        if (currentDateTime.time.split(' ')[1] === 'PM') {
            setCheckState(false)
        }
    },[currentDateTime.time])

    return [
        currentDateTime,
        checkState,
        setCheckState
    ]
}
