import React from 'react'

const Images = () => {
    let Images = {
        Sidebar: require('./sidebar.png').default,
        HOC: require('./hoc.png').default,
        Ecommerce: require('./ecommerce.png').default,
        MusicApp: require('./musicapp.png').default,
    }
    
  return (
    <div>
            why why why
            <img src={Images.MusicApp} alt="" />
    </div>
  )
}

export default Images
