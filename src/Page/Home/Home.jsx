
import Header from "../../Component/Header/Header";
import Card from "../../Component/Card/Card";
import { useEffect, useState } from "react";


const Home = () => {

    const [loadData, setLoadData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    
    const handleSearchText = (loadData) => {

        if (searchInput === "Health") {
             const searchData = loadData.filter(data => data.category === "Health");
             setLoadData(searchData);
        }
        else if (searchInput === "Education"){
            const searchData = loadData.filter(data => data.category === "Education");
             setLoadData(searchData);

        }
        else if(searchInput === "Clothing"){

            const searchData = loadData.filter(data => data.category === "Clothing");
             setLoadData(searchData);
        }
        else if(searchInput === "Food"){
            const searchData = loadData.filter(data => data.category === "Food");
             setLoadData(searchData);

        }
        else if (searchInput === ""){
            setLoadData(loadData);
        }

    }

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setLoadData(data))
    }, [])

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }
    
    return (
        <div>
            <Header 
            handleChange={handleChange}
            handleSearchText = {handleSearchText}
            ></Header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap:2 max-w-[1100px] mx-auto mt-32 mb-16">
                {
                    loadData?.map(card => <Card card={card} key={card.id}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;