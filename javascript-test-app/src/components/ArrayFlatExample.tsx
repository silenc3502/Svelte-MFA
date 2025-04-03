export const ArrayFlatExample = () => {
    let nestedArray = [[1, 2], [3, 4]];
    let flattened = nestedArray.flat();
    let steps = [`초기 배열: [${nestedArray.map(arr => `[${arr.join(", ")}]`).join(", ")}]`, `flat 후: [${flattened.join(", ")}]`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>flat()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                nestedArray.flat();
            `}</pre>
        </div>
    );
};