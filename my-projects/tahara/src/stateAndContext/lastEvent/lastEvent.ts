import axios from 'axios';
import { EventObject } from "../../Components/HomePage/AddEvent";

const GET_LAST_EVENT = "GET_LAST_EVENT";

interface GetLastEventType {
    type: typeof GET_LAST_EVENT;
}

export const GetLastEvent = (): GetLastEventType => {
    return {
        type: GET_LAST_EVENT
    };
};

const initialState = (): EventObject[] => {
    try {

        axios.get('https://tahara-9d10bf.appdrag.site/api/getAllEvents', {
            params: {
                "AD_PageNbr": "1",
                "AD_PageSize": "500"
            }
        }).then(function (response) {
            const data: EventObject[] = JSON.parse(response.data);
            return data;
        });
    } catch (e) {
        throw e;
    }
};

const GetLastEventReducer = (state: EventObject[] = , action: GetLastEventType): EventObject => {
    switch (action.type) {
        case (GET_LAST_EVENT): {
            return initialState();
        }
        default: {
            return state;
        }
    }
};

const reducer =; 