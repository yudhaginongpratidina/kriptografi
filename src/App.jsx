import { useState } from "react"

export default function App() {

    const [plainText, setPlainText] = useState('')
    const [key, setKey] = useState('')
    const [mode, setMode] = useState('encrypt')
    const [result, setResult] = useState('')

    return (
        <div className="w-full min-h-screen flex items-center justify-center p-4 bg-slate-100">
            <div className="w-full max-w-md p-2 flex flex-col items-center justify-center gap-4 rounded-md bg-white">

                {/* APPLICATION NAME */}
                <h1 className="text-lg font-medium">VEGENERE CIPHER</h1>

                {/* TABS NAVIGATION */}
                <div className="w-full flex items-center justify-between gap-2">
                    <button onClick={() => setMode('encrypt')} className={`w-full p-2.5 rounded-md ${mode === 'encrypt' ? 'bg-indigo-500 text-white' : 'bg-white border border-indigo-500'}`}>Encrypt</button>
                    <button onClick={() => setMode('decrypt')} className={`w-full p-2.5 rounded-md ${mode === 'decrypt' ? 'bg-indigo-500 text-white' : 'bg-white border border-indigo-500'}`}>Decrypt</button>
                </div>

                {/* FORM */}
                { mode === 'encrypt' &&
                    <form className="w-full flex flex-col gap-2.5">
                        <div className="flex flex-col gap-0.5">
                            <label htmlFor="plainText" className="text-sm">Plain Text</label>
                            <textarea 
                                id="plainText"
                                placeholder="Enter plain text"
                                className="w-full min-h-[100px] max-h-[100px] overflow-auto p-2 rounded-md border border-slate-200 outline-none focus:border-indigo-500 focus:shadow-md duration-200"
                                value={plainText}
                                onChange={(e) => setPlainText(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="key" className="text-sm">Key</label>
                            <input
                                type="text"
                                id="key"
                                placeholder="Enter key"
                                className="w-full p-2 rounded-md border border-slate-200 outline-none focus:border-indigo-500 focus:shadow-md duration-200"
                                value={key}
                                onChange={(e) => setKey(e.target.value)}
                            />
                        </div>
                        <button className="w-full p-2.5 rounded-md bg-indigo-500 text-white">Encrypt</button>
                    </form>
                }

                { mode === 'decrypt' &&
                    <form className="w-full flex flex-col gap-2.5">
                        <div className="flex flex-col gap-0.5">
                            <label htmlFor="cipherText" className="text-sm">Cipher Text</label>
                            <textarea 
                                id="cipherText"
                                placeholder="Enter cipher text"
                                className="w-full min-h-[100px] max-h-[100px] overflow-auto p-2 rounded-md border border-slate-200 outline-none focus:border-indigo-500 focus:shadow-md duration-200"
                                value={plainText}
                                onChange={(e) => setPlainText(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="key" className="text-sm">Key</label>
                            <input
                                type="text"
                                id="key"
                                placeholder="Enter key"
                                className="w-full p-2 rounded-md border border-slate-200 outline-none focus:border-indigo-500 focus:shadow-md duration-200"
                                value={key}
                                onChange={(e) => setKey(e.target.value)}
                            />
                        </div>
                        <button className="w-full p-2.5 rounded-md bg-indigo-500 text-white">Decrypt</button>    
                    </form>
                }

                <div className="w-full flex flex-col gap-0.5">
                    <label htmlFor="result">Result</label>
                    <textarea
                        id="result"
                        className="w-full min-h-[100px] max-h-[100px] overflow-auto p-2 rounded-md border border-slate-200 outline-none focus:border-indigo-500 focus:shadow-md duration-200"
                        value={result}
                        onChange={(e) => setResult(e.target.value)}
                    ></textarea>
                </div>
            </div>
        </div>
    )
}