import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";

const RightNav = () => {
    return (
    <div>
    <ButtonGroup vertical>
      < Button variant = "outline-primary" > < FaGoogle></FaGoogle> Sign in Google < /Button>
      < Button variant = "outline-secondary" > Login With Github </Button>    
    </ButtonGroup>
        </div>
    );
};

export default RightNav;