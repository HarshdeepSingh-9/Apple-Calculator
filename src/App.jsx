import { useState } from 'react'
import "./App.css"

function App() {
  const [expr, setExpr] = useState("")

  const handlePress = (val) => {
    setExpr(prev => prev + val)
  }

  const calculate = () => {
    try {
      // eval is OK for learning
      const result = eval(expr)
      setExpr(result.toString())
    } catch {
      setExpr("Error")
    }
  }

  const clear = () => setExpr("")
  const backspace = () => setExpr(prev => prev.slice(0, -1))

  return (
    <div className="calculator">
      <Display value={expr || "0"} />

      <div className="grid">
        <CalcButton value="7" onPress={handlePress} />
        <CalcButton value="8" onPress={handlePress} />
        <CalcButton value="9" onPress={handlePress} />
        <CalcButton value="/" onPress={handlePress} />

        <CalcButton value="4" onPress={handlePress} />
        <CalcButton value="5" onPress={handlePress} />
        <CalcButton value="6" onPress={handlePress} />
        <CalcButton value="*" onPress={handlePress} />

        <CalcButton value="1" onPress={handlePress} />
        <CalcButton value="2" onPress={handlePress} />
        <CalcButton value="3" onPress={handlePress} />
        <CalcButton value="-" onPress={handlePress} />

        <CalcButton value="0" onPress={handlePress} />
        <CalcButton value="." onPress={handlePress} />
        <CalcButton value="+" onPress={handlePress} />
        <button className="equal" onClick={calculate}>=</button>

        <button className="clear" onClick={clear}>C</button>
        <button className="back" onClick={backspace}>⌫</button>
      </div>
    </div>
  )
}

function Display({ value }) {
  return <div className="display">{value}</div>
}

function CalcButton({ value, onPress }) {
  return (
    <button onClick={() => onPress(value)}>
      {value}
    </button>
  )
}


export default App
