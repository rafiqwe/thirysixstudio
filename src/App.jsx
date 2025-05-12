import { Canvas } from "./Components/canvas";

export default function App() {
  return (
   <div className="w-full min-h-screen bg-black text-white">
    <Canvas startIndex={0}/>
    <Canvas startIndex={300}/>
    <Canvas startIndex={450}/>
    <Canvas startIndex={550}/>
   </div>
  )
}