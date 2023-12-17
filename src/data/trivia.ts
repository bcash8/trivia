export type TriviaData = {
    question: string;
    correct: string;
    other: string[];
}

export const triva: TriviaData[] = [
    {
        question: 'What did young Henry want to be when he grew up?',
        correct: 'Underwear Model',
        other: ['Chef', 'Underwear Model', 'Soccer Player', 'Truck Driver']
    },
    {
        question: 'What food did Dani not eat because you told her it was catfish?',
        correct: 'Chicken',
        other: ['Chicken', 'Pork', 'Beef', 'Salmon']
    },
    {
        question: 'What category did Kylee go to district reflections for?',
        correct: 'Dance',
        other: ['Science', 'Art', 'Dance', 'Videography']
    },
    {
        question: 'How many times has Campbell broken his arm?',
        correct: '10',
        other: ['10', '0', '1', '3']
    },
    {
        question: 'What play was Mali in at Spectrum?',
        correct: 'Seussical',
        other: ['Seussical', 'Joseph', 'Annie', 'Beauty and the Beast']
    },
    {
        question: 'Which book series did you use to teach Hannah cursive?',
        correct: 'Nate the Great',
        other: ['Boxcar Children', 'The Tale of Desperaux', 'Junie B Jones', 'Nate the Great']
    },
]