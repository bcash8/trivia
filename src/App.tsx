import styled from 'styled-components'
import { triva } from './data/trivia'
import { useEffect, useState } from 'react'
import { TriviaCard } from './components/TriviaCard';

export function App() {
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);

  if (triva[questionNum] === undefined) return <Ad />

  function onSelect(selection: string) {
    if (selection === triva[questionNum].correct) {
      setScore(prev => prev + 1);
      setTimeout(() => setQuestionNum(prev => prev + 1), 2000);
    }

  }


  return (
    <>
      <Header>Hodgson Trivia</Header>
      <Layout>
        <TriviaCard cardData={triva[questionNum]} onSelect={onSelect} />
        <Combination score={score} />
      </Layout>
    </>
  )
}

function Combination({ score }: { score: number }) {
  const combination = ["36", "24", "05"]

  return (
    <CombinationLayout>
      <p>{`${score > 0 ? combination[0][0] : "_"}${score > 1 ? combination[0][1] : "_"}`}</p>
      <p>{`${score > 2 ? combination[1][0] : "_"}${score > 3 ? combination[1][1] : "_"}`}</p>
      <p>{`${score > 4 ? combination[2][0] : "_"}${score > 5 ? combination[2][1] : "_"}`}</p>
    </CombinationLayout>
  )
}

function Ad() {
  const [showCode, setShowCode] = useState(false);

  useEffect(() => { setTimeout(() => setShowCode(true), 20000); }, [])

  return (
    <>
      <Header>Congrats! You did it.</Header>
      <Layout>
        <p style={{textAlign: 'center'}}>Watch this short video to get your code</p>
        <iframe height="300px"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1">
        </iframe>

        {showCode && <Combination score={10} />}
      </Layout>
    </>
  )
}

const Layout = styled.div`
  height: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  gap: 2rem;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #646cff;
  font-size: 2rem;
  font-weight: 700;
  padding: 6px 0;
  
`

const CombinationLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  font-size: 3rem;
  font-family: monospace;
`