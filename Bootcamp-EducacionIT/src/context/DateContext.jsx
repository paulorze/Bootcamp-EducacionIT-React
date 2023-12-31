import { createContext, useEffect, useRef, useState } from "react";

export const DateContext = createContext();

const DateContextComponent = ({children}) => {
    // Estados agregados para asegurar funcionamiento de useEffects
    const [submittedForm, setSubmittedForm] = useState(false);
    const [completedValidations, setCompleteValidations] = useState(false);
    const [firstUpdate, setFirstUpdate] = useState(true)
    
    // Errores y estados necesarios para mostrar la info al usuario
    const [devolucion, setDevolucion] = useState(null);
    const [yearError, setYearError] = useState(false);
    const [monthError, setMonthError] = useState(false);
    const [dayError, setDayError] = useState(false);
    const [maxDays, setMaxDays] = useState(31);
    
    // Elementos necesarios para la validacion del dia
    const [february, setFebruary] = useState(false);
    const [longMonth, setLongMonth] = useState(false);
    const [leapYear, setLeapYear] = useState(false);
    const [day, setDay] = useState(1);

    useEffect(()=>{
        setDayError(()=> verifyDay(day));
        setCompleteValidations((prevValue)=> !prevValue);
    }, [submittedForm]);

    useEffect(()=> {
        if (firstUpdate) {
            setFirstUpdate(false);
        } else {
            if (yearError || monthError || dayError) {
                setDevolucion(false);
            } else setDevolucion(true);
        };
    }, [completedValidations]);

    const verifyDate = (event) => {
        event.preventDefault();
        const year = event.target.elements.year.value;
        const month = event.target.elements.month.value;
        const day = event.target.elements.day.value;

        const verifiedYear = verifyYear(year);
        setYearError(()=> verifiedYear);
        const verifiedMonth = verifyMonth(month);
        setMonthError(()=> verifiedMonth);
        setDay(day)
        setSubmittedForm((prevValue) => !prevValue);
    };
    
    const verifyNumber = (number) => {
        if (isNaN(number)) return true;
        if (number % 1 !== 0) return true;
    };

    const verifyYear = (year) => {
        if (verifyNumber(year)) return true;
        if (year < 1900 || year > 2099) return true;
        setLeapYear(()=> year % 4 === 0);
        return false;
    };

    const verifyMonth = (month) => {
        const longMonths = [1, 3, 5, 7, 8, 10, 12];
        if (verifyNumber(month)) return true;
        (longMonths.includes(month)) ? setLongMonth(true) : setLongMonth(false);
        (month == 2) ? setFebruary(true) : setFebruary(false);
        if (month < 1 || month > 12) return true;
        return false;
    };

    const verifyDay = (day) => {
        if (verifyNumber(day)) return true;
        if (february) {
            leapYear ? setMaxDays(29) : setMaxDays(28);
        };
        if (longMonth) setMaxDays(31);
        if (!longMonth && !february) setMaxDays(30);
        if (day < 0 || day > maxDays) return true;
        return false;
    };

    const data = {
        devolucion,
        yearError,
        monthError,
        dayError,
        maxDays,
        verifyDate
    };

    return (
        <DateContext.Provider
            value={data}
        >
            {children}
        </DateContext.Provider>
    );
};

export default DateContextComponent;