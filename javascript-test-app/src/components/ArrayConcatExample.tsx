export const ArrayConcatExample = () => {
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let concatenated = arr1.concat(arr2);
    let steps = [`초기 배열1: [${arr1.join(", ")}]`, `초기 배열2: [${arr2.join(", ")}]`, `concat 후: [${concatenated.join(", ")}]`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>concat()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                arr1.concat(arr2);
            `}</pre>
        </div>
    );
};