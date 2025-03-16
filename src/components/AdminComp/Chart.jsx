import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e9e2e2;
  margin-left: 250px;
  height: 50vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100%-250px);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 15px -10px rgba(0,0,0, 0.75);
`;


const Title = styled.h3`
  margin-bottom: 20px;
`;
const RespContain = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  min-height: 400px;
  height: 100%;
  aspect-ratio: unset;
`;

export default function Chart({ title, data, dataKey, grid }){
  return (
    <Container>
      <Title>{title}</Title>
      <RespContain>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray=" 5 5" />}
        </LineChart>
      </ResponsiveContainer>
      </RespContain>
    </Container>
  )
}


