import React, { Component } from 'react';
import Card from "../Cards";
import '../index.css';
import Navbar from './navbar.component';
export default class main extends Component{
     render(){
         return(
             <div>
             <Navbar/>
                 <h1 className="heading_Style">Login And Enjoy the Streams</h1>

                <Card imgsrc="https://wallpapercave.com/wp/wp4056399.jpg"
                        title="IMDB rating:9.1"
                        sname="Dark"
                        link="https://www.netflix.com/in/title/80100172"
                />
                <Card imgsrc="https://wallpapercave.com/wp/wp1839578.jpg"
                    title="IMDB rating:9.2"
                    sname="Starnger Things"
                    link="https://www.netflix.com/in/title/80057281"
                />
                <Card imgsrc="https://wallpapercave.com/wp/KD5fyjQ.jpg"
                    title="Imdb rating:9.3"
                    sname="Breaking Bad"
                    link="https://www.netflix.com/in/title/70143836"
                />
                <Card imgsrc="https://wallpapercave.com/wp/wp4961946.jpg"
                    title="IMDB rating:9.2"
                    sname="Money Heist"
                    link="https://www.netflix.com/in/title/80192098"
                />
                 <Card imgsrc="https://wallpapercave.com/wp/wp1935740.jpg"
                    title="IMDB rating:9.6"
                    sname="13 Reason Why"
                    link="https://www.netflix.com/in/title/80117470"
                />
                <Card imgsrc="https://wallpapercave.com/wp/wp6070393.jpg"
                    title="IMDB rating:9.3"
                    sname="John Wick"
                    link="https://www.netflix.com/in/title/80013762"
                />
                <Card imgsrc="https://wallpapercave.com/wp/wp5163964.jpg"
                    title="IMDB rating:9.4"
                    sname="Lucifer"
                    link="https://www.netflix.com/in/title/80013762"
                />
                <Card imgsrc="https://wallpapercave.com/wp/wp5208767.jpg"
                    title="IMDB rating:9.5"
                    sname="SUITS"
                    link="https://www.netflix.com/in/title/80013762"
                />
               
                 
             </div>
         )
     }
}