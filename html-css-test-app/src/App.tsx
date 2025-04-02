import React from "react";
import "./style/main.css"; // ✅ 스타일 가져오기

import { Button, Typography } from "@mui/material";

const App = () => {
    return (
        <div className="container">
            {/* MUI 제목 */}
            <Typography variant="h5" gutterBottom>
                HTML & CSS 학습 공간
            </Typography>

            {/* 1. 기본적인 HTML 요소 */}
            <h1>HTML & CSS 학습에 오신 것을 환영합니다</h1>
            <p>이 단락은 HTML과 CSS가 함께 작동하는 방식을 설명합니다.</p>

            {/* 2. HTML의 기본 구조 설명 */}
            <div className="box">
                <h2>HTML 구조</h2>
                <p>HTML은 제목, 단락, 목록 등 다양한 요소로 구성됩니다.</p>
                <ul>
                    <li>&lt;h1&gt; ~ &lt;h6&gt;: 제목</li>
                    <li>&lt;p&gt;: 단락</li>
                    <li>&lt;a href="#"&gt;: 링크</li>
                    <li>&lt;img src="..."&gt;: 이미지</li>
                    <li>&lt;table&gt;, &lt;ul&gt;, &lt;ol&gt;: 표 및 목록</li>
                </ul>
            </div>

            {/* 3. CSS의 기본 개념 설명 */}
            <div className="box">
                <h2>CSS 기본 개념</h2>
                <p>CSS는 HTML 요소를 스타일링하는 데 사용됩니다.</p>
                <ul>
                    <li>선택자: 요소를 선택 (예: div, p, h1)</li>
                    <li>속성: 스타일을 정의 (예: color, font-size)</li>
                    <li>값: 특정 스타일을 지정 (예: 빨강, 20px)</li>
                </ul>
            </div>

            {/* 4. 링크 및 네비게이션 */}
            <div className="box">
                <h2>링크 및 네비게이션</h2>
                <p><code>&lt;a&gt;</code> 태그를 사용하여 링크를 생성할 수 있습니다.</p>
                <a href="https://www.w3schools.com/html/" target="_blank">
                    HTML 더 알아보기
                </a>
            </div>

            {/* 5. 이미지 추가 */}
            <div className="box">
                <h2>이미지</h2>
                <p><code>&lt;img&gt;</code> 태그를 사용하여 이미지를 표시할 수 있습니다.</p>
                <img src="https://picsum.photos/200" alt="예제 이미지" />
            </div>

            {/* 6. 테이블 추가 */}
            <div className="box">
                <h2>표</h2>
                <p>표는 데이터를 행과 열로 정리합니다.</p>
                <table>
                    <thead>
                    <tr>
                        <th>열 1</th>
                        <th>열 2</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>데이터 1</td>
                        <td>데이터 2</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            {/* 7. 사용자 입력 요소 (폼) */}
            <div className="box">
                <h2>폼과 입력</h2>
                <p>폼은 사용자가 데이터를 입력할 수 있도록 합니다.</p>
                <form>
                    <label htmlFor="name">이름: </label>
                    <input type="text" id="name" name="name" placeholder="이름 입력" />
                    <br />
                    <label htmlFor="email">이메일: </label>
                    <input type="email" id="email" name="email" placeholder="이메일 입력" />
                    <br />
                    <button type="submit" className="custom-button">제출</button>
                </form>
            </div>

            {/* 8. CSS Flexbox & Grid */}
            <div className="box">
                <h2>CSS Flexbox 및 Grid</h2>
                <p>Flexbox와 Grid는 최신 CSS 레이아웃 기술입니다.</p>
                <ul>
                    <li>Flexbox: 항목을 행 또는 열로 정렬하는 데 적합합니다.</li>
                    <li>Grid: 2D 레이아웃을 만들기에 강력한 도구입니다.</li>
                </ul>
            </div>

            {/* 9. CSS Animation */}
            <div className="box">
                <h2>CSS 애니메이션</h2>
                <p>CSS는 키프레임을 사용하여 애니메이션을 적용할 수 있습니다.</p>
                <div className="animated-box">이 상자엔 애니메이션을 적용했습니다!</div>
            </div>

            {/* 10. 오디오 및 비디오 */}
            <div className="box">
                <h2>오디오 및 비디오</h2>
                <p><code>&lt;audio&gt;</code> 및 <code>&lt;video&gt;</code> 태그를 사용하여 멀티미디어 콘텐츠를 추가할 수 있습니다.</p>
                <audio controls>
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
                    브라우저가 오디오를 지원하지 않습니다.
                </audio>
                <br/>
                <video controls width="320">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                    브라우저가 비디오를 지원하지 않습니다.
                </video>
            </div>

            {/* MUI 버튼 */}
            <Button variant="contained" color="primary">
                클릭하세요
            </Button>
        </div>
    );
};

export default App;
