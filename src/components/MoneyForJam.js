import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import {Edit} from '@styled-icons/evaicons-solid/Edit'

  const Header = styled.div`
    width: 62%;
    height: 100%;
    background-color: lavenderblush;
    `
  const Title = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 20px;
  font-family: Segoe Script;
  font-size: 28px;
  `

  const DailyRecord = styled.div`
    display: flex;
    justify-content: space-between;
  `
  const RecordList = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 62%;
      flex-direction: column;
      height: 500px;
      background-color: lavenderblush;
      align-content: space-around;
      padding-top: 6px;
      `

  const Record = styled.div`
      font-family: 微軟正黑體;
      width: fit-content;
      padding: 1px;
      min-width: 70px;
      text-align: center;
      margin-top: 9px;
      margin-bottom: 8px;
      border-color: #f58fb1;
      border-bottom-style: ridge;
      `

export function MoneyForJam() {

  return (
    <Fragment>
      <Header>
        <Title>Money For Jam</Title>
      </Header>
      <DailyRecord>
        <RecordList>
          <Record>食&emsp;午餐&emsp;100</Record>
          <Record>行&emsp;捷運&emsp;200</Record>
          <Record>食&emsp;午餐&emsp;300</Record>
          <Record>行&emsp;捷運&emsp;400</Record>
          <Record>食&emsp;午餐&emsp;500</Record>
          <Record>行&emsp;捷運&emsp;600</Record>
          <Record>食&emsp;午餐&emsp;7000</Record>
          <Record>行&emsp;捷運&emsp;88888</Record>
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
          <Record>食&emsp;午餐&emsp;120</Record>
          <Record>行&emsp;捷運&emsp;30</Record>
          <Record>食&emsp;午餐&emsp;120</Record>
          <Record>行&emsp;捷運&emsp;30</Record>
          <Record>食&emsp;午餐&emsp;120</Record>
          <Record>行&emsp;捷運&emsp;30</Record>
        </RecordList>
      </DailyRecord>
      <DateRangePickerCalendarExample />
    </Fragment>
  );
}

  const ExpenseList = styled.div`
        display: flex;
        flex-wrap: wrap;
        width: calc(100% - 16px);
        flex-direction: column;
        height: 30.5vh;
        justify-content: flex-start;
        align-items: center;
        flex-direction: unset;
        width: 100%;
        align-content: flex-start;
        background-color: lavender;
        `

  const Expense = styled.div`
        background-color: #e6e6fa;
        color: #35358e;
        font-family: 微軟正黑體;
        width: fit-content;
        padding: 4px;
        width: 80px;
        text-align: center;
        margin-left: 12px;
        margin-right: 12px;
        border-style: double;
        margin-bottom: 16px;
        `
  // const Edit = styled.div`
  //       background-color: #a7a7f9;
  //       font-family: 微軟正黑體;
  //       border-radius: 5px;
  //       width: fit-content;
  //       padding: 8px;
  //       min-width: 50px;
  //       text-align: center;
  //       
  //       `
  const LavendarEdit = styled(Edit)`
      height: 40px;
      width: 40px;
      color: #6161a9;
      position: absolute;
      top: 1%;
      right: 8%;
    `

export function TotalExpenseByCategory() {
  return (
    <Fragment>
      {/* <Edit>
        Edit
      </Edit> */}
      <LavendarEdit/>
      <ExpenseList>
        <Expense>總&emsp;35000</Expense>
        <Expense>食&emsp;6000</Expense>
        <Expense>衣&emsp;3000</Expense>
        <Expense>住&emsp;12000</Expense>
        <Expense>行&emsp;900</Expense>
        <Expense>育&emsp;3000</Expense>
        <Expense>樂&emsp;2000</Expense>
        <Expense>廢&emsp;700</Expense>
        <Expense>捐&emsp;500</Expense>
        <Expense>酬&emsp;800</Expense>
      </ExpenseList>
    </Fragment>
  );
}

  const CalendarSize = styled.div`
  height: 100%;
  width: 38%;
  position: absolute;
  right: 0%;
  top: 0%;
  border-left-style: outset;

  `

export function DateRangePickerCalendarExample() {

  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [focus, setFocus] = useState(START_DATE)
  const handleFocusChange = newFocus => {
    setFocus(newFocus || START_DATE)
  }
  return (
    <Fragment>
      <CalendarSize className="calendarSize">
        {/* <p>Selected start date: {startDate ? format(startDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
      <p>Selected end date: {endDate ? format(endDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
      <p>Currently selecting: {focus}.</p> */}
        <DateRangePickerCalendar
          startDate={startDate}
          endDate={endDate}
          focus={focus}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onFocusChange={handleFocusChange}
          locale={enGB}
        />
        <TotalExpenseByCategory />
      </CalendarSize>
    </Fragment>
  )
}


