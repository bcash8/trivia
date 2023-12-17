import styled from "styled-components";
import { TriviaData } from "../data/trivia";
import { useEffect, useState } from "react";



export function TriviaCard({ cardData, onSelect }: { cardData: TriviaData, onSelect: (selection: string) => void }) {
    useEffect(() => console.log("referesh"), [cardData])
    return (
        <Layout>
            <Question>{cardData.question}</Question>
            <Options>
                {cardData.other.map((option, i) =>
                    <Button key={i} option={option} correct={option === cardData.correct} onClick={() => onSelect(option)} />
                )}
            </Options>
        </Layout>
    )
}

function Button({ option, correct, onClick }: { option: string, correct: boolean, onClick: () => void }) {
    const [clicked, setClicked] = useState(false);
    useEffect(() => setClicked(false), [option]);
    return (
        <OptionButton color={clicked ? correct ? '#43ac51' : '#ff6464' : undefined} onClick={() => { setClicked(true); onClick(); }}>{option}</OptionButton>
    )
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
`

const Question = styled.div`
    background-color: #313131;
    border-radius: 5px;
    padding: 20px;
    width: 100%;
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    line-height: 1.2;
    box-shadow: 0 0 3rem 1px #1b1b1b;
`

const Options = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: flex-start;
    height: fit-content;
    width: 100%;
`

const OptionButton = styled.button<{ color?: string }>`
    background-color: ${props => props.color ? props.color : '#313131'};
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    font-size: 2rem;
    text-align: center;
    font-weight: 100;
    line-height: 1.2;
    box-shadow: 0 0 3rem 1px #1b1b1b;
    border: none;
`