import React from "react";
const FAQ = () => {
    const faqs = [
        { question: 'Where are your offices?',
            answer: 'We are located at kahawa west opposite quickmart'
        },
        { question: 'Why is my internet slow',
            answer: 'Kindly send your account number to 0745978073'
        },
    ];
    return (
        <div>,
            <h2>Frequently Asked Questions</h2>
            <ul>
                {faqs.map((faq,index) =>( 
                    <li key={index}>
                        <strong>{faq.question}</strong>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default FAQ;