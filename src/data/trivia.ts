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
        question: 'How many bones has Campbell broken?',
        correct: '17',
        other: ['12', '17', '8', '15']
    },
    {
        question: 'What play was Mali in at Spectrum?',
        correct: 'Seussical',
        other: ['Seussical', 'Joseph', 'Annie', 'Beauty and the Beast']
    },
    {
        question: 'What book series did Hannah come into your room for help, because she couldn\'t read cursive?',
        correct: 'Nate the Great',
        other: ['Boxcar Children', 'The Tale of Desperaux', 'Junie B Jones', 'Nate the Great']
    },
]