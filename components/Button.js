import {useState} from 'react';

export default function Button() {

    const [title, setTitle] = useState('Nique!')

    function hello() {
        console.log("coucou");
    }

    return (
        <button onClick={hello}>Clique-moi {title}</button>
    )
}
