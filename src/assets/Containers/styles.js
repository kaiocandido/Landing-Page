import styled from "styled-components";
import imgBackground from "../img/hrz-5.jpg"
import imgBackground2 from "../img/hrz-1.jpg"
import img1 from "../img/sqr-1.jpg"
import img2 from "../img/sqr-2.jpg"
import img3 from "../img/sqr-3.jpg"
import img7 from "../img/hrz-6.jpg"

export const Header = styled.header`
    /*Event form*/
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),  url(${imgBackground});
    background-position: center;
    background-size: cover;
    height: 85vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;

    #disclaimer{
        color: #00baf2;
        font-size: 3em;
        margin-bottom: 1em;
    }

    h2{
        color: #00baf2;
        font-size: 3em;
        margin-bottom: 1em;
    }

    .event-date{
        color: #00baf2;
    }

    #disclaimer{
        font-size: 2em;
        text-transform: uppercase;
        max-width: 350px;
        font-weight: bold;
        margin-bottom: 1em;
    }

    .about-event{
        font-size: 2em;
        text-transform: uppercase;
        max-width: 350px;
        font-weight: bold;
        margin-bottom: 1em;
    }

    #disclaimer p{
        font-size: 1.2em;
        margin-bottom: 0.3em;
    }

    .event-date{
        font-weight: bold;
    }

    #subscription-form{
        background-color: #95989a; 
        padding: 2em;
        max-width: 22%;
    }

    #subscription-form p{
        font-size: 1.5em;
        color: black;
        margin-bottom: 1em;
    }

    .form-group{
        display: flex;
        flex-direction: column;
        margin-bottom: 0.8em;
    }

    .form-group label{
        color: #5d5d5d;
        font-weight: bold;
        margin-bottom: 0.3em;
    }

    .form-group input{
        padding: 6px 8px;
        border-radius: 5px;
        border: none;
        outline: none;
    }

    .form-group select{
        padding: 6px 8px;
        border-radius: 5px;
        border: none;
        outline: none;
    }

    .btn{
        background-color: #00baf2;
        color: white;
        text-transform: uppercase;
        width: 100%;
        padding: 12px;
        border: none;
        cursor: pointer;
        opacity: 0.8;
    }

    .btn:hover{
        opacity: 1;
    }

    /*Mobile*/
    @media (max-width: 450px) {
        background-size: auto 100%;
        height: auto;
        padding: 1em;
        
        h2 {
            font-size: 2em;
        }

        #disclaimer {
            font-size: 1.5em;
            padding: 1.5em;
        }

        .about-event,
        .event-date {
            font-size: 1.2em;
        }

        #subscription-form {
            width: 100%;
            padding: 1em;
            max-width: 100%;
        }

        .form-group label {
            font-size: 0.9em;
        }

        .form-group input,
        .form-group select {
            padding: 8px;
        }

        .btn {
            font-size: 1em;
            padding: 10px;
        }

        #subscription-form{
            display: none;
        }
    }
`

export const Section = styled.section`
    /*Benefits section*/
    h2{
        background-color: #95989a;
        color: white;
        text-align: center;
        padding: 2em;
        font-weight: bold;
    }

    .benefits{
        display: flex;
        justify-content: space-around;
        padding: 4em;
        width: 80%;
        margin: 0 auto;
    }

    .benefit{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 20%;
        color: #5d5d5d;
    }

    .benefit .benefit-img{
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        margin-bottom: 1em;
    }

    #benefit-1 {
        background-image: url(${img1});
    }

    #benefit-2 {
        background-image: url(${img2});
    }

    #benefit-3 {
        background-image: url(${img3});
    }

    /*mobile*/

    @media (max-width: 450px){
        .benefits{
            flex-direction: column;
            align-items: center;
            width: auto;
            padding: 2em;
        }

        .benefit{
            max-width: 100%;
            margin-bottom: 2em;
        }
    }

`

export const SectionTwo = styled.section`
    /* Event location */
    height: 400px;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${imgBackground2});
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    margin-bottom: 3em;

    #address {
        max-width: 30%;
    }

    #address{
        display: flex;
    }

    #address i{
        font-size: 4em;
        margin-right: 0.5em;
        color: #00baf2;
    }

    #address-details{
        text-align: center;
        width: 300px;
        line-height: 50px;
        font-size: 1.3em;
    }

    #about-location h3{
        color: #00baf2;
        font-size: 2.5em;
        margin-bottom: 1em;
        text-transform: uppercase;
    }

    #about-location p{
        line-height: 1.5em;
    }

    /*mobile*/

    @media (max-width: 450px){
        flex-direction: column;
        height: auto;
        text-align: center;
        max-width: 100%;
    }

    #address{
        order: 2;
        flex-direction: column;
        max-width: 100%;
    }

    #about-location{
        order: 1;
        max-width: 100%;
    }

    #about-location h3{
        margin-bottom: 0;
    }

    #about-location p{
        display: none;
    }
    
`

export const SectionThree = styled.section`
    /*Event details container*/
    width: 80%;
    margin: 0 auto;

    .detail{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 5%;
        margin-bottom: 4em;
    }

    .detail img{
        width: 50%;
    }

    .detail h3{
        margin-bottom: 1em;
        font-size: 2em;
        font-weight: 500;
    }

    .detail-1 h3{
        font-size: 3em;
        font-weight: 700;
    }

    .detail-description{
        width: 100%;
        padding-left: 2em;
    }

    #detail-3 .detail-description{
        justify-self: flex-start;
    }

    .detail-description ul{
        list-style-position: inside;
    }

    .detail-description ul li{
        margin-bottom: 0.4em;
    }

    
    .detail-description ul li:last-child{
        font-weight: bold;
    }

    @media (max-width: 450px){
        .detail {
            flex-direction: column;
            margin-bottom: 0.5em;
            gap: 0;
        }

        .detail img {
            width: 100%;
            margin: 2em 0;
        }

        #detail-1 img {
            display: none;
        }

        .detail-description {
            padding: 0;
        }

        #detail-3 img {
            order: 2;
        }

        #detail-3 .detail-description {
            order: 1;
        }
    }

`

export const Cta = styled.div`
/* Call to Action Section */
    height: 300px;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${img7});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    h3{
        margin-bottom: 1.2em;
        font-size: 2em;
        font-weight: 500;
    }

    .btn{
        width: 30%;
        margin: 0 auto;
        font-weight: 600;
        font-size: 1.2em;
        border-radius: 10px
    }

    @media (max-width: 450px){
        text-align: center;
        align-items: center;
        #cta .btn {
            width: 80%;
        }
    }
`

export const Footer = styled.footer`
/* Footer*/

    text-align: center;
    color: #95989a;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3{
        font-size: 1.8em;
        margin-bottom: 0.5em;
    }

    p:nth-child(2){
        margin-bottom: 1em;
        font-size: 1.2em;
    }

    span{
        font-weight: bold;
    }


`

