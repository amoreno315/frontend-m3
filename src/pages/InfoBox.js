import React, {Component} from 'react'
import box from '../lib/box-service';
import NewItem from '../components/NewItem';
import Navbar from '../components/Navbar';

class InfoBox extends Component {

    state = {
        info: null,
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        //aqui es undefined
        // console.log("this.props id de box", this.props)
        box.boxInfo(id)
            .then((result) => {
                // console.log(result) //devuelve array con los datos
                this.setState({
                    info: result
                })
            });
    }


    render() {
        let {info} = this.state;
        // console.log("info", this.state)
        if (this.state.info) {
            // aqui no entra
            const ListItems = (props) => {
                return (
                    <React.Fragment>
                        {props.items.map(item => (
                            <React.Fragment key={item.id}>
                                <div>
                                    <p>Name: {item.nameitem} </p>
                                    <p>Description: {item.description}</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                )
            };
            return (
                <div className="flex-col-center">
                    <Navbar/>
                    <h2>Box Details</h2>
                    {/* <h1>{info._id}</h1> */}
                    {/* esto tengo que pasarlo al componente NewBox */}
                    <h3>{info.boxname}</h3>
                    <p>Box Nummer: {info.boxnummer}</p>
                    <p>Category: {info.category}</p>
                    <p>Description: {info.description}</p>
                    <p>Storage Location: {info.storagelocation}</p>

                    <hr className="hr-color"/>
                    <h3>Items in this box</h3>
                    {info.items.length > 0 ?
                        (<div><ListItems items={info.items}/></div>)
                        : (<p>No Items available ins this box</p>)}
                    <hr className="hr-color"/>
                    <NewItem {...this.props}/>
                </div>
            )
        } else {
            return <h1>Loading Single Box</h1>
        }
    }
}

export default InfoBox;