import { useState } from "react"

export default function Color() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function generateRandomNumber(length) {
        return Math.floor(Math.random() * length)
    }

    function createRandomHex() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#'
        for (let i = 0; i < 6; i++) {
            hexColor += hex[generateRandomNumber(hex.length)]
        }
        setColor(hexColor)

    }


    function createRandomRgb() {
        const R = generateRandomNumber(256)
        const G = generateRandomNumber(256)
        const B = generateRandomNumber(256)
        setColor(`rgb(${R},${G},${B})`);
    }
    return (

        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }} >
            <button onClick={() =>
                typeOfColor === 'hex' ? createRandomHex() : createRandomRgb()
            }>GenerateRandomColor</button>

            <button onClick={
                () => setTypeOfColor('hex')
            }>GenerateHexColor</button>

            <button onClick={
                () => setTypeOfColor('rgb')
            }>GenerateRGBColor</button>

        </div>
    )
}