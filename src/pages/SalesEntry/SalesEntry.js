import React, { Component, Fragment } from 'react'
import './SalesEntry.css';
import axios from 'axios';
import Sales from '../../components/Sales/Sales';

class SalesEntry extends Component {
    state= {
        post: [],
        formSales: {
            id: 1,
            purchase: '',
            price: '',
            payment: '',
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios('http://localhost:3007/post-sales-entry?_sort=id&_order=desc')
        .then((res) => {
            console.log(res.data)
            this.setState({
                post: res.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3007/post-sales-entry', this.state.formSales).then((res) =>{
            console.log(res);
            this.getPostAPI();
            this.setState({
                formSales: {
                    id: 1,
                    purchase: '',
                    price: '',
                    payment: '',
                }
            })
        }, (err) => {
            console.log('error :', err)
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3007/post-sales-entry/${this.state.formSales.id}`, this.state.formSales).then((res) => {
            console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formSales: {
                    id: 1,
                    purchase: '',
                    price: '',
                    payment: '',
                }
            })
        })
    }

    handleRemove = (data) => {
        console.log(data)
        axios.delete(`http://localhost:3007/post-sales-entry/${data}`).then((res) => {
            this.getPostAPI();
        })
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formSales: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let formSalesNew = {...this.state.formSales}
        let timeStamp = new Date().getTime();
        if(!this.state.isUpdate){
            formSalesNew['id'] = timeStamp;
        }
        formSalesNew[event.target.name] = event.target.value;
        this.setState({
            formSales: formSalesNew
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
            <p className="section-title">Sales Entry</p>
            <div className="form-add-post">
                <label htmlFor="purchase">Pembelian</label>
                <input type="text" value={this.state.formSales.purchase} name="purchase" placeholder="Pembelian" onChange={this.handleFormChange} />
                <label htmlFor="price">Price</label>
                <input type="text" value={this.state.formSales.price} name="price" placeholder="Harga" onChange={this.handleFormChange} />
                <label htmlFor="payment">Pembayaran</label>
                <input type="text" value={this.state.formSales.payment} name="payment" placeholder="Pembayaran" onChange={this.handleFormChange} />
                <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
            </div>
            {
                this.state.post.map(post => {
                    return <Sales key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                })
            }
            </Fragment>
    )
  }
}

export default SalesEntry;