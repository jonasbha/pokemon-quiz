import Head from 'next/head'
import axios from 'axios'
import {useEffect, useState} from 'react'

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);

    const getQuizes = async () => {

        try {
            const response = await axios.get('/api/quiz');

            if (response?.data?.success) {
                setQuiz(response.data.data);
            }
        } catch (error) {
            console.log(error?.response?.data);
        }
    }

    useEffect(() => {
        getQuizes()
    }, [])

    return (
        <>
        <Head>
            <title>Pokemon Quiz</title>
            <meta name="viewport" content="initial-scale=1.0" width="device-width" />
        </Head>
            <h1>Pokemon Quiz</h1>
            <section>
                {JSON.stringify(quiz)}
            </section>
        </>
    )
}

export default Quiz;