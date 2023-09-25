import { useLoaderData } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Card from "../../Component/Card/Card";


const Home = () => {

    const cards = useLoaderData();
    
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap:2 max-w-[1100px] mx-auto mt-32 mb-16">
            {
                cards.map(card => <Card card={card} key={card.id}></Card> )
            }
            </div>
        </div>
    );
};

export default Home;