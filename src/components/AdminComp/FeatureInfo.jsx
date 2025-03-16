import styled from "styled-components"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Item = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`;
const Title = styled.span`
    font-size: 20px;
`;
const MoneyContain = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`;
const Money = styled.span`
    font-size: 30px;
    font-weight: 600;
`;
const MoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`;
const Icon = styled.div`
    font-size: 14px;
    margin-left: 5px;
    color: green;
`;
const Sub = styled.span`
    font-size: 15px;
    color: gray;
`;


const FeatureInfo = () => {
  return (
    <Container>
        <Item>
            <Title>Revenue</Title>
            <MoneyContain>
                <Money>$100</Money>
                <MoneyRate>
                    -11.5 <ArrowDownwardIcon/>
                </MoneyRate>
            </MoneyContain>
            <Sub>Compared to last month</Sub>
        </Item>

        <Item>
            <Title>Exchanges</Title>
            <MoneyContain>
                <Money>$300</Money>
                <MoneyRate>
                    -3.5 <Icon><ArrowDownwardIcon/></Icon>
                </MoneyRate>
            </MoneyContain>
            <Sub>Compared to last month</Sub>
        </Item>


    </Container>
  )
}

export default FeatureInfo
