import React, { useState,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const ShippingScreen = ({ history }) => {
   
        const [address, setAddress] = useState('')
        const [city, setcity] = useState('')
        const [postalCode, setPostalCode] = useState('')
        const [country, setCountry] = useState('')

        return (
        <div>
            Shipping
        </div>
    )
}

export default ShippingScreen
