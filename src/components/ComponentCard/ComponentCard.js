import { Button, Card } from 'react-bootstrap';
import ComponentCardStyless from '../../../styles/ComponentCard.module.css';
import { dataContext } from '../Contexts/Contexts';
import { stylesContext, languageContext } from '../Contexts/Contexts';
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
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

    }

    // console.log(cardStyle);

    const handleDetail = (detail, status) => {
        setComponentStatus(status);
        console.log(detail, status);

        fetch(detail)
            .then(res => res.json())
            .then(data => {
                console.log(data)
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
                        <div>
                            {
                                pageData.cards?.map((data, idx) => (
                                    <Card key={idx} style={cardStyle} className="mt-5  text-center customCard m-auto " >
                                        <Card.Body>
                                            <Card.Title>{language == 'en' ? data.title_en + " $" : data.title_bn + " "}{language == 'en' ? data.value_en : data.value_bn + "৳"}</Card.Title>
                                            <Button onClick={() => handleDetail(data.detail, true)} className='customButton' size='sm'>See Details<FontAwesomeIcon icon={faArrowRight} style={{ height: '12px', width: '25px' }} /></Button>

                                        </Card.Body>
                                    </Card>
                                ))
                            }
                        </div>
                    </motion.div>
                    : <>


                        <Button className="customButton" onClick={() => handleReturn(false)} variant="primary" style={{ postion: 'absolute' }}><FontAwesomeIcon icon={faArrowLeft} style={{ height: '12px', width: '25px' }} />Return</Button>

                        <div className=' d-flex flex-wrap justify-content-center align-items-center'>

                            {
                                categoryPageData?.cards?.map((data, idx) => (
                                    <motion.div key={idx}  className=""
                                        variants={container}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover={{scale: 1.03}}
                                        >

                                        <Card style={cardStyle} className="m-2 text-center cardView">
                                            <Card.Img variant="top" src={data.photo} />
                                            <Card.Body className='d-flex align-items-center justify-content-center'>
                                                <Card.Title>{language == 'en' ? data.title_en + " $" : data.title_bn + " "}{language == 'en' ? data.value_en : data.value_bn + "৳"}</Card.Title>

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