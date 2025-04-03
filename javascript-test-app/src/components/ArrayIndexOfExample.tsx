export const ArrayIndexOfExample = () => {
    let numbers = [10, 20, 30, 40];
    let index = numbers.indexOf(30);
    let steps = [`초기 배열: [${numbers.join(", " )}]`, `indexOf(30) 결과: ${index}`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>indexOf()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.indexOf(30);
            `}</pre>
        </div>
    );
};