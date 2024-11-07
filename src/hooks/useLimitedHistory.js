import { useState, useEffect } from "react";

const useLimitedHistory = (history, limit) => {
    const [limitedHistory, setLimitedHistory] = useState([]);

    useEffect(() => {
      if(history.length > limit){
        setLimitedHistory(history.slice(-limit));
    } else {
        setLimitedHistory(history);
    }  
    }, [history, limit]);

    return limitedHistory;
}

export default useLimitedHistory;