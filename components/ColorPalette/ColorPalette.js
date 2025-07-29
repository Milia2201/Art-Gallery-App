export default function ColorPalette({colors})
{
    if (!colors || colors.length === 0) {
        return <p>No colors available.</p>;
    }

    return (
        <ul>
            {colors.map((color, index) => (
                <li key={index} style={{ backgroundColor: color, padding: "10px", margin: "5px 0" }}>
                    
                </li>
            ))}
        </ul>)}