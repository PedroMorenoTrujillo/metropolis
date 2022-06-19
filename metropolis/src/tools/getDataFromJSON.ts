import { MainObject } from '@/interfaceModels';
import axios from 'axios';

export const getDataFromJSON = async (url: string): Promise<MainObject> => {
    return await axios.get(url).then(res => res?.data)
}