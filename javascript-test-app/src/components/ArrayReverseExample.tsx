export const ArrayReverseExample = () => {
    let numbers = [1, 2, 3, 4];
    let reversed = [...numbers].reverse();
    let steps = [`초기 배열: [${numbers.join(", ")}]`, `reverse 후: [${reversed.join(", ")}]`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>reverse()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.reverse();
            `}</pre>
        </div>
    );
};