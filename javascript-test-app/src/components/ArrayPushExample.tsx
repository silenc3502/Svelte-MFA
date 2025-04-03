export const ArrayPushExample = () => {
    let numbers: number[] = [1, 2, 3];
    let updatedNumbers = [...numbers];
    updatedNumbers.push(4);
    let steps = [`초기 배열: [${numbers.join(", ")}]`, `4 추가 후: [${updatedNumbers.join(", ")}]`];

    return (
        <div style={{marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px"}}>
            <h3>push()</h3>
            <p>결과:</p>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.push(4);
            `}</pre>
        </div>
    );
};
