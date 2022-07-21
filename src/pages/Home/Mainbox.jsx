import Button from "../Button"

const Mainbox = () => {
  return (
    <div className="mainbox">
        <div className="box">
            <div className="box_top">
                <div className="box_left">

                </div>
                <div className="box_right">
                    <img src="https://images.unsplash.com/photo-1586525198428-225f6f12cff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
            <div className="box_down">
                <div className="boxes">
                    <h5>Latest</h5>

                    <div className="box">
                        <p>N5,500</p>
                        <Button text='Add to cart' color='#ff7d1a' />
                    </div>
                </div>
                <div className="boxes">
                    <h5>Trending</h5>

                    <div className="box">
                            <p>N7,250</p>
                            <Button text='Add to cart' color='#ff7d1a' />
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Mainbox