import Items from "../components/NavContent/Items";

const Men = ({ products, handleAddToCart }) => {
  return (
    <div className="home">
      <div className="box_top">
        <div className="sidebox">
          <ul>
            <li>Walking</li>
            <li>Running</li>
            <li>Yeezy</li>
            <li>Luxury</li>
            <li>Slip on</li>
            <li>Football</li>
            <li>Splashy</li>
            <li>Geek-Chic</li>
            <li>Boldly-Coloured</li>
            <li>Black</li>
            <li>White</li>
            <li>Slam Dunk</li>
          </ul>
        </div>

        <div className="main_box">
          <img
            src="https://media.istockphoto.com/photos/couple-tying-shoes-picture-id525982116?k=20&m=525982116&s=612x612&w=0&h=59KzYyTpU2hpmthgVwwAhjZNr-kb6R84caMHvGEbDMM="
            alt="main"
          />
        </div>

        <div className="nav_box">
          <div className="navbox_one">
            <img
              src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-tying-laces-on-running-sneakers-a-close-up-picture-id1251139418?k=20&m=1251139418&s=612x612&w=0&h=yBNJj-6ozT1MtcPTMU4FkwtfOvi4BmT2BVQTNRvicyw="
              alt=""
            />
          </div>

          <div className="navbox_two">
            <img
              src="https://media.istockphoto.com/photos/got-to-get-them-tight-picture-id1081528662?b=1&k=20&m=1081528662&s=170667a&w=0&h=9tGsQ9AhuboSK1FbD9XkF-W0RZcjdm1YEQlwMHCIZZw="
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="box_box_slide">
        <p>Trending:</p>

        <div className="box_slide">
          <div>
            <img
              src="https://media.istockphoto.com/photos/red-sneakers-picture-id691616136?k=20&m=691616136&s=612x612&w=0&h=eGO3RtFVCIBXRptCmGp_SIidXZjTa4XCSJrnlO3-Kqw="
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1586525198428-225f6f12cff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1615290642882-6b9501729a27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/photos/sport-shoes-on-isolated-white-background-picture-id956501428?k=20&m=956501428&s=612x612&w=0&h=UC4qdZa2iA0PJvv0RIBlJDyF80wxFyLPq4YWvZa30Sc="
              alt=""
            />
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/photos/fashion-white-sneakers-in-neon-light-sport-shoes-for-training-in-the-picture-id1301394040?k=20&m=1301394040&s=612x612&w=0&h=S9UaSMxBtR_y5w4Z2YdlA69PYi9PxMdVDyGhAbarl0w="
              alt=""
            />
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/photos/multicolored-shoe-on-gradient-background-3d-rendering-picture-id1172886559?k=20&m=1172886559&s=612x612&w=0&h=tDH4hBFP0sgK7Zi722UhUCawu14F5DrwqbfnQqxCEHo="
              alt=""
            />
          </div>
        </div>
      </div>

      <Items products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Men;
