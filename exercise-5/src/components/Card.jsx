function Card(card){
    const {card:{name, title, description, img}} = card;
    return(
        <div className="card">
          <img src={img} alt={title} />
          <h4>{name}</h4>
          <small>{title}</small>
          <p>
            {description}
          </p>
        </div>
    )
}
export default Card;