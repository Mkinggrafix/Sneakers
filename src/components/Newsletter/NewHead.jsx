const NewHead = ({ setShowAvatar }) => {
    return (
      <div className='cart_header'>
          <h4>Newsletter</h4>
          <i onClick={() => {
            setShowAvatar(false)
          }} className="bi bi-x"></i>
      </div>
    )
  }
  
  export default NewHead