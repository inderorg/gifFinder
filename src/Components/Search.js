import React from 'react'

const Search = props => (
    <form style={{width:"100%"}} onSubmit={props.onEnterinput}>
      <label style={{padding:"10px",fontSize:"16px"}}>Search:</label>
      <input type="text"  style={{padding:"10px",fontSize:"12px",width:"40%"}} placeholder="Enter Gif here"  name="gifvalue"/>
      <button style={{padding:"10px",margin:"7px",fontSize:"12px",width:"10%"}}>Search</button>
    </form>
)

export default Search;