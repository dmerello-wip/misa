import {Canvas} from "react-three-fiber";
import Work from '@/components/Work';
import Camera from '@/components/Camera';

const Gallery = ({contents}) => {

  const radius = 12;

  const renderWorks = () => {
    let baseDegrees = (2*Math.PI) / contents.length;
    return contents.map((el, i) => {
      let x = radius * Math.cos(i * baseDegrees);
      let z = radius * Math.sin(i * baseDegrees);
      let rot = - (baseDegrees*i + Math.PI/2);
      return <Work
        key={`work-${i}`}
        picture={el.picture}
        title={el.title}
        position={[x, 0, z]}
        rotation={[0, rot, 0]}
      />;
    });
  };


  return (
    <div className="gallery">
      <Canvas>
        {renderWorks()}
        <ambientLight intensity={0.2}/>
        <pointLight intensity={0.1} position={[-3, -4, -1]}/>
        <pointLight intensity={0.1} position={[3, -4, 1]}/>
        <Camera position={[0, 0, 0]}/>
      </Canvas>
    </div>
  )
};


export default Gallery;

