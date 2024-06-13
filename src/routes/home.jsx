
import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>

            {/* navbar */}
            <Navbar />


            {/* banner */}

            <div style={{ backgroundColor: 'rgba(128,128,128,0.2)', minHeight: '400px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottomRightRadius: '300px', flexWrap: 'wrap' }}>

                <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ fontSize: '30px', fontWeight: 'bolder' }}>Your Stop for car information</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, odit reiciendis. Nam, quam quisquam commodi facilis dicta molestias modi alias ad nulla accusamus!</div>
                </div>

                <div style={{ maxWidth: '700px' }}>
                    <img style={{ borderRadius: '200px', width: '100%' }} src="https://imgs.search.brave.com/Nqsp58DM1ewEUDsTYeIqhyvVrKj4r2ezivTZc94kkqg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/aGl0ZS1jb3VwZS1z/cG9ydC1jYXItc3Rh/bmRpbmctcm9hZC1m/cm9udC12aWV3XzEx/NDU3OS00MDA1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn" alt="" />
                </div>

            </div>

            {/* main containers scroll preview*/}

            <div style={{ display: 'flex', justifyContent: 'center', padding: '15px', fontSize: '25px', fontWeight: 'bolder' }}>Hook for the scroll</div>

            {/* overview */}

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', flexWrap: 'wrap', alignItems: 'center' }}>

                {/* overview containers */}

                <div style={{ width: '200px', margin: 'auto', height: '100px' }}>

                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="springgreen"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-160q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z" /></svg>
                        </span>

                        <span>
                            Car parts
                        </span>
                    </div>


                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque nihil modi.</div>

                </div>

                <div>

                </div>

                <div>

                </div>
                <div style={{ width: '200px', margin: 'auto', height: '100px' }}>

                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="springgreen"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-160q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z" /></svg>
                        </span>

                        <span>
                            Car models
                        </span>
                    </div>


                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illum odio nisi?</div>

                </div>

                <div>

                </div>

                <div>

                </div>
                <div style={{ width: '200px', margin: 'auto', height: '100px' }}>

                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="springgreen"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-160q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z" /></svg>
                        </span>

                        <span>
                            New releases
                        </span>
                    </div>


                    <div>Lorem ipsum dolor sit, amet consectetur t. Accusamus cumque aliquid magni!</div>

                </div>

                <div>

                </div>

                <div>

                </div>

            </div>


            {/* More info */}
            <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'rgba(128,128,128,0.15)', padding: '5px', flexWrap: 'wrap', alignItems: 'center' ,borderTopRightRadius:'200px'}}>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '400px', gap: '12px', alignItems: 'flex-start', padding: '0px 22px' }}>

                    <div style={{ fontSize: '25px', fontWeight: 'bolder' }}>Car models</div>

                    <div>New models come out almost everyday</div>

                    <div>
                        <span><svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="springgreen"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-160q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z" /></svg> </span>
                        Check the models
                    </div>
                    <div>
                        <span><svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="springgreen"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-160q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z" /></svg> </span>
                        find relevant info
                    </div>
                    <div style={{}}>
                        <span><svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="springgreen"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-160q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z" /></svg> </span>
                        Potential releases
                    </div>

                </div>


                <div style={{ maxWidth: '300px' }}>
                    <img style={{ width: '100%', borderRadius: '20px' }} src="https://img.freepik.com/premium-photo/red-bmw-z4-sports-car-with-black-grille-word-mercedes-front_796580-1778.jpg?size=526&ext=jpg&ga=GA1.1.472315610.1718266973&semt=sph" alt="" />
                </div>

            </div>




            <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'rgba(128,128,128,0.15)', padding: '5px', flexWrap: 'wrap', alignItems: 'center', paddingTop: '40px',borderBottomRightRadius:'200px' }}>
                <div style={{ maxWidth: '300px' }}>
                    <img style={{ width: '100%', borderRadius: '20px' }} src="https://img.freepik.com/free-photo/composition-different-car-accessories_23-2149030398.jpg?size=626&ext=jpg&ga=GA1.1.472315610.1718266973&semt=sph" alt="" />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '400px', gap: '12px', alignItems: 'flex-start', padding: '0px 22px' }}>

                    <div style={{ fontSize: '25px', fontWeight: 'bolder' }}>Car parts</div>

                    <div>Checkout the store for new parts</div>

                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, cupiditate! Natus exercitationem aperiam aliquam amet repellat, facere culpa cum dolorum. Ducimus voluptatem saepe quis tempore minus amet modi laudantium veniam est molestiae, reiciendis sequi cupiditate adipisci deleniti soluta repudiandae nesciunt sunt consequatur exercitationem.</div>

                    {/* <div>
                        <span><svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="springgreen"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-160q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/></svg> </span>
                        Check the models
                    </div>
                    <div>
                        <span><svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="springgreen"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-160q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/></svg> </span>
                        find relevant info
                    </div>
                    <div>
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="springgreen"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-160q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/></svg> </span>
                        Available car parts
                    </div> */}

                </div>



            </div>

            {/* rating */}

            <div style={{ fontSize: '30px', textAlign: 'center', fontWeight: 'bolder', marginBottom: '15px' }}>Reviews by automobile comapnies</div>

            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '5px',flexWrap:'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                    <div>Hyundai</div>
                    <div style={{}}>⭐⭐⭐⭐⭐</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div>Maserati</div>
                    <div style={{}}>⭐⭐⭐⭐</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div>Honda</div>
                    <div style={{}}>⭐⭐⭐⭐⭐</div>
                </div>

            </div>



            {/* contact info */}

            <div style={{display:'flex',justifyContent:'space-around',backgroundColor:'rgba(128,128,128,0.2)',paddingTop:'20px',flexWrap:'wrap',paddingBottom:'130'}}>

                <div style={{fontSize:'20px',fontWeight:'bolder',marginBottom:'12px'}}>Automobile</div>

                <div style={{width:'500px',display:'flex',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap',gap:'12px'}}>

                <div>
                    <div style={{marginBottom:'10px',fontWeight:'bolder'}}>Header</div>
                    <div style={{width:'30px'}}>link</div>
                    <div style={{width:'30px'}}>link</div>
                    <div style={{width:'30px'}}>link</div>
                </div>
                <div>
                    <div style={{marginBottom:'10px',fontWeight:'bolder'}}>Header</div>
                    <div style={{width:'30px'}}>link</div>
                    <div style={{width:'30px'}}>link</div>
                    <div style={{width:'30px'}}>link</div>
                </div>
                <div>
                    <div style={{marginBottom:'10px',fontWeight:'bolder'}}>Header</div>
                    <div style={{width:'30px'}}>link</div>
                    <div style={{width:'30px'}}>link</div>
                    <div style={{width:'30px'}}>link</div>
                </div>
                <div>
                    <div style={{marginBottom:'10px',fontWeight:'bolder'}}>Header</div>
                    <div style={{width:'30px'}}>link</div>
                    <div style={{width:'30px'}}>link</div>
                    <div style={{width:'30px'}}>link</div>
                </div>
                

                
                </div>
            </div>








        </>
    )
}

export default Home