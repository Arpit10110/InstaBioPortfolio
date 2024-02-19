import React from 'react'
import { Certificate } from './Certificate'
import CerificateCard from "./CerificateCard.jsx"
import "../style/Cert.css"
const Cerificate = () => {
  return (
   <>
    <div className="mainCert-div">
        <h2>Certificates</h2>
        <div className="Certi-wraper">
        {
            Certificate.map((i,index)=>{
                return(
                    <CerificateCard key={index} imgSRC={i.img} />
                )
            })
        }
        </div>
    </div>
   </>
  )
}

export default Cerificate