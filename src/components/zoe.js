import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
    Card,
    Nav,
    Tab,
    Navbar,
    NavDropdown,
    Row,
    Col,
    Container,
    Jumbotron,
    Button,
    Modal,
    ProgressBar,
} from "react-bootstrap"


import ReactPlayer from "react-player"

const navtabs = {
    display: "flex",

    justifyContent: "center",
}
const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
}

const text = {
    fontSize: "20px",
    marginTop: "20px",
    marginRight: "10px",
}

function Mph(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            class=" bg-secondary mb-3"
        >
            <Modal.Header
                closeButton
                style={{ color: "#f4623a", backgroundColor: "#000000b7" }}
            >
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 className="text-uppercase text-white font-weight-bold">
                        ZOE 911
          </h2>
                </Modal.Title>
            </Modal.Header>
            <div class="text-white " style={{ backgroundColor: "#000000b7" }}>
                <div class="container"></div>
            </div>
            <Modal.Body style={{ color: "white", backgroundColor: "#000000b7" }}>
                <div class="d-flex justify-content-center  mb-3">
                    <ReactPlayer url="https://www.youtube.com/watch?v=sVITgI-EQ-c" playing />
                </div>
            </Modal.Body>


        </Modal>
    )
}

function MphModal() {
    const [modalShowNyx, setModalShowNyx] = React.useState(false)

    return (
        <div>
            <a
                onClick={() => setModalShowNyx(true)}

                class='play-button'
            >

                <i class="fa fa-play" aria-hidden="true"></i>
            </a>

            <Mph show={modalShowNyx} onHide={() => setModalShowNyx(false)} />
        </div>
    )
}

export default class MphVideo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalShowNyx: false,
            modalCurrent: 0,
        }
        this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
        this.setModal = this.setModal.bind(this)
    }

    handlePortfolioClick(index, e) {
        e.preventDefault()
        this.setModal(true, index)
    }

    setModal(isShown, current) {
        this.setState({
            modalShowNyx: isShown,
            modalCurrent: current,
        })
    }
    render() {
        return (
            <div>
                <MphModal />
            </div>
        )
    }
}