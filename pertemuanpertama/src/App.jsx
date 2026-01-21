import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting(){
  return(
    <div className="header"> 
      <h1>Hallo</h1> 
      <p>Selamat pagi, berikut data siswa:</p>
    </div>
  );
}

function Biodata(props){
  return (
    <div className="card">
      <p className="label">Nama</p>
      <h3>{props.nama}</h3>
      <div className="info-row">
        <span>Kelas: {props.kelas}</span>
        <span>NISN: {props.nisn}</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Greeting/>
      <div className="card-grid">
        <Biodata nama="Fahri" kelas="XI PPLG 1" nisn="21635"/>
        <Biodata nama="Nuansa" kelas="XI PPLG 2" nisn="12345"/>
        <Biodata nama="Ramadhan" kelas="XI PPLG 2" nisn="97652"/>
        <Biodata nama="Budi" kelas="XI PPLG 2" nisn="09876"/>
        <Biodata nama="Nuansa" kelas="XI PPLG 2" nisn="12345"/>
      </div>
    </div>
  )
}

export default App