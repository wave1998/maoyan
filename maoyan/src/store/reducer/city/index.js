import initstate from '../../state/city/presentCityName'
import cityType from '../../actionType/city'
export default function (state=initstate,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===cityType.CHANGE_CITY){
        state.presentCityId=payload.cityId;
        state.presentCityName=payload.cityName;
    }
    return state;
}