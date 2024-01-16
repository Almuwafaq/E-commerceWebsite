

const TopAds = ({label,type,...props}) => {
  return (
    <div className="">
      <form action="">
        <label htmlFor="">{label}</label>
        <input type={type} {...props} />
      </form>
    </div>
  )
}

export default TopAds
