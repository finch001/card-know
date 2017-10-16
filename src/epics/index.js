import {Observable}  from 'rxjs';
import {combineEpics} from 'redux-observable';


function fetchEpic(action$) {
	return action$;
}


export const  rootEpic = combineEpics(fetchEpic);