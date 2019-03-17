import React from "react";

// export form stuff

export Input(props) => {
    return(
        <div className='form-group'>
            <input className='form-control' {...props} />
        </div>
    );
}

export SearchBtn(props) => {
    return(
        <button {...props} style={{ float: 'right' }} className='btn btn-success'>
            {props.children}
        </button>
    );
}