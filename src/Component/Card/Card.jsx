

const Card = (card) => {

    return (
        <div>
            <div className={`bg-[${card.card.color_card_bg}] rounded w-[260px] mt-3`}>
                <figure><img className="" src={card.card.img} /></figure>
                <div className="space-y-2 mt-2 p-3">

                    <button className={`text-sm text-[${card.card.color_text_btn_bg}] text-left h-6 rounded px-2 bg-[${card.card.color_category_bg}]`}>{card.card.category}</button>
                    <h2 className={`text-lg font-semibold text-[${card.card.color_text_btn_bg}]`}>{card.card.title}</h2>
                </div>


            </div>
        </div>
    );
};

export default Card;