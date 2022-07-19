const Media = ({ showSideBar, setShowSideBar }) => {
  return (
    <div className="side_bar">
      <i onClick={() => setShowSideBar(!showSideBar)} className={showSideBar ? 'bi bi-x' : 'bi bi-list'}></i>
    </div>
  )
}

export default Media