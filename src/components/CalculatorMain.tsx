import { useState } from 'react'
import '../styles/globals.css'

function CalculatorMain() {
  const [prevOperation, setPrevOperation] = useState<string>('')
  const [currOperation, setCurrOperation] = useState<string>('')
  const [operation, setOperation] = useState<string | undefined>()
  const [theme, setTheme] = useState<string>('theme1')

  // Function to handle adding a number or decimal point to the current operand
  const addNumber = (number: string) => {
    if (number === '.' && currOperation.includes('.')) return
    if (currOperation.length < 10) {
      setCurrOperation(currOperation + number)
    }
  }

  // Function to handle selecting an operation
  const operationSelection = (operate: string) => {
    if (operate === '') return
    if (currOperation !== '') {
      if (prevOperation !== '') {
        calculatorOperation()
      }
      setOperation(operate)
      setPrevOperation(currOperation)
      setCurrOperation('')
    }
  }

  // Function to perform the selected operation
  const calculatorOperation = () => {
    let result: number
    const prev = parseFloat(prevOperation)
    const current = parseFloat(currOperation)

    switch (operation) {
      case '+':
        result = prev + current
        break
      case '-':
        result = prev - current
        break
      case 'x':
        result = prev * current
        break
      case '/':
        result = prev / current
        break
      default:
        return
    }

    setCurrOperation(result.toString())
    setOperation(undefined)
    setPrevOperation('')
  }

  // Function to handle deleting the last character of the current operand
  const deleteOperation = () => {
    setCurrOperation(currOperation.slice(0, -1))
  }

  // Function to reset the calculator
  const reset = () => {
    setPrevOperation('')
    setCurrOperation('')
    setOperation(undefined)
  }

  // Function to change the theme of the calculator
  const changeTheme = (theme: string) => {
    document.documentElement.className = theme
    setTheme(theme)
  }

  return (
    <main>
      <section className='calculator'>
        <div className='container'>
          {/* Header */}
          <div className='header'>
            <h1 className='heading'>calc</h1>
            <div className='themes-box'>
              <p>theme</p>
              <div className='themes-btns'>
                <div className='labels'>
                  <label htmlFor='theme1'>1</label>
                  <label htmlFor='theme2'>2</label>
                  <label htmlFor='theme3'>3</label>
                </div>
                <div className='theme-inputs'>
                  <input
                    id='theme1'
                    type='radio'
                    name='theme'
                    checked={theme === 'theme1'}
                    onChange={() => changeTheme('theme1')}
                  />
                  <input
                    id='theme2'
                    type='radio'
                    name='theme'
                    checked={theme === 'theme2'}
                    onChange={() => changeTheme('theme2')}
                  />
                  <input
                    id='theme3'
                    type='radio'
                    name='theme'
                    checked={theme === 'theme3'}
                    onChange={() => changeTheme('theme3')}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* User Input */}
          <div className='user-input'>
            <div className='operand-container'>
              <div className='previous-operand'>
                {prevOperation} {operation}
              </div>
              <div className='current-operand'>{currOperation}</div>
            </div>
          </div>
          {/* Calculator Buttons */}
          <div className='calculator-btn'>
            <div className='row'>
              <button className='num-btn' onClick={() => addNumber('7')}>
                7
              </button>
              <button className='num-btn' onClick={() => addNumber('8')}>
                8
              </button>
              <button className='num-btn' onClick={() => addNumber('9')}>
                9
              </button>
              <button className='delete-btn' onClick={deleteOperation}>
                del
              </button>
            </div>
            <div className='row'>
              <button className='num-btn' onClick={() => addNumber('4')}>
                4
              </button>
              <button className='num-btn' onClick={() => addNumber('5')}>
                5
              </button>
              <button className='num-btn' onClick={() => addNumber('6')}>
                6
              </button>
              <button className='operator-btn' onClick={() => operationSelection('+')}>
                +
              </button>
            </div>
            <div className='row'>
              <button className='num-btn' onClick={() => addNumber('1')}>
                1
              </button>
              <button className='num-btn' onClick={() => addNumber('2')}>
                2
              </button>
              <button className='num-btn' onClick={() => addNumber('3')}>
                3
              </button>
              <button className='operator-btn' onClick={() => operationSelection('-')}>
                -
              </button>
            </div>
            <div className='row'>
              <button className='num-btn' onClick={() => addNumber('.')}>
                .
              </button>
              <button className='num-btn' onClick={() => addNumber('0')}>
                0
              </button>
              <button className='operator-btn' onClick={() => operationSelection('/')}>
                /
              </button>
              <button className='operator-btn' onClick={() => operationSelection('x')}>
                x
              </button>
            </div>
            <div className='row'>
              <button className='reset-btn' onClick={reset}>
                reset
              </button>
              <button className='output-btn' onClick={calculatorOperation}>
                =
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CalculatorMain
