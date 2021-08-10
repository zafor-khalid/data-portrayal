import { Button, Card } from 'react-bootstrap';
import { dataContext } from '../Contexts/Contexts';
import { stylesContext, languageContext } from '../Contexts/Contexts';
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: .6
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

const ComponentCard = () => {
    const [pageData, setPageData] = useContext(dataContext);
    const [componentStatus, setComponentStatus] = useState(false);
    const [categoryPageData, setCategoryPageData] = useState();
    const [styles, setStyles] = useContext(stylesContext);
    const [language, setLanguage] = useContext(languageContext);

    const cardStyle = {
        backgroundColor: styles?.style?.["card-background-color"],
        color: styles?.style?.["card-text-color"],
        fontFamily: styles?.style?.["card-font"],
        width: '30vh',
        minWidth: '25vh',
        height: '40vh',

    }

    const handleDetail = (detail, status) => {
        setComponentStatus(status);

        fetch(detail)
            .then(res => res.json())
            .then(data => {
                setCategoryPageData(data)
            })


    }
    const handleReturn = (status) => {
        setComponentStatus(status);
    }

    return (

        <div className="mt-5 mb-5">

            {
                !componentStatus ?

                    <motion.div className="container"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="d-flex flex-wrap justify-content-center">
                            {
                                pageData.cards?.map((data, idx) => (
                                    <Card key={idx} style={cardStyle} className="mt-5  text-center customCard" >
                                        <Card.Body className='d-flex justify-content-center align-items-center'>
                                            <Card.Title style={{ fontSize: "3vh" }}>

                                                {language == 'en'
                                                    ? data.title_en
                                                    : data.title_bn + " "}

                                                {language == 'en'
                                                    ? <p style={{ fontSize: "5.5vh" }}>{"$" + data.value_en}</p>
                                                    : <p style={{ fontSize: "6.3vh" }}>{data.value_bn + "৳"}</p>}
                                            </Card.Title>


                                        </Card.Body>

                                        <div onClick={() => handleDetail(data.detail, true)} className='customButton d-flex justify-content-center align-items-center'>
                                            {
                                                language == 'en' ? 'See Details' : 'বিস্তারিত দেখুন'
                                            }
                                            <FontAwesomeIcon icon={faArrowRight} style={{ height: '12px', width: '25px' }} />
                                        </div>
                                    </Card>
                                ))
                            }
                        </div>
                    </motion.div>
                    : <>
                        <p className="customButton d-flex justify-content-center align-items-center" onClick={() => handleReturn(false)} variant="primary" style={{ position: 'fixed', right: '5vw', bottom: '15px', zIndex: 1, padding: '5px', paddingRight: '10px' }}><FontAwesomeIcon icon={faArrowLeft} style={{ height: '12px', width: '25px' }} />Return</p>
                        <div className=' d-flex flex-wrap justify-content-center align-items-center'>

                            {
                                categoryPageData?.cards?.map((data, idx) => (
                                    <motion.div key={idx} className=""
                                        variants={container}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover={{ scale: 1.03 }}
                                    >

                                        <Card style={cardStyle} className="m-2 text-center cardView">
                                            <Card.Img variant="top" src={data.photo} />
                                            <Card.Body className='d-flex align-items-center justify-content-center'>
                                                <Card.Title style={{ fontSize: "3vh" }}>
                                                <FontAwesomeIcon icon={faLaptopCode} style={{height: "15px", width: "15px"}}/> 

                                                    {language == 'en'
                                                        ? data.title_en
                                                        : data.title_bn + " "}

                                                    {language == 'en'
                                                        ? <p style={{ fontSize: "3.2vh" }}>{"$" + data.value_en}</p>
                                                        : <p style={{ fontSize: "3.5vh", paddingBottom: "5px"}}>{data.value_bn + "৳"}</p>}
                                                </Card.Title>

                                            </Card.Body>
                                        </Card>
                                    </motion.div>
                                ))
                            }

                        </div>

                    </>
            }
        </div>

    );
};

export default ComponentCard;