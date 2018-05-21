import React from 'react'
import ReactDom from 'react-dom'

import Form from '../Purchase-Sale-EntryForm'
import Table from '../Table'

export default class Purchase extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Form />
        <Table />
      </div>
    )
  }

} 
