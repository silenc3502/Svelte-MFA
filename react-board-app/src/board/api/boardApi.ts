import axios from 'axios';
import { Board } from '../sharedState/boardState';

const API_BASE_URL = 'http://your-api-endpoint.com/board';

export const boardApi = {
    fetchBoardList: async (): Promise<Board[]> => {
        console.log('fetchBoardList() called!')
        const response = await axios.get<Board[]>(`${API_BASE_URL}/list`);
        return response.data;
    },

    fetchBoardDetail: async (id: number): Promise<Board> => {
        const response = await axios.get<Board>(`${API_BASE_URL}/detail/${id}`);
        return response.data;
    }
};
