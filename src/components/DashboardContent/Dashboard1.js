import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";
import './CSS.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {confirmAlert} from "react-confirm-alert";
import CustomizedSteppers from "../WizardContent/WizardContent";
import MyPopup from "../Popup/Popup";
import CustomersTable from "../CustomersTable/CustomersTable";



class Dashboard1 extends React.Component {
    state = {

    };

    constructor(props) {
        super(props);
        this.state = {
            hide: true
        };
    }

    render() {

        return (
            <>

                                <Container style={{}}>
                                    <Row style={{}}>
                                        <div  className="mycenter1" style={{width:"100%",borderRadius:10,border:'none'}}>
                                            <Row style={{width:"100%"}}>
                                                <Col md="6" xs="6">
                                                    <div  className="shadow mycenter1 dashcardwidth" style={{height:270,borderRadius:10,border:'none'}}>

                                                        <Row style={{width:"100%"}}>
                                                            <Col >
                                                                <Row className="mycenter1" style={{width:"100%"}}>
                                                                    <div className="font-weight-bold largesize" style={{ color: "rgb(0,0,0)", }}>
                                                                        All Time
                                                                    </div>
                                                                </Row>
                                                                <Row className="mycenter1" style={{marginTop:"5%"}}>
                                                                    <div className="mediumsize" style={{color: "rgb(20,0,255)", }}>
                                                                        $ 100,000,00
                                                                    </div>
                                                                </Row>

                                                                <Row style={{marginTop:"5%"}}>
                                                                    {/*<Col md="2" xs="2">*/}
                                                                    {/*</Col>*/}
                                                                    <Col md="4" xs="4" stye={{alignItems:"right"}}>
                                                                        <div className="icon-shape" style={{fontSize: 24, backgroundColor: "rgb(20,0,255)", marginTop:"0%", width:25,height:25, borderRadius:20, textAlign:"left"}}>
                                                                            <div style={{fontSize: 12, color: "rgb(255,255,255)", marginTop:"0%"}}>
                                                                                35
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md="8" xs="8">
                                                                        <div className="smallsize" style={{color: "rgb(0,0,0)", marginTop:"0%", textAlign:"left"}}>
                                                                            Invoice and credits
                                                                        </div>
                                                                    </Col>

                                                                </Row>

                                                                <Row className="mycenter1" style={{marginTop:"2%", width:"100%"}}>
                                                                    <div  style={{fontSize: 24, backgroundColor: "rgb(218,218,218)", width:"90%",height:2}}>
                                                                    </div>
                                                                </Row>

                                                                <Row style={{marginTop:"2%"}}>
                                                                    {/*<Col md="2" xs="2">*/}
                                                                    {/*</Col>*/}
                                                                    <Col className="right" md="4" xs="4" stye={{alignSelf:"right"}}>
                                                                        <div className="icon-shape" style={{alignSelf:"right",fontSize: 24, backgroundColor: "rgb(3,238,255)", marginTop:"0%", width:25,height:25, borderRadius:20, textAlign:"left"}}>
                                                                            <div style={{fontSize: 12, color: "rgb(255,255,255)", marginTop:"0%"}}>
                                                                                35
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md="8" xs="8">
                                                                        <div className="smallsize" style={{ color: "rgb(0,0,0)", marginTop:"0%", textAlign:"left"}}>
                                                                            Total Customers
                                                                        </div>
                                                                    </Col>

                                                                </Row>



                                                            </Col>
                                                        </Row>
                                                        {/*<Row style={{marginTop:"5%"}}>*/}
                                                        {/*    <div style={{fontSize: 24, color: "rgb(20,0,255)", }}>*/}
                                                        {/*        $ 100,000,00*/}
                                                        {/*    </div>*/}
                                                        {/*</Row>*/}

                                                    </div>
                                                </Col>
                                                <Col md="6" xs="6">
                                                    <div  className="shadow mycenter1 dashcardwidth" style={{height:270,borderRadius:10,border:'none'}}>
                                                        <Row style={{width:"100%"}}>
                                                            <Col >
                                                                <Row className="mycenter1" style={{width:"100%"}}>
                                                                    <div className="font-weight-bold largesize" style={{ color: "rgb(0,0,0)", }}>
                                                                        Last 12 month
                                                                    </div>
                                                                </Row>
                                                                <Row className="mycenter1" style={{marginTop:"5%"}}>
                                                                    <div className="mediumsize" style={{color: "rgb(20,0,255)", }}>
                                                                        $ 100,000,00
                                                                    </div>
                                                                </Row>

                                                                <Row style={{marginTop:"5%"}}>
                                                                    {/*<Col md="2" xs="2">*/}
                                                                    {/*</Col>*/}
                                                                    <Col md="4" xs="4" stye={{alignItems:"right"}}>
                                                                        <div className="icon-shape" style={{fontSize: 24, backgroundColor: "rgb(20,0,255)", marginTop:"0%", width:25,height:25, borderRadius:20, textAlign:"left"}}>
                                                                            <div style={{fontSize: 12, color: "rgb(255,255,255)", marginTop:"0%"}}>
                                                                                35
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md="8" xs="8">
                                                                        <div className="smallsize" style={{color: "rgb(0,0,0)", marginTop:"0%", textAlign:"left"}}>
                                                                            Invoice and credits
                                                                        </div>
                                                                    </Col>

                                                                </Row>

                                                                <Row className="mycenter1" style={{marginTop:"2%", width:"100%"}}>
                                                                    <div  style={{fontSize: 24, backgroundColor: "rgb(218,218,218)", width:"90%",height:2}}>
                                                                    </div>
                                                                </Row>

                                                                <Row style={{marginTop:"2%"}}>
                                                                    {/*<Col md="2" xs="2">*/}
                                                                    {/*</Col>*/}
                                                                    <Col className="right" md="4" xs="4" stye={{alignSelf:"right"}}>
                                                                        <div className="icon-shape" style={{alignSelf:"right",fontSize: 24, backgroundColor: "rgb(3,238,255)", marginTop:"0%", width:25,height:25, borderRadius:20, textAlign:"left"}}>
                                                                            <div style={{fontSize: 12, color: "rgb(255,255,255)", marginTop:"0%"}}>
                                                                                35
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md="8" xs="8">
                                                                        <div className="smallsize" style={{ color: "rgb(0,0,0)", marginTop:"0%", textAlign:"left"}}>
                                                                            Total Customers
                                                                        </div>
                                                                    </Col>

                                                                </Row>



                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Row>










                                    <Row style={{marginTop:20}} >
                                        <div  className="mycenter1" style={{width:"100%",borderRadius:10,border:'none'}}>
                                            <Row style={{width:"100%"}}>

                                                <Col md="6" xs="6">
                                                    <div  className="shadow mycenter1 dashcardwidth" style={{height:270,borderRadius:10,border:'none'}}>
                                                        <Row style={{width:"100%"}}>
                                                            <Col >
                                                                <Row className="mycenter1" style={{width:"100%"}}>
                                                                    <div className="font-weight-bold largesize" style={{ color: "rgb(0,0,0)", }}>
                                                                        Total Open Balance
                                                                    </div>
                                                                </Row>
                                                                <Row className="mycenter1" style={{width:"100%"}}>
                                                                    <div className="mediumsize" style={{color: "rgb(20,0,255)", }}>
                                                                        $ 50,000
                                                                    </div>
                                                                </Row>

                                                                <Row style={{marginTop:"0%"}}>
                                                                    {/*<Col md="2" xs="2">*/}
                                                                    {/*</Col>*/}
                                                                    <Col md="4" xs="4" stye={{alignItems:"right"}}>
                                                                        <div className="icon-shape" style={{fontSize: 24, backgroundColor: "rgb(20,0,255)", marginTop:"0%", width:25,height:25, borderRadius:20, textAlign:"left"}}>
                                                                            <div style={{fontSize: 12, color: "rgb(255,255,255)", marginTop:"0%"}}>
                                                                                35
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md="8" xs="8">
                                                                        <div className="smallsize" style={{color: "rgb(0,0,0)", marginTop:"0%", textAlign:"left"}}>
                                                                            Invoice and credits
                                                                        </div>
                                                                    </Col>

                                                                </Row>

                                                                <Row className="mycenter1" style={{marginTop:"0%", width:"100%"}}>
                                                                    <div  style={{fontSize: 24, backgroundColor: "rgb(218,218,218)", width:"90%",height:2}}>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mycenter1" style={{width:"100%"}}>
                                                                    <div className="font-weight-bold largesize" style={{ color: "rgb(0,0,0)", }}>
                                                                        Total Overdue
                                                                    </div>
                                                                </Row>
                                                                <Row className="mycenter1" style={{width:"100%"}}>
                                                                    <div className="mediumsize" style={{color: "rgb(20,0,255)", }}>
                                                                        $ 50,000
                                                                    </div>
                                                                </Row>

                                                                <Row style={{marginTop:"0%"}}>
                                                                    {/*<Col md="2" xs="2">*/}
                                                                    {/*</Col>*/}
                                                                    <Col md="4" xs="4" stye={{alignItems:"right"}}>
                                                                        <div className="icon-shape" style={{fontSize: 24, backgroundColor: "rgb(20,0,255)", marginTop:"0%", width:25,height:25, borderRadius:20, textAlign:"left"}}>
                                                                            <div style={{fontSize: 12, color: "rgb(255,255,255)", marginTop:"0%"}}>
                                                                                35
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md="8" xs="8">
                                                                        <div className="smallsize" style={{color: "rgb(0,0,0)", marginTop:"0%", textAlign:"left"}}>
                                                                            Invoice and credits
                                                                        </div>
                                                                    </Col>

                                                                </Row>




                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>





                                                <Col md="6" xs="6">
                                                    <div  className="shadow mycenter1 dashcardwidth" style={{height:270,borderRadius:10,border:'none'}}>
                                                        <Row style={{width:"100%"}}>
                                                            <Col >
                                                                <Row className="mycenter1" style={{width:"100%"}}>
                                                                    <div className="font-weight-bold largesize" style={{ color: "rgb(0,0,0)", }}>
                                                                        Average Terms
                                                                    </div>
                                                                </Row>
                                                                <Row className="mycenter1" style={{width:"100%"}}>
                                                                    <div className="mediumsize" style={{color: "rgb(20,0,255)", }}>
                                                                        45 Days
                                                                    </div>
                                                                </Row>


                                                                <Row className="mycenter1" style={{marginTop:"0%", width:"100%"}}>
                                                                    <div  style={{fontSize: 24, backgroundColor: "rgb(218,218,218)", width:"90%",height:2}}>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mycenter1" style={{width:"100%"}}>
                                                                    <div className="font-weight-bold largesize" style={{ color: "rgb(0,0,0)", }}>
                                                                        Current Debtor Days
                                                                    </div>
                                                                </Row>
                                                                <Row className="mycenter1" style={{width:"100%"}}>
                                                                    <div className="mediumsize" style={{color: "rgb(20,0,255)", }}>
                                                                        $ 50,000
                                                                    </div>
                                                                </Row>






                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Row>






                                </Container>



                {/*<Card  className="shadow mycenter1" style={{width:"90%",height:200,borderRadius:10,border:'none', marginBottom:"2%",marginTop:"5%"}}>*/}

                {/*</Card>*/}



            </>
        );
    }
}

export default Dashboard1;
