import { useEffect } from "react"

export const useLog = (state) => {
    const logger = () => {
        if(typeof state == "string"){
            console.log("o effect ta pegando o texto, que é: " + state)
        } else if (state >= 0){
            console.log("o effect ta pegando um número")
        } 
    }
    useEffect(logger, [state]);
} 