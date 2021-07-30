import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { Form, Button, Row, Col } from "react-bootstrap";
import Message from "../components/Message"
import Loader from "../components/Loader"
import { login } from "actions/userActions"

const loginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div>
            
        </div>
    )
}

export default loginScreen
