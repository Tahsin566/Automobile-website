

import React from 'react'
import '../css/navbar.css'
const Navbar = () => {
  return (

    <>

    <div className='navbar' style={{display:'flex',justifyContent:'space-between',height:'50px',boxSizing:'border-box',backgroundColor:'rgba(255,255,255,0.9)',gap:'20px',minWidth:'100px',alignItems:'center',paddingRight:'20px',paddingLeft:'20px'}}>
        <div style={{fontSize:"25px",maxWidth:'250px',height:'25px',fontWeight:'bolder'}}><span style={{color:'red'}}>A</span>utomobile</div>
        <div style={{display:'flex',justifyContent:'space-around',gap:'20px',maxWidth:'300px',alignItems:'center'}}>
            <div className='hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </div>
            <div className='tab'>Home</div>
            <div className='tab'>Contact</div>
            <div className='tab'>About</div>
        </div>
    </div>
    <div style={{width:'100px',marginLeft:'auto',backgroundColor:'rgba(0,0,255,0.4)',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'15px'}}>
        <div className='nav'>Home</div>
        <div className='nav'>Contact</div>
        <div className='nav'>About</div>
    </div>
    </>
    // <div style={{display:'flex',justifyContent:'space-between',gap:'20px',padding:'5px',flexWrap:'wrap'}}>
    //   {/* <div style={{fontSize:"25px",marginRight:'auto'}}>Automobile</div> */}
    //   <div style={{display:'flex',alignItems:'center'}}>Home</div>
    //   <div style={{display:'flex',alignItems:'center'}}>Contact</div>
    //   <div style={{display:'flex',alignItems:'center'}}>About</div>
    // </div>
  )
}

export default Navbar
