import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { boardListState } from '../sharedState/boardState';
import { boardApi } from '../api/boardApi';

const List = () => {
    console.log("✅ ReactBoardApp List 컴포넌트 렌더링됨");

    const [boardList, setBoardList] = useRecoilState(boardListState);

    useEffect(() => {
        console.log("🟢 List 컴포넌트가 렌더링됨! 현재 경로:", window.location.pathname);

        const fetchData = async () => {
            const boards = await boardApi.fetchBoardList();
            setBoardList(boards);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>게시판 목록</h1>
            <ul>
                {boardList.map(board => (
                    <li key={board.id}>{board.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
