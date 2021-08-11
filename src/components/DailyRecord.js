import { React, Fragment } from 'react';
import styled from 'styled-components'
import { Bin } from '@styled-icons/icomoon/Bin'
import { PaperPlane } from '@styled-icons/fa-solid/PaperPlane'

const TitleBar = styled.div`
  display: flex;
  justify-content: flex-start;
  `

const RectangularLeft = styled.div`
  justify-content: flex-end;
  background-color: lavenderblush;
  width: 50%;
  `
const RectangularRight = styled.div`
  justify-content: flex-end;
  background-color: lavender;
  width: 50%;
  `

const Title = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 20px;
  font-family: Segoe Script;
  font-size: 28px;
  `
const FunctionBar = styled.div`
  display: flex;
  position: inherit;
  // padding: 8px;
  justify-content: space-around;
  background-color: lavender;
  `
const LavendarBin = styled(Bin)`
  color: #6161a9;
  height: 32px;
  width: 32px;
  `

const SecRecLeft = styled.div`
background-color: lavender;
width: 50%;
display: flex;
justify-content: center;
padding-top: 10px
`

const SecRecRight = styled.div`
background-color: lavenderblush;
width: 50%;
display: flex;
justify-content: center;
padding-top: 10px
`

const LavendarPaperPlane = styled(PaperPlane)`
  color: #6161a9;
  height: 32px;
  width: 32px;
  `

const DailyRecordArea = styled.div`
  display: flex;
  justify-content: space-between;
  `
const RecordList = styled.div`
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 50%;
  flex-direction: column;
  height: 448px;
  background-color: lavender;
  align-content: space-around;
  `

const Record = styled.div`
  font-family: 微軟正黑體;
  width: fit-content;
  padding: 1px;
  width: 127px;
  text-align: center;
  margin-top: 31px;
  margin-bottom: 31px;
  border-color: #6161a9;
  border-bottom-style: ridge;
  `

const InputArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 448px;
  padding: 8px;
  background-color: lavenderblush;
  `

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 30%;
  flex-direction: column;
  height: 440px;
  align-content: space-around;
  `
const Category = styled.div`
  background-color: #4fc1e963;
  font-family: 微軟正黑體;
  border-radius: 30px;
  width: fit-content;
  padding: 8px;
  min-width: 70px;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 24px;
  `

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 30%;
  flex-direction: column;
  height: 440px;
  align-content: space-around;
  `

const Item = styled.div`
  background-color: #b4e08082;
  font-family: 微軟正黑體;
  border-radius: 30px;
  width: fit-content;
  padding: 8px;
  min-width: 70px;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 24px;
  `

const PriceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 30%;
  flex-direction: column;
  height: 440px;
  align-content: space-around;
  `
const Price = styled.div`
  background-color: #fcd27787;
  font-family: 微軟正黑體;
  border-radius: 30px;
  width: fit-content;
  padding: 8px;
  min-width: 70px;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 24px;
  `

function DailyRecord() {

  return (
    <Fragment>
      <TitleBar>
        <RectangularLeft>
          <Title>Daily Record</Title>
        </RectangularLeft>
        <RectangularRight />
      </TitleBar>

      <FunctionBar>
        <SecRecLeft>
          <LavendarBin />
        </SecRecLeft>
        <SecRecRight>
          <LavendarPaperPlane />
        </SecRecRight>
      </FunctionBar>

      <DailyRecordArea>
        <RecordList>
          <Record>食&emsp;午餐&emsp;100</Record>
          <Record>行&emsp;捷運&emsp;200</Record>
          <Record>食&emsp;午餐&emsp;300</Record>
          <Record>行&emsp;捷運&emsp;400</Record>
          <Record>食&emsp;午餐&emsp;99999</Record>
          <Record>行&emsp;捷運&emsp;30</Record>
          <Record>食&emsp;午餐&emsp;120</Record>
          <Record>行&emsp;捷運&emsp;30</Record>
          <Record>食&emsp;午餐&emsp;120</Record>
          <Record>行&emsp;捷運&emsp;30</Record>
          <Record>食&emsp;午餐&emsp;120</Record>
          <Record>行&emsp;捷運&emsp;30</Record>
          <Record>食&emsp;午餐&emsp;120</Record>
          <Record>行&emsp;捷運&emsp;30</Record>
          <Record>食&emsp;午餐&emsp;120</Record>
          <Record>行&emsp;捷運&emsp;30</Record>
        </RecordList>
        {/* <hr/> */}
        <InputArea>
          <CategoryList>
            <Category>食</Category>
            <Category>衣</Category>
            <Category>住</Category>
            <Category>行</Category>
            <Category>育</Category>
            <Category>樂</Category>
            <Category>廢</Category>
            <Category>捐</Category>
            <Category>酬</Category>
          </CategoryList>
          <ItemList>
            <Item>早餐</Item>
            <Item>午餐</Item>
            <Item>晚餐</Item>
            <Item>電影</Item>
            <Item>衣服</Item>
            <Item>捷運</Item>
          </ItemList>
          <PriceList>
            <Price>50</Price>
            <Price>70</Price>
            <Price>100</Price>
            <Price>150</Price>
            <Price>200</Price>
            <Price>1000</Price>
          </PriceList>
        </InputArea>
      </DailyRecordArea>
    </Fragment>
  );
}

export default DailyRecord;