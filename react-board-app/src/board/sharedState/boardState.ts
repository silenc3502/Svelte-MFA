import { atom } from 'recoil';

// 개별 게시글 타입 정의
export interface Board {
    id: number;
    title: string;
    content: string;
    create_date: string; // ISO 형식 문자열로 저장
    update_date: string;
    account_profile_id: number;
}

// 게시글 리스트 상태
export const boardListState = atom<Board[]>({
    key: 'boardListState',
    default: [],
});

// 현재 선택된 게시글 상태
export const boardDetailState = atom<Board | null>({
    key: 'boardDetailState',
    default: null,
});
