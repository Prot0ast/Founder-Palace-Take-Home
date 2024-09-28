import React from "react"
import './Component.css'

export class Header extends React.Component {
    componentDidMount(): void {
      // Normally used to make API calls or fetch data
    }
  
    componentWillUnmount(): void {
      // Clean up code: remove event listeners, cancel network requests, etc.
    }    

    render() {
        return (
            <div>
                <img className="centerImg"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5_eCMFv2JFx_GLpkK4ZcVKcXqdTnkKdgWA&s" alt="Rick and Morty Logo" style={{ width: 400, height: 150 }}/>
            </div>
        )
    }
}