import { Cartesian3, Color, HeadingPitchRoll } from "cesium";
import React, { useEffect, useRef } from "react";
import { Entity, Viewer } from "resium";

function App() {
  const viewerRef = useRef<any>(null);

  useEffect(() => {
    if (viewerRef.current?.cesiumElement) {
      viewerRef.current.cesiumElement.camera.flyTo({
        destination: Cartesian3.fromDegrees(114.3055, 30.5928, 5000), // 高度设置为 5000 米
        orientation: {
          heading: HeadingPitchRoll.fromDegrees(0, -90, 0).heading, // 朝向北方
          pitch: HeadingPitchRoll.fromDegrees(0, -90, 0).pitch, // 向下看去的角度
          roll: HeadingPitchRoll.fromDegrees(0, -90, 0).roll, // roll 值
        },
      });
    }
  }, []);

  return (
    <Viewer full ref={viewerRef}
            homeButton={false}// 以下都是右上角
            sceneModePicker={false}
            baseLayerPicker={false}
            navigationHelpButton={false}
            geocoder={false}// 以上都是右上角
            animation={false}// 左下角
            timeline={false}
            >
      <Entity
        name="Wuhan"
        // position={Cartesian3.fromDegrees(114.3055, 30.5928, 0)}
        point={{ color: Color.WHITE, pixelSize: 10 }}
        description="Center of Wuhan"
      />
    </Viewer>
  );
}

export default App;
