import WomenItem from "./WomenItem"

const Women = ({ products, handleAddToCart }) => {
  return (
    <div className="home">
        <div className="box_top">
            <div className="sidebox">
                <ul>
                  <li>Koio Capri</li>
                  <li>New Balance</li>
                  <li>Everlane Forever</li>
                  <li>Vans classic slip-on</li>
                  <li>Nike Daybreak</li>
                  <li>Converse Chuck Taylor</li>
                  <li>Khaite x Adidas</li>
                  <li>Common Projects tournament</li>
                  <li>Alexander McQueen</li>
                  <li>The Row Marie</li>
                  <li>Reebok Club</li>
                  <li>Veja Campo</li>
                </ul>
            </div>

            <div className="main_box">
              <img src="https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394?k=20&m=1079117394&s=612x612&w=0&h=rUuc5v_-8uckfumKljOD0RkgfPtRWcV0c8n2MI1BS6w=" alt="main" />
            </div>

            <div className="nav_box">
              <div className="navbox_one">
                <img src="https://media.istockphoto.com/photos/woman-changing-shoes-picture-id1325195703?b=1&k=20&m=1325195703&s=170667a&w=0&h=HTMMoUHYv56sFpCUwpgTqPQMf9aShx_G_iwpiyvnieE=" alt="" />
              </div>

              <div className="navbox_two">
                <img src="https://media.istockphoto.com/photos/woman-wearing-comfortable-stylish-sneakers-outdoors-closeup-picture-id1360178477?b=1&k=20&m=1360178477&s=170667a&w=0&h=TO8ic4-0PiFeq8mY2-lMkDSDiLF3edC7BjkR6KGjGfA=" alt="" />
              </div>
            </div>
          </div>

          <div className="box_box_slide">
            <p>Trending:</p>

            <div className="box_slide">
              <div>
                <img src="https://media.istockphoto.com/photos/cropped-closeup-image-view-photo-of-nice-attractive-feminine-fit-thin-picture-id1129341836?k=20&m=1129341836&s=612x612&w=0&h=-m49HyvXKD_wXESLKD09XPeqhUon0Q_IX8TQexwV2IA=" alt="" />
              </div>
              <div>
                <img src="https://media.istockphoto.com/photos/sport-shoes-on-white-background-picture-id1314374679?k=20&m=1314374679&s=612x612&w=0&h=6GuCyyxxcifK5ejRU_ScVipdGuUX91KA1EoALmJU2z8=" alt="" />
              </div>
              <div>
                <img src="https://media.istockphoto.com/photos/sneakers-picture-id1212922499?k=20&m=1212922499&s=612x612&w=0&h=Vi_d6fHmi8aFR3U4hooWZc2P5fnsgDDvMfuDmJN16HY=" alt="" />
              </div>
              <div>
                <img src="https://media.istockphoto.com/photos/cute-sneaker-picture-id1307643357?k=20&m=1307643357&s=612x612&w=0&h=mMebdQrcRHHoVabJqiD65S-MSV4og5ZlLFQvPOd-O6A=" alt="" />
              </div>
              <div>
                <img src="https://media.istockphoto.com/photos/pink-shoes-isolated-on-white-background-picture-id1168124826?k=20&m=1168124826&s=612x612&w=0&h=b048izVE50yt5uTeJkKuY2R5aLtgu82FRHNAuJ0ix58=" alt="" />
              </div>
              <div>
                <img src="https://media.istockphoto.com/photos/sneakers-walking-in-midair-picture-id1402058059?k=20&m=1402058059&s=612x612&w=0&h=z_fi_ITlkPBtdO0fGnQnFs2wqy9PlbQbO7bX0t9dErc=" alt="" />
              </div>
            </div>
          </div>

          <WomenItem products={products} handleAddToCart={handleAddToCart} />
      </div>        
  )
}

export default Women