export const ArrayUnshiftExample = () => {
    let numbers: number[] = [2, 3, 4];
    let updatedNumbers = [...numbers];
    updatedNumbers.unshift(1);
    let steps = [`초기 배열: [${numbers.join(", ")}]`, `1 추가 후: [${updatedNumbers.join(", ")}]`];

    return (
        <div style={{marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px"}}>
            <h3>unshift()</h3>
            <p>결과:</p>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.unshift(1);
            `}</pre>
        </div>
    );
};
