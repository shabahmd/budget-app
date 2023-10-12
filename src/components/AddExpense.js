
const AddExpenseForm = () => {


    return (
        <form >
            <div className='row'>
                <div className='col-sm col-lg-4'>
                    <label form='name'>Name</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                    />
                </div>
                <div className='col-sm col-lg-4'>
                    <label form='cost'>Name</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='cost'
                    />
                </div>
                </div>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;
