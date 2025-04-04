import React from "react";
import MainRouter from "./board/store/mainRouter.tsx";
import {RecoilRoot} from "recoil";

const ReactBoardApp: React.FC = () => {
    console.log("✅ ReactBoardApp 렌더링됨");

    return (
        <RecoilRoot>
            <MainRouter/>
        </RecoilRoot>
    );
};

export default ReactBoardApp;
