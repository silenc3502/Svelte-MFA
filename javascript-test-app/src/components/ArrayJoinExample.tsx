export const ArrayJoinExample = () => {
    let words = ["Hello", "World"];
    let joined = words.join(" ");
    let steps = [`초기 배열: [${words.join(", ")}]`, `join 결과: "${joined}"`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>join()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                words.join(" ");
            `}</pre>
        </div>
    );
};