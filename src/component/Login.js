import { Button, Heading, Page, TextField } from '@shopify/polaris'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../redux/selector'

const Login = (props) => {
  const [userData , setUserData] = useState({name : '' , username : '' , password : ''})
  const [isLoading , setisLoading] = useState(false)
  const [error , setErr] = useState('')



  const submitHandler = async() =>{
    const url = `https://fbapi.sellernext.com/user/login?username=${userData.username}&password=${userData.password}`
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA'
    setisLoading(true)
    let t =  await fetch(url , {headers : {Authorization : token}})
    .then(res => res.json())
    .then(res => res)
    setisLoading(false)
    if(t.success){
      sessionStorage.setItem("state" , JSON.stringify({...userData , token : t.data.token}))
      props.saveData()
    }
    else setErr(t.message)
  }

  return (
    <div className="App">
      <Page>
        <Heading>LOGIN</Heading>
        <Page sectioned>
          <TextField 
            label = "Name"
            onChange={(d)=>setUserData(prev => ({...prev , name : d}))}
            value = {userData.name}
          />
        </Page>
        <Page sectioned>
          <TextField 
            label = "Username"
            onChange={(d)=>setUserData(prev => ({...prev , username : d}))}
            value = {userData.username}
          />
        </Page>
        <Page sectioned>
          <TextField 
            label = 'Password'
            onChange={(d)=>setUserData(prev => ({...prev , password : d}))}
            value = {userData.password}
          />
        </Page>
      
          <Button loading={isLoading} primary onClick={submitHandler}>Login</Button>

          <Heading >{error}</Heading>
        
      </Page>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)