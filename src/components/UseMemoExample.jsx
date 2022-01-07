import { useState, useEffect, useRef, useMemo } from "react"

function UseMemoExample() {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  // const sqrt = getSqrt(number)
  const sqrt = useMemo(() => getSqrt(number), [number])

  const renders = useRef(1)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const onClick = () => {
    setInc((prevState) => {
      return prevState + 1
    })
  }

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
      />

      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className="btn btn-primary">Re Render</button>
      Renders: {renders.current}
    </div>
  )
}

// Expensive function for testing purposes
function getSqrt(n) {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }

  console.log('EXPENSIVE FUNCTION CALLED');

  return Math.sqrt(n)
}

export default UseMemoExample
