import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const boxVariants = {
 
  click: {scale:1, borderRadius: "100px"},
  
}




function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box 
          dragSnapToOrigin
          drag dragConstraints={biggerBoxRef} 
          variants={boxVariants} 
          whileTap="click"  />
      </BiggerBox>
        
    
      
    </Wrapper>
  );
}

export default App;
