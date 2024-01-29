export default function RecipeTile () {
    const lasagne_sandwich = require("../images/lasagna_sandwich.jpeg")
    return (
        <div className="recipe-tile">
            <img src={lasagne_sandwich}/>
            <h3>Lasagna Sandwich</h3>
            <h4>20 minutes</h4>
        </div>
    )
}