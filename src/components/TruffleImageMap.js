import React from "react"

const TruffleImageMap = ({ setLastClicked, setCurrentClick }) => {
  return (
    <map name="imgMap">
      <area
        shape="poly"
        title="screen"
        alt="screen"
        coords="1686,737,1744,737,2945,744,3017,759,3039,809,3039,874,3039,1560,3010,1604,2959,1618,1737,1618,1686,1604,1650,1560,1650,824,1665,766"
        onClick={e => {
          setLastClicked("screen")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="btn11"
        alt="btn11"
        coords="2012,1720,2235,1874"
        onClick={e => {
          setLastClicked("truffle")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="btn12"
        alt="btn12"
        coords="2244,1720,2458,1874"
        onClick={e => {
          setLastClicked("truffle")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="btn13"
        alt="btn13"
        coords="2463,1715,2708,1874"
        onClick={e => {
          setLastClicked("truffle")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="btn6"
        alt="btn6"
        coords="1744,1865,2003,2011"
        onClick={e => {
          setLastClicked("truffle")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="btn7"
        alt="btn7"
        coords="2003,1874,2235,2015"
        onClick={e => {
          setLastClicked("truffle")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="btn8"
        alt="btn8"
        coords="2244,1879,2458,2011"
        onClick={e => {
          setLastClicked("truffle")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="btn9"
        alt="btn9"
        coords="2463,1879,2708,2011"
        onClick={e => {
          setLastClicked("truffle")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="btn10"
        alt="btn10"
        coords="2717,1870,2963,2015"
        onClick={e => {
          setLastClicked("truffle")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="btn1"
        alt="btn1"
        coords="1730,2015,1990,2170"
        onClick={e => {
          setLastClicked("truffle")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="btn2"
        alt="btn2"
        coords="1999,2020,2235,2179"
        onClick={e => {
          setLastClicked("truffle")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="btn3"
        alt="btn3"
        coords="2244,2014,2453,2184"
        onClick={e => {
          setLastClicked("truffle")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="btn4"
        alt="btn4"
        coords="2454,2014,2708,2184"
        onClick={e => {
          setLastClicked("truffle")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="btn5"
        alt="btn5"
        coords="2717,2019,2990,2175"
        onClick={e => {
          setLastClicked("truffle")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="infoBtn"
        alt="infoBtn"
        coords="1762,1724,1999,1861"
        onClick={e => {
          setLastClicked("info")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="contactBtn"
        alt="contactBtn"
        coords="2713,1720,2963,1865"
        onClick={e => {
          setLastClicked("contact")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
    </map>
  )
}

export default TruffleImageMap
