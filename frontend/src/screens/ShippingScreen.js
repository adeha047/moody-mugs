import React, { useState,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const ShippingScreen = ({ history }) => {
   
        const [address, setAddress] = useState('')
        const [city, setCity] = useState('')
        const [postalCode, setPostalCode] = useState('')
        const [country, setCountry] = useState('')

        return 
        <FormContainer> <h1>Shipping</h1>
        
        </FormContainer>
    
}

export default ShippingScreen
