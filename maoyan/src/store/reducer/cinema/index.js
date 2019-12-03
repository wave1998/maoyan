import initstate from '../../state/cinema'
export default function (state=initstate,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type==="CHANGE_CITY"){
        state.presentCityId=payload.cityId;
        state.presentCityName=payload.cityName;
        state.areaId=-1;
        state.hallType=-1;
        state.brandId=-1;
        state.serviceId=-1;
        state.districtId=-1;
        state.stationId=-1;
        state.lineId=-1;
    }
    if(type==="CHANGE_DISTRICT"){
        state.districtId=payload.districtId;
    }
    if(type==="CHANGE_AREAS"){
        state.areaId = payload.areaId;
        state.stationId=-1;
        state.lineId=-1;
    }
    if(type==="CHANGE_LINE"){
        state.lineId = payload.lineId
    }
    if(type==="CHANGE_STATION"){
        state.stationId = payload.stationId;
        state.districtId=-1;
        state.areaId=-1;
    }
    if(type==="CHANGE_BRAND"){
        state.brandId=payload.brandId
    }
    if(type==="CHANGE_HALLTYPE"){
        state.hallType=payload.hallTypeId;
        state.serviceId=payload.serviceId;
    }
    return state;
}