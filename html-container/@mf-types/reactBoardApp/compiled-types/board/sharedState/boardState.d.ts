export interface Board {
    id: number;
    title: string;
    content: string;
    create_date: string;
    update_date: string;
    account_profile_id: number;
}
export declare const boardListState: import("recoil").RecoilState<Board[]>;
export declare const boardDetailState: import("recoil").RecoilState<Board | null>;
