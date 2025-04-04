import { Board } from '../sharedState/boardState';
export declare const boardApi: {
    fetchBoardList: () => Promise<Board[]>;
    fetchBoardDetail: (id: number) => Promise<Board>;
};
