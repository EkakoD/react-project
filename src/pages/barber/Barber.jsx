import { Component } from 'react'
// import axios from 'axios'

// import Loader from '../components/Loader'
// import { withRouter } from '../utils/withRouter'

const Barber = () => {
    //   constructor(props){
    //     super(props)

    //     this.state = {
    //       loading: false,
    //       barbers: {}
    //     }
    //   }



    //   componentDidMount(){
    //     this.setState((prevState) => {
    //       return { prevState, loading: true }
    //     })
    //     axios
    //       .get(`https://fakestoreapi.com/products/${this.props.params.productId}`)
    //       .then((response) => {
    //         this.setState((prevState) => {
    //           return { prevState, product: response.data, loading: false }
    //         })
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //         this.setState((prevState) => {
    //           return { prevState, loading: false }
    //         })
    //       })
    //   }

    // render(){
        // const { barber, loading } = this.state 
        // const { handleAddProduct } = this.props

        const renderProduct = () => (
            <div className='flex flex-col items-center w-1/2 mt-20'>
                {/* <h1>{barber.title}</h1>
        <img src={barber.image} className='w-40 h-40' />
        <p className='mt-4'>{barber.description}</p>
        <div className='flex justify-between w-full mt-6'>
          <p>Rating: {barber.rating.rate}</p>
          <p>Price: ${barber.price}</p>
        </div>
        <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28'
          onClick={() => handleAddProduct(barber)}>Add to Cart</button> */}
            </div>
        )

        const renderContent = () => (
            
            <>
                {renderProduct()}
                {/* {!barber.id ? <Loader /> : renderProduct()} */}
            </>
        )
        return (
            <div className='flex flex-col items-center w-full h-screen'>
                {renderContent()}
            </div>
        )
    // }d
}

export default Barber// withRouter is a HOC. Look it up