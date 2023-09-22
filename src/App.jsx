import { useState } from "react";

export default function App() {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);

  const resizeImage = () => {
    setWidth(width + 2);
    setHeight(height + 2);
  };
  return (
    <div className="App">
      <img
        src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3775&q=80"
        width={width}
        height={height}
        onClick={resizeImage}
      />
    </div>
  );
}
