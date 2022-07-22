import Products from "../../components/Products/Products";

const Home = ({
  products,
  isCartLoading
}) => {
  return (
    <div className="home">
      <div className="box_top">
        <div className="sidebox">
          <ul>
            <li>Nike</li>
            <li>Addidas</li>
            <li>Converse</li>
            <li>Reebok</li>
            <li>New Balance</li>
            <li>Vans</li>
            <li>Puma</li>
            <li>Jordan</li>
            <li>Yeezy</li>
            <li>Asics</li>
            <li>Saucony</li>
            <li>Salomon</li>
          </ul>
        </div>

        <div className="main_box">
          <img
            src="https://media.istockphoto.com/photos/foot-bump-greeting-picture-id1272487248?b=1&k=20&m=1272487248&s=170667a&w=0&h=cH_0iSj4mU0aDPPRs6RjaXEp-YjvAiQ53K6KK67w4To="
            alt="main"
          />
        </div>

        <div className="nav_box">
          <div className="navbox_one">
            <img
              src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>

          <div className="navbox_two">
            <img
              src="https://media.istockphoto.com/photos/white-shoe-floating-in-white-background-minimal-concept-idea-creative-picture-id1310374264?k=20&m=1310374264&s=612x612&w=0&h=Vil9EnV0-FJ8paeOSxuCPCHB8-x3r7cBzyWa65etR90="
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
              src="https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/photos/modern-sport-shoes-picture-id623270836?b=1&k=20&m=623270836&s=170667a&w=0&h=VKwCurtxIROtZvv7NwCG8UCT0l8QjKsVWjQJUWtqKjQ="
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/photos/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-picture-id1303978937?b=1&k=20&m=1303978937&s=170667a&w=0&h=az5Y96agxAdHt3XAv7PP9pThdiDpcQ3otWWn9YuJQRc="
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1603787081151-cbebeef20092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>

      <Products
        products={products}
        isCartLoading={isCartLoading}
      />
    </div>
  );
};

export default Home;
