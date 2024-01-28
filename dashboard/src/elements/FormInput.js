const FormInput = (props) => {
    const { type } = props
    
    let className
    switch (type) {
        case 'submit':
            className = 'w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90'
            break;

        default:
            className = 'w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
            break;
    }
    return (
        <input
            {...props}
            className={className}
        />
    )
}

export default FormInput