export const ArrayReduceExample = () => {
    let numbers = [1, 2, 3, 4];
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let steps = [`초기 배열: [${numbers.join(", " )}]`, `reduce 후: ${sum}`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>reduce()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.reduce((acc, num) => acc + num, 0);
            `}</pre>
        </div>
    );
};