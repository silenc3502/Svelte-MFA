import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { boardListState } from '../sharedState/boardState';
import { boardApi } from '../api/boardApi';
import {
    Box,
    Button,
    List as MUIList,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const List = () => {
    console.log("✅ ReactBoardApp List 컴포넌트 렌더링됨");

    const [boardList, setBoardList] = useRecoilState(boardListState);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("🟢 List 컴포넌트가 렌더링됨! 현재 경로:", window.location.pathname);

        const fetchData = async () => {
            const boards = await boardApi.fetchBoardList();
            setBoardList(boards);
        };
        fetchData();
    }, []);

    const handleCreate = () => {
        navigate('/board/create');
    };

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                게시판 목록
            </Typography>

            <Button variant="contained" color="primary" onClick={handleCreate} sx={{ mb: 2 }}>
                게시글 작성
            </Button>

            {boardList.length === 0 ? (
                <Typography variant="body1" color="text.secondary">
                    작성된 게시글이 없습니다.
                </Typography>
            ) : (
                <MUIList>
                    {boardList.map((board) => (
                        <ListItem
                            key={board.id}
                            divider
                            onClick={() => navigate(`/board/read/${board.id}`)}
                            sx={{ cursor: 'pointer' }}
                        >
                            <ListItemText primary={board.title} />
                        </ListItem>
                    ))}
                </MUIList>
            )}
        </Box>
    );
};

export default List;
