import { useState } from 'react';
import './App.css';

const config = [
  [1, 1, 0],
  [1, 1, 1],
  [1, 1, 1]
]

export default function App() {

  const [cellState, setCellState] = useState([]);
  const [deactivateCell, setDeactivateCell] = useState(false);

  const deactivateCellFn = () => {
    setDeactivateCell(true)
    const interval = setInterval(() => {
      setCellState((currentCellState) => {
        const newCellState = currentCellState.slice();
        newCellState.shift();
        if(newCellState.length === 0) {
          setDeactivateCell(false);
          clearInterval(interval);
        }
        return newCellState;
      })
    }, 300)
  }

  const cellClickHandler = (index) => {
    const newCellState = [...cellState, index]
    setCellState(newCellState);
    if(newCellState.length === config.flat().filter(Boolean).length) {
      deactivateCellFn();
    }
  }


  return <div className="flex">
    <div className='grid-wrapper'  style={{
          gridTemplateColumns: `repeat(${config[0].length}, 100fr)`,
        }}>
        {
          config.flat().map((value, index) => {
            return value ? 
              <Cell 
                value={value} 
                onClick={() => cellClickHandler(index)} 
                isFilled={cellState.includes(index)} 
              /> 
            : <span />
          })
        }
    </div>
  </div>

}

function Cell({ value, onClick, isFilled}) {
  return <button disabled = {isFilled}className={isFilled? "cell cell-activated" : "cell"} onClick={onClick}>cell</button>
}