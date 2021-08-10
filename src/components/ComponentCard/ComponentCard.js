import { Button, Card } from 'react-bootstrap';
import ComponentCardStyless from '../../../styles/ComponentCard.module.css';
import { dataContext } from '../Contexts/Contexts';
import { stylesContext, languageContext } from '../Contexts/Contexts';
import React, { useContext, useEffect, useState } from 'react';

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
        minWidth:'25vh'
       
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
        <div className="d-flex m-5 flex-wrap justify-content-center align-items-center" >
            {
                !componentStatus ?
                    pageData.cards?.map((data, idx) => (
                        <Card key={idx} style={cardStyle} className="m-3 text-center">
                            <Card.Body>
                                <Card.Title>{language=='en'? data.title_en + " $" : data.title_bn +" "}{language=='en' ? data.value_en : data.value_bn + "৳"}</Card.Title>
                                <Button onClick={() => handleDetail(data.detail, true)} variant="dark">See Details</Button>

                            </Card.Body>
                        </Card>
                    ))
                    : categoryPageData?.cards?.map((data, idx) => (
                        <Card key={idx} style={cardStyle} className="m-2 text-center">
                            <Card.Img variant="top" src={data.photo} />
                            <Card.Body>
                                <Card.Title>{language=='en'? data.title_en + " $" : data.title_bn +" "}{language=='en' ? data.value_en : data.value_bn + "৳"}</Card.Title>
                                {/* <Button onClick={() => handleReturn(false)} variant="primary">Return</Button> */}

                            </Card.Body>
                        </Card>
                    ))
            }
        </div>
    );
};

export default ComponentCard;