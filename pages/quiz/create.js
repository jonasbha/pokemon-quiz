import Head from 'next/head'
import axios from 'axios'
import {createContext, useEffect, useState} from 'react'

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const [error, setError] = useState(null);
    const [question, setQuestion] = useState('');

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    }

    const createQuiz = async () => {

        try {
            const response = await axios.post('/api/quiz', { question });

            if (response?.data?.success) {
                setQuiz(response.data.data);
            }
        } catch (err) {
            setError(err?.response?.data?.error)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createQuiz();
    }

    if (error) {
        return <p>Noe gikk galt: {error}</p>
    }

    return (
        <>
        <Head>
            <title>Create Pokemon Quiz</title>
            <meta name="viewport" content="initial-scale=1.0" width="device-width" />
        </Head>
            <h1>Create Pokemon Quiz</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="question">Lag nytt spørsmål</label>
                <input 
                    id="question" 
                    type="text" 
                    name="question" 
                    value={question} 
                    onChange={handleQuestionChange} 
                />
                <button type="submit">Send</button>
            </form>
            <section>{JSON.stringify(quiz)}</section>
        </>
    )
}

export default Quiz;