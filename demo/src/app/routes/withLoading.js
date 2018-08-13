import React, { Component } from 'react'
import withLoading from "shared/components/WithLoading"

@withLoading(({data})=>(
  data.length <1
))
export default class Loading extends Component {
  state = {
    data:[]
  }
  render() {
    return (
      <div>
        {
          this.state.data.map((v,i)=>{
            return <p key={i}>{v}</p>
          })
        }
      </div>
    )
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        data:[1,2,3]
      })
    },3000)
  }
}
