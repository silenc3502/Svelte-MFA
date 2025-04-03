export const ArrayShiftExample = () => {
    let numbers: number[] = [1, 2, 3, 4];
    let updatedNumbers = [...numbers];
    let removed = updatedNumbers.shift();
    let steps = [`초기 배열: [${numbers.join(", ")}]`, `첫 번째 요소 제거 후: [${updatedNumbers.join(", ")}]`, `제거된 요소: ${removed}`];

    return (
        <div style={{marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px"}}>
            <h3>shift()</h3>
            <p>결과:</p>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.shift();
            `}</pre>
        </div>
    );
};
