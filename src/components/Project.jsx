import React from 'react';

export default function Projects(props) {
    <section className= "projects">
        <div className= "container">
            <div className='face face1'>
                <div className='content'>
                    <img className='screenshot' src= {props.image} alt= {props.name}/>
                    <h2>{props.name}</h2>
                </div>
            </div>
        </div>

    </section>
}