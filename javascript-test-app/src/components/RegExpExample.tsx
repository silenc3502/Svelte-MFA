export const RegExpExample = () => {
    let text = "Hello 123 World 456!";
    let regex = /\d+/g; // 숫자만 찾는 정규식
    let matches = text.match(regex) || [];
    let steps = matches.map((match, index) => `매칭된 숫자 ${index + 1}: ${match}`);

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>RegExp 문</h3>
            <p>결과:</p>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                let regex = /\\d+/g;
                let matches = text.match(regex);
            `}</pre>
        </div>
    );
};
