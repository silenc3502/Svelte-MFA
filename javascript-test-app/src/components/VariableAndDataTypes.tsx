export const VariablesAndDataTypes = () => {
    let a = 10;
    const b = "Hello";
    var c = true;
    let d = null;
    let e = undefined;
    let f = { key: "value" };
    let g = [1, 2, 3];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>변수와 데이터 타입</h3>
            <pre>{
                `
                    let a = ${a};                   // Number
                    const b = "${b}";            // String
                    var c = ${c};                 // Boolean
                    let d = ${d};                 // Null
                    let e = ${e};            // Undefined
                    let f = ${JSON.stringify(f)};      // Object
                    let g = ${JSON.stringify(g)};              // Array
                `
            }</pre>
        </div>
    );
};
