import React, { useState } from "react";          /* useState e un hook, permite unei componente functonale sa retina o stare care se va schimba */

import "./App.css"    // importa fisierul css cu stilurile clasice

// declararea componentei si a state-ului
// defineste o componenta functionala ca arrow function. Numele incepe cu litera mare, regula obligatorie in React, pentru a o deosebi de tag-urile HTML
const Counter = () => {

    /* Aici se creaza state-ul:
     - count este valoarea curenta (incepe de la 0), valoarea initiala este data lui useState
     - setCount este functia care modifica count, gandeste-te la OOP cu date membre si metode
     - sintaxa [count, setCount] se numeste array destructuring pentru ca useState returneaza un array cu 2 elemente

     Nu modifici niciodata count direct (ex count = 10), folosesti intotdeauna setCount
    */
    const [count, setCount] = useState( 0 );          // setCount e un fel de Setter, si o sa modifice starea 

    // functia primeste ca paramentru action un string   - e handlerul pentru click-uri
    const handleClick = (action) => {
        if(action === "decrease") {

            setCount(( prevCount ) => prevCount - 1);

        } else if(action === "increase") {

            setCount(( prevCount ) => prevCount + 1);

        } else {
            setCount(0);
        }
    }

    const getColor = () => {
        
        if(count > 0 ) return "green";
        if(count < 0 ) return "red";
        return "black";
    }

    //UI
    return (
        <div className="container">
            <header>
                <h1>Counter </h1>
            </header>

            <main>
                <section>
                    <p id="value" style={{color: getColor() }}>
                        {count}
                    </p>
                    <section className="button-container">
                        <button className="btn decrease" onClick={() => handleClick("decrease")}>Decrease</button>
                        <button className="btn reset" onClick={() => handleClick("reset")}>Reset</button>
                        <button className="btn increase" onClick={() => handleClick("increase")}>Increase</button>
                    </section>
                </section>
            </main>
        </div>
    );

}

export default Counter;   // asa facem reutilizabila componenta, e obligatorie in react
/* 
Flux complet:
- aplicatia porneste cu count = 0 deci textul este black
- apesi increase, si handleClick("increase") ruleaza
- setCount schimba state-ul, iar React re-randeaza componenta
- la o noua randare, count este 1, getColor() returneaza "green", iar ecranul se actualizeaza



De citit Virtual DOM React w3 sa vad cum functioneaza memoria la react:
https://legacy.reactjs.org/docs/faq-internals.html
*/