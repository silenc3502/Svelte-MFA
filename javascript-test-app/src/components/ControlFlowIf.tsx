export const ControlFlowIf = () => {
    let x = 10;
    let result;
    if (x > 5) {
        result = "x는 5보다 큽니다.";
    } else {
        result = "x는 5보다 작거나 같습니다.";
    }
    let ternaryResult = x > 5 ? "x는 5보다 큽니다." : "x는 5보다 작거나 같습니다.";

    return (
        <div style={{marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px"}}>
            <h3>if-else 문 & 삼항 연산자</h3>
            <p>if-else 결과: {result}</p>
            <p>삼항 연산자 결과: {ternaryResult}</p>
            <pre>{`
                if (x > 5) {
                    console.log("x는 5보다 큽니다.");
                } else {
                    console.log("x는 5보다 작거나 같습니다.");
                }
                
                console.log(x > 5 ? "x는 5보다 큽니다." : "x는 5보다 작거나 같습니다.");
            `}</pre>
        </div>
    );
};