import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css"


export default function QRCodeGenerator(){
    const [qrCode, setQrCode]=useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode(){
        setQrCode(input)
    }

    return <div className="qr">
        
        <div className="input-btn">
        <h1>QR Code Generator</h1>
        
            <input onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter your value here"/>
            <button disabled={input && input.trim() !== ""?false :true} onClick={handleGenerateQrCode}>Generate</button>
        </div>
        <div className="qrcode">
            <QRCode 
                id="qr-code-value"
                value={qrCode} size={400} bgColor="#fff"
            />
        </div>
    </div>
}