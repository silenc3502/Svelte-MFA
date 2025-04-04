import React, {Suspense, useEffect} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import List from "../pages/List.tsx";

const MainRouter = () => {
    console.log("✅ ReactBoardApp MainRouter 렌더링됨");

    useEffect(() => {
        console.log("✅ 현재 경로:", window.location.pathname);
    }, []);

    return (
        <>
            <Suspense fallback={<div>로딩중 ........</div>}>
                <Routes>
                    <Route path="/" element={<Navigate to="list" replace/>}/>
                    <Route path="list" element={<List/>}/>
                    {/*<Route path="/react-board-app/register" element={<TypescriptBoardRegisterPage/>}/>*/}
                    {/*<Route path="/react-board-app/read/:boardId" element={<TypescriptBoardReadPage/>}/>*/}
                    {/*<Route path="/react-board-app/modify/:boardId" element={<TypescriptBoardModifyPage/>}/>*/}
                </Routes>
            </Suspense>
        </>
    )
}

export default MainRouter