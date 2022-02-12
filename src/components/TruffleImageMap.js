import React from "react"

const TruffleImageMap = ({
  setLastClicked,
  setCurrentClick,
  setScreenCoords,
}) => {
  return (
    <map name="imgMap">
      <area
        id="videoPlayerArea"
        shape="rect"
        title="screen"
        alt="screen"
        coords="1714,796,2988,1556"
        onLoad={e => {
          console.log(e)
          setScreenCoords(e.target.coords)
        }}
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
      <area
        shape="rect"
        title="leftArrow"
        alt="leftArrow"
        coords="3115,1742,3311,1865"
        onClick={e => {
          setLastClicked("leftArrow")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="rightArrow"
        alt="rightArrow"
        coords="3115,1865,3324,2006"
        onClick={e => {
          setLastClicked("rightArrow")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="bgTop"
        alt="bgTop"
        coords="14,-5,5143,714"
        onClick={e => {
          setLastClicked("bg")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="bgLeft"
        alt="bgLeft"
        coords="9,719,1619,2288"
        onClick={e => {
          setLastClicked("bg")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="rect"
        title="bgBottom"
        alt="bgBottom"
        coords="9,2297,5139,3453"
        onClick={e => {
          setLastClicked("bg")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
      <area
        shape="poly"
        title="bgRight"
        alt="bgRight"
        coords="3061,723,3061,1679,3352,1711,3361,1852,3379,2015,3247,2065,3115,2088,3133,2293,3333,2288,3634,2284,5143,2284,5134,719"
        onClick={e => {
          setLastClicked("bg")
          setCurrentClick(e.target.alt)
          e.preventDefault()
        }}
      />
    </map>
  )
}

export default TruffleImageMap
