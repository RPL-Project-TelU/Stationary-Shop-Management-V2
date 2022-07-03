import React, { Component, Fragment } from 'react'
import './PurchaseEntry.css';
import axios from 'axios'
import Purchase from '../../components/Purchase/Purchase';

class PurchaseEntry extends Component {
    state= {
        post: [],
        formPurchase: {
            id: 1,
            product_name: '',
            quantity_product: '',
            price: '',
            vendor_name: '',
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios('http://localhost:3007/post-purchase-entry?_sort=id&_order=desc')
        .then((res) => {
            console.log(res.data)
            this.setState({
                post: res.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3007/post-purchase-entry', this.state.formPurchase).then((res) =>{
            console.log(res);
            this.getPostAPI();
            this.setState({
                formPurchase: {
                    id: 1,
                    product_name: '',
                    quantity_product: '',
                    price: '',
                    vendor_name: '',
                }
            })
        }, (err) => {
            console.log('error :', err)
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3007/post-purchase-entry/${this.state.formPurchase.id}`, this.state.formPurchase).then((res) => {
            console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formPurchase: {
                    id: 1,
                    product_name: '',
                    quantity_product: '',
                    price: '',
                    vendor_name: '',
                }
            })
        })
    }

    handleRemove = (data) => {
        console.log(data)
        axios.delete(`http://localhost:3007/post-purchase-entry/${data}`).then((res) => {
            this.getPostAPI();
        })
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formPurchase: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let formPurchaseNew = {...this.state.formPurchase}
        let timeStamp = new Date().getTime();
        if(!this.state.isUpdate){
            formPurchaseNew['id'] = timeStamp;
        }
        formPurchaseNew[event.target.name] = event.target.value;
        this.setState({
            formPurchase: formPurchaseNew
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI();
        } else{
            this.postDataToAPI();
        }
    }

    componentDidMount(){
        this.getPostAPI();
    }
  render(){
    return(
        <Fragment>
            <p className="section-title">Purchase Entry</p>
            <div className="form-add-post">
                <label htmlFor="product_name">Nama Produk</label>
                <input type="text" value={this.state.formPurchase.product_name} name="product_name" placeholder="Nama Produk" onChange={this.handleFormChange} />
                <label htmlFor="quantity_product">Total Produk</label>
                <input type="text" value={this.state.formPurchase.quantity_product} name="quantity_product" placeholder="Total Product" onChange={this.handleFormChange} />
                <label htmlFor="price">Price</label>
                <input type="text" value={this.state.formPurchase.price} name="price" placeholder="Harga" onChange={this.handleFormChange} />
                <label htmlFor="vendor_name">Nama Vendor</label>
                <input type="text" value={this.state.formPurchase.vendor_name} name="vendor_name" placeholder="Nama Vendor" onChange={this.handleFormChange} />
                <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
            </div>
            {
                this.state.post.map(post => {
                    return <Purchase key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                })
            }
            </Fragment>
    )
  }
}

export default PurchaseEntry;