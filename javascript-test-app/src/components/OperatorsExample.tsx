export const OperatorsExample = () => {
    const strictEquality = 10 === ("10" as any);
    const logicalAnd = true && false;
    const logicalOr = true || false;
    const bitwiseAnd = 5 & 1;
    const bitwiseOr = 5 | 1;

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>연산자</h3>
            <pre>{`
                console.log(10 === "10");   // ${strictEquality}
                console.log(true && false); // ${logicalAnd}
                console.log(true || false); // ${logicalOr}
                console.log(5 & 1);         // ${bitwiseAnd}
                console.log(5 | 1);         // ${bitwiseOr}
            `}</pre>
        </div>
    );
};
