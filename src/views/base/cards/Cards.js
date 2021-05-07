import React from "react";


const Cards = (props) =>{
    return(
        <>
                    <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className={`small-box ${props.style}`} >
                            <div className="inner" style={{color: 'white'}}>
                                <h3>{props.users}</h3>
                                <p>{props.status}</p>
                            </div>
                            <div className="icon">
                                <i className={`fas ${props.icon}`} style={{color: 'white'}}></i>
                            </div>
                            <a href="#"  className="small-box-footer">
                                <span style={{color: 'white'}} >More info</span>
                                <i style={{color: 'white'}} className="fas fa-arrow-circle-right" />
                            </a>
                        </div>
                    </div>
        </>
    )
}

export default Cards;