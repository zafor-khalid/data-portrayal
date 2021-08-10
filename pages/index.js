import Head from 'next/head'
import Link from 'next/link'
import React, { useContext } from 'react';
import { languageContext } from '../src/components/Contexts/Contexts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { seeDetails } from '../src/components/Shared/intl/intl';
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

export async function getStaticProps() {
  const res = await fetch('https://api.npoint.io/888cba28053234afdf51');
  const styleRes = await fetch('https://api.npoint.io/836be77be325d0a34bd8');
  const landingPageData = await res.json();
  const styles = await styleRes.json()

  if (!landingPageData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      landingPageData: landingPageData,
      styles: styles,
    },
  }
}

export default function Home({ styles, landingPageData }) {
  const [language, setLanguage] = useContext(languageContext);
  const cardStyle = {
    backgroundColor: styles?.style?.["card-background-color"],
    color: styles?.style?.["card-text-color"],
    fontFamily: styles?.style?.["card-font"],
    width: '35vh',
    minWidth: '25vh',
    height: '40vh',
  }

  return (
    <>
      <Head>
        <title>Data Portrayal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="d-flex flex-wrap justify-content-center mb-5">
        {
          landingPageData?.cards?.map((data, idx) => (
            <motion.div key={idx} className=""
              variants={container}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03 }}
            >
              <Card key={idx} style={cardStyle} className="mt-5  text-center customCard" >
                <Card.Body className='d-flex justify-content-center align-items-center'>
                  <Card.Title style={{ fontSize: "2.5vh" }}>

                    {data[`title_${language}`]}

                    {language == 'en'
                      ? <p style={{ fontSize: "5.5vh , margin: 5px" }}>{"$" + data.value_en}</p>
                      : <p style={{ fontSize: "6.3vh" }}>{data.value_bn + "৳"}</p>}
                  </Card.Title>
                </Card.Body>

                <Link href={`/category/${data.detail?.replace('https://api.npoint.io/', '')}`}>
                  <div className='customButton d-flex justify-content-center align-items-center'>
                    {
                      seeDetails[language]
                    }
                    <FontAwesomeIcon icon={faArrowRight} style={{ height: '12px', width: '25px' }} />
                  </div>
                </Link>
              </Card>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}
