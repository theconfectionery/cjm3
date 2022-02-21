import React, { useState, useEffect, useRef } from "react"
import { ImageMap } from "@qiuz/react-image-map"
import { useBgALightsOnOff } from "./imgs/useBgLights"

const isBrowser = typeof window !== "undefined"

const TruffleImageMap = ({
  setMapLoaded,
  lightsOn,
  setCurrentClickId,
  setCurrentClickType,
}) => {
  // console.log("<TruffleImageMap> rendered")
  const [bgImage, setBgImage] = useState(bgImageLightsOn)
  const lights = useBgALightsOnOff()
  console.log("Lights: ", lights)

  const bgImageLightsOn = lights.bg_a_lightsOn.file.url
  const bgImageLightsOff = lights.bg_a_lightsOff.file.url

  useEffect(() => {
    if (lightsOn) {
      setBgImage(bgImageLightsOn)
    }
    if (!lightsOn) {
      setBgImage(bgImageLightsOff)
    }
  }, [lightsOn])

  const mapAreas = [
    {
      id: "screenArea",
      title: "screen",
      width: "26.25084364454443%",
      height: "24.395309882747064%",
      left: "32.5%",
      top: "21.7%",
    },
    {
      id: "btn11",
      title: "btn",
      width: "4.499437570303712%",
      height: "4.355108877721943%",
      left: "38.802376265466854%",
      top: "49.246231155778894%",
    },
    {
      id: "btn12",
      title: "btn",
      width: "4.499437570303712%",
      height: "4.355108877721943%",
      left: "43.52678571428575%",
      top: "49.413735343383586%",
    },
    {
      id: "btn13",
      title: "btn",
      width: "4.499437570303712%",
      height: "4.355108877721943%",
      left: "48.026223284589456%",
      top: "49.413735343383586%",
    },
    {
      id: "btn6",
      title: "btn",
      width: "4.499437570303712%",
      height: "4.355108877721943%",
      left: "33.965480877390355%",
      top: "53.60134003350083%",
    },
    {
      id: "btn7",
      title: "btn",
      width: "4.499437570303712%",
      height: "4.1876046901172534%",
      left: "38.914862204724436%",
      top: "53.76884422110552%",
    },
    {
      id: "btn8",
      title: "btn",
      width: "4.499437570303712%",
      height: "4.1876046901172534%",
      left: "43.41429977502815%",
      top: "53.76884422110552%",
    },
    {
      id: "btn9",
      title: "btn",
      width: "4.499437570303712%",
      height: "4.1876046901172534%",
      left: "48.026223284589456%",
      top: "53.76884422110552%",
    },
    {
      id: "btn10",
      title: "btn",
      width: "4.499437570303712%",
      height: "4.1876046901172534%",
      left: "52.638146794150764%",
      top: "53.76884422110552%",
    },
    {
      id: "btn1",
      title: "btn",
      width: "4.499437570303712%",
      height: "5.025125628140705%",
      left: "33.51553712035999%",
      top: "57.95644891122277%",
    },
    {
      id: "btn2",
      title: "btn",
      width: "4.499437570303712%",
      height: "5.025125628140705%",
      left: "38.46491844769407%",
      top: "57.95644891122277%",
    },
    {
      id: "btn3",
      title: "btn",
      width: "4.499437570303712%",
      height: "5.025125628140705%",
      left: "43.30181383577056%",
      top: "57.78894472361809%",
    },
    {
      id: "btn4",
      title: "btn",
      width: "4.499437570303712%",
      height: "5.025125628140705%",
      left: "47.91373734533187%",
      top: "57.95644891122278%",
    },
    {
      id: "btn5",
      title: "btn",
      width: "5.174353205849269%",
      height: "5.025125628140705%",
      left: "52.525660854893175%",
      top: "57.95644891122278%",
    },
    {
      id: "leftArrow",
      title: "btn",
      width: "5.961754780652419%",
      height: "5.192629815745396%",
      left: "59.16233127109115%",
      top: "49.246231155778894%",
    },
    {
      id: "rightArrow",
      title: "btn",
      width: "5.961754780652419%",
      height: "5.192629815745396%",
      left: "59.27481721034874%",
      top: "54.2713567839196%",
    },
    {
      id: "bgLeft",
      title: "bgArea",
      width: "30.033745781777267%",
      height: "100%",
      left: "0%",
      top: "0%",
    },
    {
      id: "bgRight",
      title: "bgArea",
      width: "34.0832395950506%",
      height: "100%",
      left: "65.91676040494933%",
      top: "0%",
    },
    {
      id: "bgBottom",
      title: "bgArea",
      width: "35.658042744656896%",
      height: "33.165829145728644%",
      left: "30.146231721034823%",
      top: "66.83417085427132%",
    },
    {
      id: "bgTop",
      title: "bgArea",
      width: "35.658042744656896%",
      height: "20.770519262981573%",
      left: "30.25871766029241%",
      top: "0%",
    },
    {
      id: "bgLeft2",
      title: "bgArea",
      width: "1.6872890888638727%",
      height: "15.912897822445563%",
      left: "30.25871766029241%",
      top: "20.938023450586265%",
    },
    {
      id: "bgRight2",
      title: "bgArea",
      width: "5.736782902137214%",
      height: "27.30318257956449%",
      left: "59.84251968503932%",
      top: "21.273031825795645%",
    },
    {
      id: "bgRight3",
      title: "bgArea",
      width: "5.736782902137214%",
      height: "6.532663316582915%",
      left: "59.95500562429691%",
      top: "59.798994974874375%",
    },
    {
      id: "btnInfo",
      title: "info",
      width: "5.511811023622028%",
      height: "4.1876046901172534%",
      left: "33.29583802024742%",
      top: "49.2462311557789%",
    },
    {
      id: "btnContact",
      title: "contact",
      width: "5.061867266591676%",
      height: "4.0201005025125625%",
      left: "52.52566085489314%",
      top: "49.58123953098828%",
    },
    {
      id: "screenLeft",
      title: "screen",
      width: "3.59955005624297%",
      height: "24.288107202680067%",
      left: "32.72813554555681%",
      top: "21.943048576214405%",
    },
    {
      id: "screenRight",
      title: "screen",
      width: "3.5995500562429705%",
      height: "24.288107202680067%",
      left: "55.112837457817776%",
      top: "21.943048576214405%",
    },
  ]

  const handleClick = e => {
    setCurrentClickId(e.id)
    setCurrentClickType(e.title)
  }

  const conditionalRender = () => {
    if (isBrowser) {
      return (
        <ImageMap
          id="bgImage"
          // key={Math.random()}
          src={bgImage}
          className="useage-map"
          map={mapAreas}
          onLoad={() => {
            // triggers reload of <Home/>
            setMapLoaded(true)
          }}
          onMapClick={e => handleClick(e)}
        />
      )
    } else {
      return null
    }
  }

  return conditionalRender()
}

export default TruffleImageMap
