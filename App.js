import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'

const App = () => {

  const APIkey="75a425c577efdad478816f2ff9cb767b"

  const [city, setCity]=useState("")

  const getApi=async()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
    let result= await fetch(url);
    result= await result.json();
    console.log(result)
    setCity(result)

  }

  useEffect(()=>{
    getApi();
  },[])
  
  console.log(city)
  return (
    <View>

     
    </View>
  )
}

export default App

const styles = StyleSheet.create({})