import React from "react";

class ChildComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            showJob: false
        };
    };

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    render() {
        let { name, age, address, arrayJob } = this.props;
        let { showJob } = this.state;
        let check = showJob == true ? "showJob = true" : "showJob = false";
        console.log('>>>check showjob', check);
        return (
            <>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="list-job">
                            {arrayJob.map((item) => {
                                return (
                                    <div>
                                        <span>
                                            {item.title} {"    "}
                                        </span>
                                        <span>
                                            {item.salary}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        );
    };
};

// const ChildComponent = (props) => {
//     let { name, age, address, arrayJob } = props;
//     return (
//         <>
//             <div className="list-job">
//                 {arrayJob.map((item) => {
//                     return (
//                         <div>
//                             <span>
//                                 {item.title} {"    "}
//                             </span>
//                             <span>
//                                 {item.salary}
//                             </span>
//                         </div>
//                     )
//                 })}
//             </div>
//         </>
//     );
// }
export default ChildComponent;