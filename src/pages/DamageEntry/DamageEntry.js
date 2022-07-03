import React, { Component, Fragment } from 'react'
import './DamageEntry.css';
import axios from 'axios'
import Damage from '../../components/Damage/Damage';

class DamageEntry extends Component {
    state= {
        post: [],
        formDamage: {
            id: 1,
            product_name: '',
            quantity_product: '',
            damaged_product: '',
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios('http://localhost:3007/post-damage-entry?_sort=id&_order=desc')
        .then((res) => {
            console.log(res.data)
            this.setState({
                post: res.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3007/post-damage-entry', this.state.formDamage).then((res) =>{
            console.log(res);
            this.getPostAPI();
            this.setState({
                formDamage: {
                    id: 1,
                    product_name: '',
                    quantity_product: '',
                    damaged_product: '',
                }
            })
        }, (err) => {
            console.log('error :', err)
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3007/post-damage-entry/${this.state.formDamage.id}`, this.state.formDamage).then((res) => {
            console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formDamage: {
                    id: 1,
                    product_name: '',
                    quantity_product: '',
                    damaged_product: '',
                }
            })
        })
    }

    handleRemove = (data) => {
        console.log(data)
        axios.delete(`http://localhost:3007/post-damage-entry/${data}`).then((res) => {
            this.getPostAPI();
        })
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formDamage: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let formDamageNew = {...this.state.formDamage}
        let timeStamp = new Date().getTime();
        if(!this.state.isUpdate){
            formDamageNew['id'] = timeStamp;
        }
        formDamageNew[event.target.name] = event.target.value;
        this.setState({
            formDamage: formDamageNew
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
            <p className="section-title">Damage Entry</p>
            <div className="form-add-post">
            <label htmlFor="product_name">Nama Barang</label>
                <input type="text" value={this.state.formDamage.product_name} name="product_name" placeholder="Nama Barang" onChange={this.handleFormChange} />
                <label htmlFor="quantity_product">Jumlah Barang</label>
                <input type="text" value={this.state.formDamage.quantity_product} name="quantity_product" placeholder="Jumlah Barang" onChange={this.handleFormChange} />
                <label htmlFor="damaged_product">Barang Rusak</label>
                <input type="text" value={this.state.formDamage.damaged_product} name="damaged_product" placeholder="Barang Rusak" onChange={this.handleFormChange} />
                <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
            </div>
            {
                this.state.post.map(post => {
                    return <Damage key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                })
            }
            </Fragment>
    )
  }
}

export default DamageEntry;