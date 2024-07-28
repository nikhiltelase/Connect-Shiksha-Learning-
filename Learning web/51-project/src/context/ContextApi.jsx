import React, { createContext, useState } from 'react'

export const contextData = createContext(null)

function ContextApi(props) {
    const [items, setItems] = useState([
        {
            name:"smart watch",
            imgUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/o/d/x/-original-imahf4rkuhp5mfjj.jpeg?q=70"
        },
        {
            name:"camra",
            imgUrl:"https://rukminim2.flixcart.com/image/312/312/xif0q/point-shoot-camera/l/w/u/gr-na-3-24-24-iii-ricoh-original-imagkzjxghy74rar.jpeg?q=70"
        },
        {
            name:"moniter",
            imgUrl:"https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/0/5/k/mon-0054-hd-20-2023-mon-0054-frontech-original-imahyrryap3ccunb.jpeg?q=70"
        },
        {
            name:"earbuds",
            imgUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70"
        },
        {
            name:"mobile",
            imgUrl:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/q/i/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta-original-imah2rfuv44wc9j7.jpeg?q=70"
        },
        {
            name:"smart watch",
            imgUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/o/d/x/-original-imahf4rkuhp5mfjj.jpeg?q=70"
        },
        {
            name:"camra",
            imgUrl:"https://rukminim2.flixcart.com/image/312/312/xif0q/point-shoot-camera/l/w/u/gr-na-3-24-24-iii-ricoh-original-imagkzjxghy74rar.jpeg?q=70"
        },
        {
            name:"moniter",
            imgUrl:"https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/0/5/k/mon-0054-hd-20-2023-mon-0054-frontech-original-imahyrryap3ccunb.jpeg?q=70"
        },
        {
            name:"earbuds",
            imgUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70"
        },
        {
            name:"mobile",
            imgUrl:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/q/i/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta-original-imah2rfuv44wc9j7.jpeg?q=70"
        }
    ])

    const [cart, setCart] = useState([])

    const contextValue = {
       items,
       setItems,
       cart,
       setCart
    }
  return (
    <contextData.Provider value={contextValue}>
        {props.children}
    </contextData.Provider>
  )
}

export default ContextApi