import { v4 as uuidv4 } from 'uuid';
import CImg from '../assets/c-.png';
import cSharp from '../assets/c-sharp.png';
import CSS from '../assets/css-3.png';
import HTML from '../assets/html.png';
import java from '../assets/java.png';
import JS from '../assets/js.png';
import php from '../assets/php.png';
import python from '../assets/python.png';
import swift from '../assets/swift.png';
import typescript from '../assets/typescript.png';

const characters = [
    {
        id: uuidv4(),
        name: 'C++',
        image: CImg,
        clicked: false
    },
    {
        id: uuidv4(),
        name: 'C#',
        image: cSharp,
        clicked: false
    },
    {
        id: uuidv4(),
        name: 'CSS',
        image: CSS,
        clicked: false
    },
    {
        id: uuidv4(),
        name: 'HTML',
        image: HTML,
        clicked: false
    },
    {
        id: uuidv4(),
        name: 'Java',
        image: java,
        clicked: false
    },
    {
        id: uuidv4(),
        name: "JavaScript",
        image: JS,
        clicked: false
    },
    {
        id: uuidv4(),
        name: 'Php',
        image: php,
        clicked: false
    },
    {
        id: uuidv4(),
        name: 'Python',
        image: python,
        clicked: false
    },
    {
        id: uuidv4(),
        name: "Swift",
        image: swift,
        clicked: false
    },
    {
        id: uuidv4(),
        name: 'TypeScript',
        image: typescript,
        clicked: false
    },
]

export default characters;