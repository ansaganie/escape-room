import { RootState } from '../store';

const getServerNotWorking = (state: RootState): boolean => state.app.serverNotWorking;

export { getServerNotWorking };

