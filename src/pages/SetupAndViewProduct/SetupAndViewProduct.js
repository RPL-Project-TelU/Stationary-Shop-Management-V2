import React, { Component, Fragment } from 'react'
import './SetupAndViewProduct.css';
import axios from 'axios'
import SetupAndView from '../../components/SetupAndView/SetupAndView';

class SetupAndViewProduct extends Component {
    state= {
        post: [],
        formSetupAndView: {
            id: 1,
            code_product: '',
            product_name: '',
            vendor_name: '',
            quantity_product: '',
            price: '',
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios('http://localhost:3007/post-setup-and-view-product?_sort=id&_order=desc')
        .then((res) => {
            console.log(res.data)
            this.setState({
                post: res.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3007/post-setup-and-view-product', this.state.formSetupAndView).then((res) =>{
            console.log(res);
            this.getPostAPI();
            this.setState({
                formSetupAndView: {
                    id: 1,
                    code_product: '',
                    product_name: '',
                    vendor_name: '',
                    quantity_product: '',
                    price: '',
                }
            })
        }, (err) => {
            console.log('error :', err)
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3007/post-setup-and-view-product/${this.state.formSetupAndView.id}`, this.state.formSetupAndView).then((res) => {
            console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formSetupAndView: {
                    id: 1,
                    code_product: '',
                    product_name: '',
                    vendor_name: '',
                    quantity_product: '',
                    price: '',
                }
            })
        })
    }

    handleRemove = (data) => {
        console.log(data)
        axios.delete(`http://localhost:3007/post-setup-and-view-product/${data}`).then((res) => {
            this.getPostAPI();
        })
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formSetupAndView: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let formSetupAndViewNew = {...this.state.formSetupAndView}
        let timeStamp = new Date().getTime();
        if(!this.state.isUpdate){
            formSetupAndViewNew['id'] = timeStamp;
        }
        formSetupAndViewNew[event.target.name] = event.target.value;
        this.setState({
            formSetupAndView: formSetupAndViewNew
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
            <p className="section-title">Setup And View Product</p>
            <div className="form-add-post">
                <label htmlFor="code_product">Kode Produk</label>
                <input type="text" value={this.state.formSetupAndView.code_product} name="code_product" placeholder="Kode Produk" onChange={this.handleFormChange} />
                <label htmlFor="product_name">Nama Produk</label>
                <input type="text" value={this.state.formSetupAndView.product_name} name="product_name" placeholder="Nama Produk" onChange={this.handleFormChange} />
                <label htmlFor="vendor_name">Nama Vendor</label>
                <input type="text" value={this.state.formSetupAndView.vendor_name} name="vendor_name" placeholder="Nama Vendor" onChange={this.handleFormChange} />
                <label htmlFor="quantity_product">Jumlah Produk</label>
                <input type="text" value={this.state.formSetupAndView.quantity_product} name="quantity_product" placeholder="Jumlah Produk" onChange={this.handleFormChange} />
                <label htmlFor="price">Price</label>
                <input type="text" value={this.state.formSetupAndView.price} name="price" placeholder="Harga" onChange={this.handleFormChange} />
                <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
            </div>
            {
                this.state.post.map(post => {
                    return <SetupAndView key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                })
            }
            </Fragment>
    )
  }
}

export default SetupAndViewProduct;