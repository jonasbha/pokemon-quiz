const quiz = [
    {
        question: 'Hvilken type er Pikachu',
        answers: [
            {
                answer: 'Rock'
            },
            {
                answer: 'Water'
            },
            {
                answer: 'Fairy'
            },
            {
                answer: 'Electric',
                correct: true
            }
        ],
    }, 
    {
        question: 'Hvor mange evolusjoner har Pikachu?',
        answers: [
            {
                answer: 1
            },
            {
                answer: 2,
                correct: true
            },
            {
                answer: 3
            },
            {
                answer: 4
            }
        ],
    }
]

export default function handler(req, res) {
    
    if (req.method == 'POST') {
        const data = req.body;
        quiz.push(data);
        res.status(201).json({success: true, data: quiz});
    } else if (req.method == 'PUT') {
        res.status(405).end()
    } else {
        res.status(200).json({success: true, data: quiz});
    }
  }