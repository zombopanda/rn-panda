import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { fromEvent, Observable } from 'rxjs';
import { AppState } from 'react-native';

export const $appState = fromEvent(AppState, 'change');

export const $netInfo = new Observable<NetInfoState>(((obs) => (
  NetInfo.addEventListener((info) => obs.next(info))
)));
